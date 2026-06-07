import Link from "next/link";
import { 
  ArrowLeft, 
  FileText, 
  Eye, 
  Shield, 
  Link as LinkIcon, 
  AlertCircle, 
  FileEdit, 
  Mail 
} from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-sans antialiased">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF4D1C]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-[#FF4D1C]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative pt-20 md:pt-28 px-6 max-w-4xl mx-auto pb-16">
        {/* Back link with icon */}
        <Link
          href="/#"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#FF4D1C] transition-colors mb-8 group"
        >
          <div className="p-1.5 rounded-full bg-gray-100 group-hover:bg-[#FF4D1C]/10 transition-colors">
            <ArrowLeft size={14} className="group-hover:text-[#FF4D1C]" />
          </div>
          <span>Back to Home</span>
        </Link>

        {/* Header with decorative line */}
        <div className="relative mb-10">
          <div className="absolute -left-4 top-1/2 w-1 h-12 bg-[#FF4D1C] rounded-full"></div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">
            Terms of <span className="text-[#FF4D1C] relative">Service
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF4D1C]/20 rounded-full"></span>
            </span>
          </h1>
          <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
            <span className="w-1 h-1 bg-[#FF4D1C] rounded-full"></span>
            Last updated: Feb 2026
          </p>
        </div>

        {/* Content sections with card style */}
        <div className="space-y-5">
          {/* Section 1 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FF4D1C]/10 rounded-xl text-[#FF4D1C]">
                <FileText size={22} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using the portfolio website of Haris (“the Company,” “we,” “us,” or “our”),
                  you agree to be bound by these Terms of Service. If you do not agree to all the terms,
                  you may not access the website.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FF4D1C]/10 rounded-xl text-[#FF4D1C]">
                <Eye size={22} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">2. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software,
                  is the property of Haris and is protected by international copyright laws. You may not
                  reproduce, distribute, modify, or create derivative works without explicit written consent.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FF4D1C]/10 rounded-xl text-[#FF4D1C]">
                <Shield size={22} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">3. User Conduct</h2>
                <p className="text-gray-600 leading-relaxed">
                  You agree not to use the website for any unlawful purpose or in any way that could
                  damage, disable, or impair the site. You may not attempt to gain unauthorized access
                  to any part of the website or its related systems.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FF4D1C]/10 rounded-xl text-[#FF4D1C]">
                <LinkIcon size={22} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">4. Third-Party Links</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may contain links to third‑party websites. We are not responsible for the
                  content or privacy practices of those sites. Your use of such sites is at your own risk.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FF4D1C]/10 rounded-xl text-[#FF4D1C]">
                <AlertCircle size={22} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">5. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  To the fullest extent permitted by law, Haris shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages arising out of your use of the
                  website.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FF4D1C]/10 rounded-xl text-[#FF4D1C]">
                <FileEdit size={22} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">6. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective
                  immediately upon posting. Your continued use of the website constitutes acceptance of
                  the updated terms.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 - Contact */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FF4D1C]/10 rounded-xl text-[#FF4D1C] flex-shrink-0">
                <Mail size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">7. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-3 text-sm md:text-base">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <a 
                  href="mailto:professorharis804@gmail.com" 
                  className="text-[#FF4D1C] hover:underline font-medium inline-flex items-center gap-1 text-sm md:text-base break-all"
                >
                  amirkhanxdev@gmail.com
                  <ArrowLeft size={14} className="rotate-135 flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-gray-200 bg-white/50 backdrop-blur-sm py-6 text-center text-sm text-gray-500">
        <p>© 2026 Haris. All rights reserved.</p>
      </footer>
    </main>
  );
}