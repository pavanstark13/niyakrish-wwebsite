"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import {
  Calculator,
  Layers,
  Box,
  Mountain,
  ArrowRight,
  RotateCcw,
  Info,
  CheckCircle2,
  ChevronDown,
  Printer,
  MessageCircle,
  Building2,
} from "lucide-react";

type ProjectType = "slab" | "wall" | "foundation" | "road" | "column" | "custom";

interface Inputs {
  length: string;
  width: string;
  height: string;
  thickness: string;
  wallHeight: string;
  wallLength: string;
  wallType: "single" | "double";
  blockSize: "4" | "6" | "8";
  openings: string;
  colWidth: string;
  colDepth: string;
  colHeight: string;
  colCount: string;
  volume: string;
  grade: string;
}

interface Results {
  rmc: number | null;
  blocks: number | null;
  aggregates: number | null;
  cement: number | null;   // 50 kg bags
  sand: number | null;     // metric tonnes
  blockSizeLabel: string;
  grade: string;
  notes: string[];
}

// Conversion constants
const FT_TO_M = 0.3048;
const IN_TO_M = 0.0254;
const SQFT_TO_M2 = 0.0929;
const FT3_TO_M3 = 0.02832;

const projectTypes = [
  { id: "slab" as ProjectType, icon: Layers, label: "Slab / Roof", desc: "Floor slab, roof, or deck" },
  { id: "wall" as ProjectType, icon: Box, label: "Block Wall", desc: "Compound wall or partition" },
  { id: "foundation" as ProjectType, icon: Mountain, label: "Foundation", desc: "Footing, plinth, or beam" },
  { id: "road" as ProjectType, icon: Calculator, label: "Road / Pavement", desc: "Concrete road or driveway" },
  { id: "column" as ProjectType, icon: Building2, label: "Columns", desc: "RCC columns or pillars" },
  { id: "custom" as ProjectType, icon: Calculator, label: "Custom Volume", desc: "Enter your own volume" },
];

const grades = ["M10", "M15", "M20", "M25", "M30", "M35", "M40", "M45", "M50", "M55", "M60"];

const gradeRecommendations: Record<ProjectType, string> = {
  slab: "M20 – M30",
  wall: "M15 – M20",
  foundation: "M20 – M30",
  road: "M30 – M40",
  column: "M25 – M35",
  custom: "M20",
};

