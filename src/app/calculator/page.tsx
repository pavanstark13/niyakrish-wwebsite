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
} from "lucide-react";

type ProjectType = "slab" | "wall" | "foundation" | "road" | "custom";

interface Inputs {
  length: string;
  width: string;
  height: string;
  thickness: string;
  wallHeight: string;
  wallLength: string;
  wallType: "single" | "double";
  area: string;
  volume: string;
  grade: string;
}

interface Results {
  rmc: number | null;
  blocks: number | null;
  aggregates: number | null;
  grade: string;
  notes: string[];
}

const projectTypes = [
  {
    id: "slab" as ProjectType,
    icon: Layers,
    label: "Slab / Roof",
    desc: "Floor slab, roof, or deck",
  },
  {
    id: "wall" as ProjectType,
    icon: Box,
    label: "Block Wall",
    desc: "Compound wall or partition",
  },
  {
    id: "foundation" as ProjectType,
    icon: Mountain,
    label: "Foundation",
    desc: "Footing, column, or plinth",
  },
  {
    id: "road" as ProjectType,
    icon: Calculator,
    label: "Road / Pavement",
    desc: "Concrete road or driveway",
  },
  {
    id: "custom" as ProjectType,
    icon: Calculator,
    label: "Custom Volume",
    desc: "Enter your own volume",
  },
];

const grades = ["M10", "M15", "M20", "M25", "M30", "M35", "M40", "M45", "M50"];
const gradeRecommendations: Record<ProjectType, string> = {
  slab: "M20 – M30",
  wall: "M15 – M20",
  foundation: "M20 – M30",
  road: "M30 – M40",
  custom: "M20",
};

function calculate(type: ProjectType, inputs: Inputs): Results {
  const notes: string[] = [];
  const WASTAGE = 1.05;

  let rmc: number | null = null;
  let blocks: number | null = null;
  let aggregates: number | null = null;
  let grade = inputs.grade || gradeRecommendations[type];

  if (type === "slab") {
    const area = parseFloat(inputs.area) || parseFloat(inputs.length) * parseFloat(inputs.width);
    const thickness = parseFloat(inputs.thickness) / 1000; // mm to m
    if (area > 0 && thickness > 0) {
      const vol = area * thickness * WASTAGE;
      rmc = Math.ceil(vol * 10) / 10;
      aggregates = Math.ceil(rmc * 0.7 * 1.6 * 10) / 10;
      notes.push(`Slab area: ${area.toFixed(1)} m²`);
      notes.push(`Thickness: ${inputs.thickness} mm`);
      notes.push("Includes 5% wastage factor");
    }
  } else if (type === "wall") {
    const len = parseFloat(inputs.wallLength);
    const ht = parseFloat(inputs.wallHeight);
    if (len > 0 && ht > 0) {
      const area = len * ht;
      const blocksPerM2 = inputs.wallType === "double" ? 25 : 12.5;
      blocks = Math.ceil(area * blocksPerM2 * WASTAGE);
      notes.push(`Wall area: ${area.toFixed(1)} m²`);
      notes.push(
        `Block type: ${inputs.wallType === "double" ? "Double leaf (400mm thick)" : "Single leaf (200mm thick)"}`
      );
      notes.push("Standard 400×200×200mm blocks");
      notes.push("Includes 5% wastage factor");
    }
  } else if (type === "foundation") {
    const len = parseFloat(inputs.length);
    const wid = parseFloat(inputs.width);
    const ht = parseFloat(inputs.height);
    if (len > 0 && wid > 0 && ht > 0) {
      const vol = len * wid * ht * WASTAGE;
      rmc = Math.ceil(vol * 10) / 10;
      aggregates = Math.ceil(rmc * 0.72 * 1.6 * 10) / 10;
      notes.push(`Foundation volume: ${(len * wid * ht).toFixed(2)} m³`);
      notes.push("Includes 5% wastage factor");
      notes.push("Grade M20 minimum recommended for foundations");
    }
  } else if (type === "road") {
    const len = parseFloat(inputs.length);
    const wid = parseFloat(inputs.width);
    const thk = parseFloat(inputs.thickness) / 1000;
    if (len > 0 && wid > 0 && thk > 0) {
      const vol = len * wid * thk * WASTAGE;
      rmc = Math.ceil(vol * 10) / 10;
      aggregates = Math.ceil(rmc * 0.75 * 1.6 * 10) / 10;
      notes.push(`Road area: ${(len * wid).toFixed(1)} m²`);
      notes.push(`Thickness: ${inputs.thickness} mm`);
      notes.push("Includes 5% wastage factor");
    }
  } else if (type === "custom") {
    const vol = parseFloat(inputs.volume);
    if (vol > 0) {
      rmc = vol;
      aggregates = Math.ceil(vol * 0.7 * 1.6 * 10) / 10;
      notes.push("Custom volume entered");
    }
  }

  return { rmc, blocks, aggregates, grade, notes };
}

