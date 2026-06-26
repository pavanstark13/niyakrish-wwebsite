import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sections = [
  {
    title: "Information We Collect",
    content: `When you use the contact form on our website, we collect the following information that you voluntarily provide:

• Full name
• Company or organization name (optional)
• Email address
• Phone number
• Product interest and estimated quantity
• Project details and message

We do not collect any information automatically beyond standard server logs (IP address, browser type, page visited) that are inherent to web hosting.`,
  },
  {
    title: "How We Use Your Information",
    content: `The information you provide is used solely for the following purposes:

• To respond to your enquiry about our products (Ready Mix Concrete, Solid Blocks, Aggregates)
• To provide you with a quote or pricing information
• To schedule deliveries or consultations
• To follow up on your project requirements

We do not use your information for unsolicited marketing, automated profiling, or any purpose other than responding to your direct enquiry.`,
  },
  {
    title: "Information Sharing",
    content: `NIYAKRISH INDUSTRIES PVT LTD. does not sell, trade, rent, or share your personal information with third parties, except:

• With our internal sales and operations team to fulfil your enquiry
• When required by law or a valid court order
• With our email service provider (Gmail/Google) solely for the purpose of sending you our response

We do not share your data with advertisers, data brokers, or any external marketing entities.`,
  },
  {
    title: "Data Retention",
    content: `Enquiry information submitted via our contact form is retained for a period of up to 2 years to allow us to serve your future requirements and maintain business records. After this period, information is securely deleted.

You may request deletion of your information at any time by contacting us at niyakrishindustries@gmail.com.`,
  },
  {
    title: "Data Security",
    content: `We take reasonable precautions to protect your personal information. Our website uses HTTPS (SSL/TLS encryption) for all data transmission. Access to enquiry information is restricted to authorised NIYAKRISH INDUSTRIES staff only.

While we implement industry-standard security measures, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.`,
  },
  {
    title: "Cookies",
    content: `Our website does not use tracking cookies, advertising cookies, or analytics cookies that identify individual users. Standard browser session data may be used by our hosting provider (Vercel) for performance and security purposes only.`,
  },
  {
    title: "Your Rights",
    content: `Under applicable Indian law (Information Technology Act, 2000 and its amendments), you have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate information
• Request deletion of your personal information
• Withdraw consent to being contacted

To exercise any of these rights, contact us at niyakrishindustries@gmail.com or call +91 90719 57777.`,
  },
  {
    title: "Contact for Privacy Matters",
    content: `For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact:

NIYAKRISH INDUSTRIES PVT LTD.
Email: niyakrishindustries@gmail.com
Phone: +91 90719 57777
Location: Bangalore, Karnataka, India`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-3">Legal</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-stone-400 max-w-xl mx-auto text-base leading-relaxed">
            NIYAKRISH INDUSTRIES PVT LTD. is committed to protecting your privacy and handling your data responsibly.
          </p>
          <p className="text-stone-600 text-sm mt-4">Last updated: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-sm p-5 mb-10">
            <p className="text-sm text-stone-700 leading-relaxed">
              <strong>Plain summary:</strong> We only collect information you give us through the contact form. We use it only to respond to your enquiry. We don&apos;t sell or share your data. You can ask us to delete it anytime.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i} className="bg-white border border-stone-200 rounded-sm p-8">
                <h2 className="text-lg font-black text-stone-900 mb-4">{section.title}</h2>
                <div className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{section.content}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-stone-500 text-sm mb-6">Questions about this policy?</p>
            <Link href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white font-bold text-sm rounded-sm hover:bg-amber-600 transition-colors uppercase tracking-wider">
              Contact Us
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