function calculate(type: ProjectType, inputs: Inputs): Results {
  const notes: string[] = [];
  const WASTAGE = 1.05;
  let rmc: number | null = null;
  let blocks: number | null = null;
  let aggregates: number | null = null;
  let cement: number | null = null;
  let sand: number | null = null;
  let blockSizeLabel = "";
  const grade = inputs.grade || gradeRecommendations[type];

  if (type === "slab") {
    const L = parseFloat(inputs.length);
    const W = parseFloat(inputs.width);
    const T = parseFloat(inputs.thickness); // inches
    if (L > 0 && W > 0 && T > 0) {
      const areaSqft = L * W;
      const vol = L * FT_TO_M * W * FT_TO_M * T * IN_TO_M * WASTAGE;
      rmc = Math.ceil(vol * 10) / 10;
      aggregates = Math.ceil(rmc * 0.7 * 1.6 * 10) / 10;
      notes.push(`Slab area: ${areaSqft.toFixed(0)} sq.ft`);
      notes.push(`Thickness: ${T} inches (${Math.round(T * 25.4)} mm)`);
      notes.push("Includes 5% wastage");
    }
  } else if (type === "wall") {
    const L = parseFloat(inputs.wallLength);
    const H = parseFloat(inputs.wallHeight);
    const openingsSqft = parseFloat(inputs.openings) || 0;
    const bSize = inputs.blockSize || "8";
    const thicknessMm = bSize === "4" ? 100 : bSize === "6" ? 150 : 200;
    blockSizeLabel = bSize === "4" ? '4" (100mm)' : bSize === "6" ? '6" (150mm)' : '8" (200mm)';

    if (L > 0 && H > 0) {
      const grossSqft = L * H;
      const netSqft = Math.max(0, grossSqft - openingsSqft);
      const areaM2 = netSqft * SQFT_TO_M2;
      const isDouble = inputs.wallType === "double";
      const blocksPerM2 = isDouble ? 25 : 12.5;
      blocks = Math.ceil(areaM2 * blocksPerM2 * WASTAGE);

      // Mortar estimate — 1:6 cement:sand, dry factor 1.33
      // Joint mortar ≈ 7.1% of wall volume (10mm joints on 400×200mm face)
      const wallVolM3 = areaM2 * (thicknessMm / 1000) * (isDouble ? 2 : 1);
      const mortarWet = wallVolM3 * 0.071;
      const mortarDry = mortarWet * 1.33;
      cement = Math.ceil(mortarDry / 7 * 1440 / 50);       // 50 kg bags
      sand = Math.ceil(mortarDry * 6 / 7 * 1600 / 100) / 10; // MT

      notes.push(`Gross wall area: ${grossSqft.toFixed(0)} sq.ft`);
      if (openingsSqft > 0) notes.push(`Openings deducted: ${openingsSqft.toFixed(0)} sq.ft (doors/windows)`);
      notes.push(`Net wall area: ${netSqft.toFixed(0)} sq.ft`);
      notes.push(`Block size: NIYA ${blockSizeLabel} solid blocks`);
      notes.push(isDouble ? "Double leaf wall" : "Single leaf wall");
      notes.push("Mortar ratio: 1:6 (cement:sand)");
      notes.push("Includes 5% wastage on blocks");
    }
  } else if (type === "foundation") {
    const L = parseFloat(inputs.length);
    const W = parseFloat(inputs.width);
    const D = parseFloat(inputs.height); // feet
    if (L > 0 && W > 0 && D > 0) {
      const areaSqft = L * W;
      const vol = L * W * D * FT3_TO_M3 * WASTAGE;
      rmc = Math.ceil(vol * 10) / 10;
      aggregates = Math.ceil(rmc * 0.72 * 1.6 * 10) / 10;
      notes.push(`Foundation area: ${areaSqft.toFixed(0)} sq.ft`);
      notes.push(`Depth: ${D} ft`);
      notes.push("Minimum M20 grade recommended");
      notes.push("Includes 5% wastage");
    }
  } else if (type === "road") {
    const L = parseFloat(inputs.length);
    const W = parseFloat(inputs.width);
    const T = parseFloat(inputs.thickness); // inches
    if (L > 0 && W > 0 && T > 0) {
      const areaSqft = L * W;
      const vol = L * FT_TO_M * W * FT_TO_M * T * IN_TO_M * WASTAGE;
      rmc = Math.ceil(vol * 10) / 10;
      aggregates = Math.ceil(rmc * 0.75 * 1.6 * 10) / 10;
      notes.push(`Road area: ${areaSqft.toFixed(0)} sq.ft`);
      notes.push(`Thickness: ${T} inches (${Math.round(T * 25.4)} mm)`);
      notes.push("M30 minimum for vehicular traffic");
      notes.push("Includes 5% wastage");
    }
  } else if (type === "column") {
    const cw = parseFloat(inputs.colWidth);   // inches
    const cd = parseFloat(inputs.colDepth);   // inches
    const ch = parseFloat(inputs.colHeight);  // feet
    const cc = parseInt(inputs.colCount) || 1;
    if (cw > 0 && cd > 0 && ch > 0) {
      // (W_in/12) * (D_in/12) * H_ft = volume in ft³, then × FT3_TO_M3
      const volPerCol = (cw / 12) * (cd / 12) * ch * FT3_TO_M3;
      const vol = volPerCol * cc * WASTAGE;
      rmc = Math.ceil(vol * 100) / 100;
      aggregates = Math.ceil(rmc * 0.7 * 1.6 * 10) / 10;
      notes.push(`Column size: ${cw}"×${cd}" × ${ch} ft high`);
      notes.push(`Number of columns: ${cc}`);
      notes.push(`Volume per column: ${volPerCol.toFixed(3)} m³`);
      notes.push("Includes 5% wastage");
    }
  } else if (type === "custom") {
    const vol = parseFloat(inputs.volume);
    if (vol > 0) {
      rmc = vol;
      aggregates = Math.ceil(vol * 0.7 * 1.6 * 10) / 10;
      notes.push("Custom volume entered directly");
    }
  }

  return { rmc, blocks, aggregates, cement, sand, blockSizeLabel, grade, notes };
}