export default function CalculatorPage() {
  const [project, setProject] = useState<ProjectType>("slab");
  const [inputs, setInputs] = useState<Inputs>({
    length: "",
    width: "",
    height: "",
    thickness: "150",
    wallHeight: "",
    wallLength: "",
    wallType: "single",
    area: "",
    volume: "",
    grade: "",
  });
  const [results, setResults] = useState<Results | null>(null);

  const handleInput = (field: keyof Inputs, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
    setResults(null);
  };

  const handleCalculate = useCallback(() => {
    const r = calculate(project, inputs);
    setResults(r);
  }, [project, inputs]);

  const handleReset = () => {
    setInputs({
      length: "",
      width: "",
      height: "",
      thickness: "150",
      wallHeight: "",
      wallLength: "",
      wallType: "single",
      area: "",
      volume: "",
      grade: "",
    });
    setResults(null);
  };

  const inputClass =
    "w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors";
  const labelClass =
    "block text-xs font-bold uppercase tracking-widest text-stone-600 mb-2";

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-stone-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
            <Calculator size={14} className="text-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
              Free Tool
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">
            Materials Calculator
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-base leading-relaxed">
            Instantly estimate how much Ready Mix Concrete, Solid Blocks, or
            Aggregates your project needs — accurate to industry standards.
          </p>
        </div>
      </section>

      <section className="py-12 bg-stone-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step 1: Project Type */}
          <div className="bg-white border border-stone-200 rounded-sm p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 bg-amber-500 rounded-sm flex items-center justify-center text-stone-900 font-black text-sm">
                1
              </div>
              <h2 className="text-lg font-black text-stone-900">
                Select Project Type
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {projectTypes.map((pt) => {
                const Icon = pt.icon;
                return (
                  <button
                    key={pt.id}
                    onClick={() => {
                      setProject(pt.id);
                      setResults(null);
                    }}
                    className={`p-4 rounded-sm border-2 text-left transition-all ${
                      project === pt.id
                        ? "border-amber-500 bg-amber-50"
                        : "border-stone-200 bg-stone-50 hover:border-stone-300"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={
                        project === pt.id
                          ? "text-amber-600 mb-2"
                          : "text-stone-400 mb-2"
                      }
                    />
                    <div
                      className={`text-sm font-bold ${project === pt.id ? "text-amber-700" : "text-stone-700"}`}
                    >
                      {pt.label}
                    </div>
                    <div className="text-xs text-stone-400 mt-0.5 hidden sm:block">
                      {pt.desc}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Dimensions */}
          <div className="bg-white border border-stone-200 rounded-sm p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 bg-amber-500 rounded-sm flex items-center justify-center text-stone-900 font-black text-sm">
                2
              </div>
              <h2 className="text-lg font-black text-stone-900">
                Enter Dimensions
              </h2>
            </div>

            {/* Slab inputs */}
            {project === "slab" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>Length (m)</label>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 10"
                      value={inputs.length}
                      onChange={(e) => handleInput("length", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Width (m)</label>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 8"
                      value={inputs.width}
                      onChange={(e) => handleInput("width", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Thickness (mm)</label>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 150"
                      value={inputs.thickness}
                      onChange={(e) => handleInput("thickness", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>
                <p className="text-xs text-stone-400 flex items-center gap-1">
                  <Info size={12} /> Typical slab thickness: 100–200mm for
                  floors, 125–150mm for roofs
                </p>
              </div>
            )}

            {/* Wall inputs */}
            {project === "wall" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>Wall Length (m)</label>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 20"
                      value={inputs.wallLength}
                      onChange={(e) =>
                        handleInput("wallLength", e.target.value)
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Wall Height (m)</label>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 3"
                      value={inputs.wallHeight}
                      onChange={(e) =>
                        handleInput("wallHeight", e.target.value)
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Wall Type</label>
                    <div className="relative">
                      <select
                        value={inputs.wallType}
                        onChange={(e) =>
                          handleInput(
                            "wallType",
                            e.target.value as "single" | "double"
                          )
                        }
                        className={inputClass + " appearance-none pr-8"}
                      >
                        <option value="single">Single leaf (200mm)</option>
                        <option value="double">Double leaf (400mm)</option>
                      </select>
                      <ChevronDown
                        size={14}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-stone-400 flex items-center gap-1">
                  <Info size={12} /> Based on standard 400×200×200mm NIYA solid
                  blocks with mortar joints
                </p>
              </div>
            )}

            {/* Foundation inputs */}
            {project === "foundation" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>Length (m)</label>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 5"
                      value={inputs.length}
                      onChange={(e) => handleInput("length", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Width (m)</label>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 3"
                      value={inputs.width}
                      onChange={(e) => handleInput("width", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Depth (m)</label>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 0.6"
                      value={inputs.height}
                      onChange={(e) => handleInput("height", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>
                <p className="text-xs text-stone-400 flex items-center gap-1">
                  <Info size={12} /> For multiple footings, multiply the result
                  by the number of footings
                </p>
              </div>
            )}

            {/* Road inputs */}
            {project === "road" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>Road Length (m)</label>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 100"
                      value={inputs.length}
                      onChange={(e) => handleInput("length", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Road Width (m)</label>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 6"
                      value={inputs.width}
                      onChange={(e) => handleInput("width", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Thickness (mm)</label>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 200"
                      value={inputs.thickness}
                      onChange={(e) => handleInput("thickness", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>
                <p className="text-xs text-stone-400 flex items-center gap-1">
                  <Info size={12} /> Typical road thickness: 150–250mm. Grade
                  M30 recommended for vehicular traffic.
                </p>
              </div>
            )}

            {/* Custom inputs */}
            {project === "custom" && (
              <div className="space-y-4">
                <div className="max-w-xs">
                  <label className={labelClass}>Total Volume (m³)</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 25"
                    value={inputs.volume}
                    onChange={(e) => handleInput("volume", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <p className="text-xs text-stone-400 flex items-center gap-1">
                  <Info size={12} /> Enter your pre-calculated concrete volume
                  directly
                </p>
              </div>
            )}

            {/* Grade selector */}
            <div className="mt-6 pt-6 border-t border-stone-100">
              <label className={labelClass}>
                Concrete Grade (optional — we recommend{" "}
                {gradeRecommendations[project]})
              </label>
              <div className="flex flex-wrap gap-2">
                {grades.map((g) => (
                  <button
                    key={g}
                    onClick={() => handleInput("grade", inputs.grade === g ? "" : g)}
                    className={`px-3 py-1.5 rounded-sm text-xs font-bold border transition-all ${
                      inputs.grade === g
                        ? "bg-stone-900 border-stone-900 text-white"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:border-stone-400"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Calculate button */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={handleCalculate}
              className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-stone-900 font-black text-sm rounded-sm hover:bg-amber-400 transition-all uppercase tracking-wider"
            >
              <Calculator size={16} />
              Calculate Materials
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-4 border border-stone-200 text-stone-600 font-semibold text-sm rounded-sm hover:border-stone-400 transition-all"
            >
              <RotateCcw size={14} />
              Reset
            </button>
          </div>

          {/* Results */}
          {results && (
            <div className="bg-stone-900 rounded-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 size={20} className="text-amber-400" />
                <h2 className="text-lg font-black text-white">
                  Your Estimated Requirements
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {results.rmc !== null && (
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Layers size={16} className="text-amber-400" />
                      <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                        Ready Mix Concrete
                      </span>
                    </div>
                    <div className="text-4xl font-black text-white mb-1">
                      {results.rmc}
                    </div>
                    <div className="text-stone-400 text-sm">cubic metres (m³)</div>
                    <div className="mt-3 pt-3 border-t border-stone-700">
                      <span className="text-xs font-bold text-amber-500">
                        Grade:{" "}
                      </span>
                      <span className="text-xs text-stone-300">
                        {results.grade}
                      </span>
                    </div>
                  </div>
                )}

                {results.blocks !== null && (
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Box size={16} className="text-amber-400" />
                      <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                        Solid Blocks
                      </span>
                    </div>
                    <div className="text-4xl font-black text-white mb-1">
                      {results.blocks.toLocaleString()}
                    </div>
                    <div className="text-stone-400 text-sm">number of blocks</div>
                    <div className="mt-3 pt-3 border-t border-stone-700">
                      <span className="text-xs text-stone-400">
                        400×200×200mm NIYA blocks
                      </span>
                    </div>
                  </div>
                )}

                {results.aggregates !== null && (
                  <div className="bg-stone-800 border border-stone-700 rounded-sm p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Mountain size={16} className="text-stone-400" />
                      <span className="text-stone-400 text-xs font-bold uppercase tracking-widest">
                        Aggregates
                      </span>
                    </div>
                    <div className="text-4xl font-black text-white mb-1">
                      {results.aggregates}
                    </div>
                    <div className="text-stone-400 text-sm">metric tonnes (MT)</div>
                    <div className="mt-3 pt-3 border-t border-stone-700">
                      <span className="text-xs text-stone-400">
                        20mm coarse aggregate
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Notes */}
              {results.notes.length > 0 && (
                <div className="bg-stone-800 rounded-sm p-4 mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                    Calculation Notes
                  </p>
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
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-stone-900 font-bold text-sm rounded-sm hover:bg-amber-400 transition-all uppercase tracking-wider"
                >
                  Get a Quote for These Materials
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <p className="text-xs text-stone-500 self-center">
                  * Estimates include 5% wastage. Consult our engineers for
                  precise project specifications.
                </p>
              </div>
            </div>
          )}

          {/* Info banner */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-sm p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">
              Disclaimer
            </p>
            <p className="text-xs text-stone-500 leading-relaxed">
              This calculator provides indicative estimates based on standard
              industry formulas and includes a 5% wastage factor. Actual
              requirements may vary based on mix design, site conditions, and
              structural specifications. We recommend consulting with a
              structural engineer for final quantities. NIYA engineers are
              available to assist — contact us for a free consultation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
