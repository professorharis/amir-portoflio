import Link from "next/link";
import { ArrowLeft, Shield, Cookie, Lock, Mail, FileText, Eye, HelpCircle } from "lucide-react";

export default function PrivacyPage() {
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
            Privacy <span className="text-[#FF4D1C] relative">Policy
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF4D1C]/20 rounded-full"></span>
            </span>
          </h1>
          <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
            <span className="w-1 h-1 bg-[#FF4D1C] rounded-full"></span>
            Last updated: March 2026
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
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">1. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you express
                  interest in obtaining information about us or our services, such as your name and email
                  address when you use the contact form.
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
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">2. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-none space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#FF4D1C] mt-1">•</span>
                    <span>Respond to your inquiries and provide customer support.</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#FF4D1C] mt-1">•</span>
                    <span>Improve our website and services.</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#FF4D1C] mt-1">•</span>
                    <span>Send you occasional updates if you have opted in.</span>
                  </li>
                </ul>
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
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">3. Sharing Your Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share
                  information with trusted service providers who assist us in operating our website,
                  conducting our business, or servicing you, as long as they agree to keep this information
                  confidential.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FF4D1C]/10 rounded-xl text-[#FF4D1C]">
                <Cookie size={22} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">4. Cookies and Tracking</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may use cookies and similar tracking technologies to enhance your experience on our
                  site. You can instruct your browser to refuse all cookies or to indicate when a cookie
                  is being sent.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FF4D1C]/10 rounded-xl text-[#FF4D1C]">
                <Lock size={22} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">5. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement reasonable security measures to protect your personal information. However,
                  no method of transmission over the Internet or electronic storage is 100% secure, and we
                  cannot guarantee absolute security.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FF4D1C]/10 rounded-xl text-[#FF4D1C]">
                <HelpCircle size={22} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">6. Your Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  Depending on your location, you may have the right to access, correct, or delete your
                  personal information. To exercise these rights, please contact us using the information
                  below.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FF4D1C]/10 rounded-xl text-[#FF4D1C]">
                <FileText size={22} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">7. Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes
                  by posting the new policy on this page with a revised effective date.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 - Contact (Mobile optimized) */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FF4D1C]/10 rounded-xl text-[#FF4D1C] flex-shrink-0">
                <Mail size={22} />
              </div>
              <div className="flex-1 min-w-0"> {/* min-w-0 enables text wrapping */}
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">8. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-3 text-sm md:text-base">
                  If you have any questions about this Privacy Policy, please contact us at:
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