function buildWhatsAppMessage(type: ProjectType, inputs: Inputs, results: Results): string {
  const typeName = projectTypes.find((p) => p.id === type)?.label || type;
  const lines = [
    `Hello NIYA! I used your Materials Calculator and need a quote.`,
    ``,
    `Project: ${typeName}`,
    `Dimensions: ${results.notes.join(" | ")}`,
    ``,
    `Requirements:`,
  ];
  if (results.rmc !== null) lines.push(`- Ready Mix Concrete: ${results.rmc} m³ (${results.grade})`);
  if (results.blocks !== null) lines.push(`- Solid Blocks: ${results.blocks.toLocaleString()} pcs (${results.blockSizeLabel})`);
  if (results.cement !== null) lines.push(`- Cement (mortar): ${results.cement} bags (50 kg)`);
  if (results.sand !== null) lines.push(`- Sand (mortar): ${results.sand} MT`);
  if (results.aggregates !== null) lines.push(`- Aggregates: ${results.aggregates} MT`);
  lines.push(``, `Please provide a quote. Thank you!`);
  return encodeURIComponent(lines.join("\n"));
}

export default function CalculatorPage() {
  const [project, setProject] = useState<ProjectType>("slab");
  const [inputs, setInputs] = useState<Inputs>({
    length: "", width: "", height: "", thickness: "6",
    wallHeight: "", wallLength: "", wallType: "single", blockSize: "8", openings: "",
    colWidth: "9", colDepth: "9", colHeight: "", colCount: "1",
    volume: "", grade: "",
  });
  const [results, setResults] = useState<Results | null>(null);

  const handleInput = (field: keyof Inputs, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
    setResults(null);
  };

  const handleCalculate = useCallback(() => {
    setResults(calculate(project, inputs));
  }, [project, inputs]);

  const handleReset = () => {
    setInputs({
      length: "", width: "", height: "", thickness: "6",
      wallHeight: "", wallLength: "", wallType: "single", blockSize: "8", openings: "",
      colWidth: "9", colDepth: "9", colHeight: "", colCount: "1",
      volume: "", grade: "",
    });
    setResults(null);
  };

  const inputClass = "w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors";
  const labelClass = "block text-xs font-bold uppercase tracking-widest text-stone-600 mb-2";

  return (
    <>
      <section className="pt-32 pb-12 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
            <Calculator size={14} className="text-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Free Tool</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">Materials Calculator</h1>
          <p className="text-stone-400 max-w-xl mx-auto text-base leading-relaxed">
            Enter dimensions in <strong className="text-amber-400">sq.ft & inches</strong> — get instant estimates for concrete, blocks, and aggregates.
          </p>
        </div>
      </section>

      <section className="py-12 bg-stone-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Step 1: Project Type */}
          <div className="bg-white border border-stone-200 rounded-sm p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 bg-amber-500 rounded-sm flex items-center justify-center text-stone-900 font-black text-sm">1</div>
              <h2 className="text-lg font-black text-stone-900">Select Project Type</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {projectTypes.map((pt) => {
                const Icon = pt.icon;
                return (
                  <button key={pt.id} onClick={() => { setProject(pt.id); setResults(null); }}
                    className={`p-4 rounded-sm border-2 text-left transition-all ${project === pt.id ? "border-amber-500 bg-amber-50" : "border-stone-200 bg-stone-50 hover:border-stone-300"}`}>
                    <Icon size={18} className={project === pt.id ? "text-amber-600 mb-2" : "text-stone-400 mb-2"} />
                    <div className={`text-xs font-bold ${project === pt.id ? "text-amber-700" : "text-stone-700"}`}>{pt.label}</div>
                    <div className="text-xs text-stone-400 mt-0.5 hidden sm:block">{pt.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Dimensions */}
          <div className="bg-white border border-stone-200 rounded-sm p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 bg-amber-500 rounded-sm flex items-center justify-center text-stone-900 font-black text-sm">2</div>
              <h2 className="text-lg font-black text-stone-900">Enter Dimensions</h2>
            </div>

            {project === "slab" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>Length (ft)</label>
                    <input type="number" min="0" placeholder="e.g. 30" value={inputs.length} onChange={(e) => handleInput("length", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Width (ft)</label>
                    <input type="number" min="0" placeholder="e.g. 25" value={inputs.width} onChange={(e) => handleInput("width", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Thickness (inches)</label>
                    <input type="number" min="0" placeholder="e.g. 6" value={inputs.thickness} onChange={(e) => handleInput("thickness", e.target.value)} className={inputClass} />
                  </div>
                </div>
                <p className="text-xs text-stone-400 flex items-center gap-1">
                  <Info size={12} /> Typical slab thickness: 4–5 in for floors, 5–6 in for roofs
                </p>
              </div>
            )}

            {project === "wall" && (
              <div className="space-y-5">
                {/* Block size selector */}
                <div>
                  <label className={labelClass}>Block Size</label>
                  <div className="grid grid-cols-3 gap-3">
                    {([
                      { val: "4", label: '4" Block', sub: "100mm thick", use: "Partition / non-load bearing" },
                      { val: "6", label: '6" Block', sub: "150mm thick", use: "Internal load bearing" },
                      { val: "8", label: '8" Block', sub: "200mm thick", use: "External / compound wall" },
                    ] as const).map((b) => (
                      <button key={b.val} onClick={() => handleInput("blockSize", b.val)}
                        className={`p-3 rounded-sm border-2 text-left transition-all ${inputs.blockSize === b.val ? "border-amber-500 bg-amber-50" : "border-stone-200 bg-stone-50 hover:border-stone-300"}`}>
                        <div className={`text-sm font-black ${inputs.blockSize === b.val ? "text-amber-700" : "text-stone-800"}`}>{b.label}</div>
                        <div className={`text-xs font-semibold mt-0.5 ${inputs.blockSize === b.val ? "text-amber-600" : "text-stone-500"}`}>{b.sub}</div>
                        <div className="text-xs text-stone-400 mt-1 hidden sm:block">{b.use}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dimensions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Wall Length (ft)</label>
                    <input type="number" min="0" placeholder="e.g. 60" value={inputs.wallLength} onChange={(e) => handleInput("wallLength", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Wall Height (ft)</label>
                    <input type="number" min="0" placeholder="e.g. 10" value={inputs.wallHeight} onChange={(e) => handleInput("wallHeight", e.target.value)} className={inputClass} />
                  </div>
                </div>

                {/* Wall type + openings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Wall Type</label>
                    <div className="relative">
                      <select value={inputs.wallType} onChange={(e) => handleInput("wallType", e.target.value as "single" | "double")} className={inputClass + " appearance-none pr-8"}>
                        <option value="single">Single leaf (one block wide)</option>
                        <option value="double">Double leaf (two blocks wide)</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Openings Area (sq.ft) <span className="text-stone-400 normal-case font-normal">— optional</span></label>
                    <input type="number" min="0" placeholder="e.g. 40 for 2 doors + 3 windows" value={inputs.openings} onChange={(e) => handleInput("openings", e.target.value)} className={inputClass} />
                  </div>
                </div>

                <p className="text-xs text-stone-400 flex items-center gap-1">
                  <Info size={12} /> Results include blocks + cement bags + sand for mortar (1:6 mix). Openings = total area of doors &amp; windows to subtract.
                </p>
              </div>
            )}

            {project === "foundation" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>Length (ft)</label>
                    <input type="number" min="0" placeholder="e.g. 20" value={inputs.length} onChange={(e) => handleInput("length", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Width (ft)</label>
                    <input type="number" min="0" placeholder="e.g. 15" value={inputs.width} onChange={(e) => handleInput("width", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Depth (ft)</label>
                    <input type="number" min="0" placeholder="e.g. 3" value={inputs.height} onChange={(e) => handleInput("height", e.target.value)} className={inputClass} />
                  </div>
                </div>
                <p className="text-xs text-stone-400 flex items-center gap-1">
                  <Info size={12} /> For multiple footings, multiply the result by the number of footings
                </p>
              </div>
            )}

            {project === "road" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>Road Length (ft)</label>
                    <input type="number" min="0" placeholder="e.g. 300" value={inputs.length} onChange={(e) => handleInput("length", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Road Width (ft)</label>
                    <input type="number" min="0" placeholder="e.g. 20" value={inputs.width} onChange={(e) => handleInput("width", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Thickness (inches)</label>
                    <input type="number" min="0" placeholder="e.g. 8" value={inputs.thickness} onChange={(e) => handleInput("thickness", e.target.value)} className={inputClass} />
                  </div>
                </div>
                <p className="text-xs text-stone-400 flex items-center gap-1">
                  <Info size={12} /> Typical road thickness: 6–10 inches. M30 grade recommended for vehicles.
                </p>
              </div>
            )}

            {project === "column" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <label className={labelClass}>Width (inches)</label>
                    <input type="number" min="0" placeholder="e.g. 9" value={inputs.colWidth} onChange={(e) => handleInput("colWidth", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Depth (inches)</label>
                    <input type="number" min="0" placeholder="e.g. 9" value={inputs.colDepth} onChange={(e) => handleInput("colDepth", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Height (ft)</label>
                    <input type="number" min="0" placeholder="e.g. 10" value={inputs.colHeight} onChange={(e) => handleInput("colHeight", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>No. of Columns</label>
                    <input type="number" min="1" placeholder="e.g. 12" value={inputs.colCount} onChange={(e) => handleInput("colCount", e.target.value)} className={inputClass} />
                  </div>
                </div>
                <p className="text-xs text-stone-400 flex items-center gap-1">
                  <Info size={12} /> Common sizes: 9"×9", 9"×12", 12"×12". Grade M25 or above recommended.
                </p>
              </div>
            )}

            {project === "custom" && (
              <div className="space-y-4">
                <div className="max-w-xs">
                  <label className={labelClass}>Total Volume (m³)</label>
                  <input type="number" min="0" placeholder="e.g. 25" value={inputs.volume} onChange={(e) => handleInput("volume", e.target.value)} className={inputClass} />
                </div>
                <p className="text-xs text-stone-400 flex items-center gap-1">
                  <Info size={12} /> Enter your pre-calculated concrete volume directly in cubic metres
                </p>
              </div>
            )}

            {/* Grade selector */}
            <div className="mt-6 pt-6 border-t border-stone-100">
              <label className={labelClass}>
                Concrete Grade (recommended: {gradeRecommendations[project]})
              </label>
              <div className="flex flex-wrap gap-2">
                {grades.map((g) => (
                  <button key={g} onClick={() => handleInput("grade", inputs.grade === g ? "" : g)}
                    className={`px-3 py-1.5 rounded-sm text-xs font-bold border transition-all ${inputs.grade === g ? "bg-stone-900 border-stone-900 text-white" : "bg-stone-50 border-stone-200 text-stone-600 hover:border-stone-400"}`}>
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Calculate buttons */}
          <div className="flex gap-3 mb-6">
            <button onClick={handleCalculate}
              className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-stone-900 font-black text-sm rounded-sm hover:bg-amber-400 transition-all uppercase tracking-wider">
              <Calculator size={16} />
              Calculate Materials
            </button>
            <button onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-4 border border-stone-200 text-stone-600 font-semibold text-sm rounded-sm hover:border-stone-400 transition-all">
              <RotateCcw size={14} />
              Reset
            </button>
          </div>

          {/* Results */}
          {results && (
            <div className="bg-stone-900 rounded-sm p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-amber-400" />
                  <h2 className="text-lg font-black text-white">Your Estimated Requirements</h2>
                </div>
                <button onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-stone-700 text-stone-400 text-xs font-semibold rounded-sm hover:border-stone-500 hover:text-white transition-all">
                  <Printer size={13} />
                  Print
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {results.rmc !== null && (
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Layers size={16} className="text-amber-400" />
                      <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Ready Mix Concrete</span>
                    </div>
                    <div className="text-4xl font-black text-white mb-1">{results.rmc}</div>
                    <div className="text-stone-400 text-sm">cubic metres (m³)</div>
                    <div className="mt-3 pt-3 border-t border-stone-700">
                      <span className="text-xs font-bold text-amber-500">Grade: </span>
                      <span className="text-xs text-stone-300">{results.grade}</span>
                    </div>
                  </div>
                )}
                {results.blocks !== null && (
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Box size={16} className="text-amber-400" />
                      <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Solid Blocks</span>
                    </div>
                    <div className="text-4xl font-black text-white mb-1">{results.blocks.toLocaleString()}</div>
                    <div className="text-stone-400 text-sm">number of blocks</div>
                    <div className="mt-3 pt-3 border-t border-stone-700">
                      <span className="text-xs text-stone-400">
                        400×200×{results.blockSizeLabel ? results.blockSizeLabel.replace(/"/g, "").trim() : "200mm"} NIYA solid blocks
                      </span>
                    </div>
                  </div>
                )}
                {results.aggregates !== null && (
                  <div className="bg-stone-800 border border-stone-700 rounded-sm p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Mountain size={16} className="text-stone-400" />
                      <span className="text-stone-400 text-xs font-bold uppercase tracking-widest">Aggregates</span>
                    </div>
                    <div className="text-4xl font-black text-white mb-1">{results.aggregates}</div>
                    <div className="text-stone-400 text-sm">metric tonnes (MT)</div>
                    <div className="mt-3 pt-3 border-t border-stone-700">
                      <span className="text-xs text-stone-400">20mm coarse aggregate</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Mortar materials for block wall */}
              {(results.cement !== null || results.sand !== null) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {results.cement !== null && (
                    <div className="bg-stone-800 border border-stone-700 rounded-sm p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 rounded-sm bg-stone-500 flex-shrink-0" />
                        <span className="text-stone-400 text-xs font-bold uppercase tracking-widest">Cement (for mortar)</span>
                      </div>
                      <div className="text-4xl font-black text-white mb-1">{results.cement}</div>
                      <div className="text-stone-400 text-sm">bags of 50 kg</div>
                      <div className="mt-3 pt-3 border-t border-stone-700">
                        <span className="text-xs text-stone-400">1:6 cement:sand ratio for block laying</span>
                      </div>
                    </div>
                  )}
                  {results.sand !== null && (
                    <div className="bg-stone-800 border border-stone-700 rounded-sm p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Mountain size={16} className="text-stone-400" />
                        <span className="text-stone-400 text-xs font-bold uppercase tracking-widest">Sand (for mortar)</span>
                      </div>
                      <div className="text-4xl font-black text-white mb-1">{results.sand}</div>
                      <div className="text-stone-400 text-sm">metric tonnes (MT)</div>
                      <div className="mt-3 pt-3 border-t border-stone-700">
                        <span className="text-xs text-stone-400">M-sand or river sand for block mortar</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Notes */}
              {results.notes.length > 0 && (
                <div className="bg-stone-800 rounded-sm p-4 mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Calculation Summary</p>
                  <ul className="space-y-1">
                    {results.notes.map((note, i) => (
                      <li key={i} className="text-xs text-stone-400 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-stone-900 font-bold text-sm rounded-sm hover:bg-amber-400 transition-all uppercase tracking-wider">
                  Get a Quote for These Materials
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={`https://wa.me/919071957777?text=${buildWhatsAppMessage(project, inputs, results)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold text-sm rounded-sm hover:bg-[#20bb5a] transition-all uppercase tracking-wider">
                  <MessageCircle size={14} />
                  Order via WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-sm p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">Disclaimer</p>
            <p className="text-xs text-stone-500 leading-relaxed">
              Estimates are based on standard IS formulas with 5% wastage. Actual requirements may vary based on site conditions, mix design, and structural specifications. Consult our engineers for final quantities. NIYA team is available 24/7 — call +91 90719 57777.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
