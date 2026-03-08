// Legal page — Privacy Policy & Terms of Service
import { useState } from "react";

const TABS = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

const privacySections = [
  { title: "1. Information we collect", body: "We collect information you provide when you create an account, complete identity verification, or contact our support team. This includes: name, email address, phone number, date of birth, government-issued ID, banking information, and transaction history. We also automatically collect device information, IP address, and usage data when you use our services." },
  { title: "2. How we use your information", body: "We use your information to provide and improve our services, verify your identity, process transactions, prevent fraud and comply with legal obligations, communicate with you about your account, and send you updates about our products and services." },
  { title: "3. Information sharing", body: "We do not sell your personal information. We may share your information with service providers who assist us in operating our platform, government and regulatory authorities as required by law, and other parties with your explicit consent." },
  { title: "4. Data security", body: "We implement industry-standard security measures including AES-256 encryption, two-factor authentication, and regular security audits. While we strive to protect your information, no method of transmission over the internet is 100% secure." },
  { title: "5. Your rights", body: "Depending on your location, you may have the right to access, correct, or delete your personal data, opt out of certain data processing activities, and data portability. Contact privacy@coinbase.com to exercise these rights." },
  { title: "6. Cookies", body: "We use cookies and similar tracking technologies to provide our services, analyze usage patterns, and personalize your experience. You can control cookie settings through your browser preferences." },
  { title: "7. Changes to this policy", body: "We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a notice on our website. Continued use of our services after changes constitutes acceptance of the updated policy." },
];

const termsSections = [
  { title: "1. Acceptance of terms", body: "By accessing or using Coinbase's services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, you may not use our services." },
  { title: "2. Eligibility", body: "You must be at least 18 years old and not prohibited from using our services under applicable law. By using Coinbase, you represent that you meet these requirements." },
  { title: "3. Account registration", body: "You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account." },
  { title: "4. Prohibited activities", body: "You may not use our services for illegal activities, money laundering, fraud, or to circumvent sanctions. You may not attempt to access our systems without authorization or interfere with the operation of our services." },
  { title: "5. Fees", body: "You agree to pay all fees associated with your use of our services. Fee schedules are available on our Fees page and may be updated from time to time. Continued use constitutes acceptance of updated fees." },
  { title: "6. Risk disclosure", body: "Cryptocurrency is highly volatile and investments may result in significant losses. Past performance is not indicative of future results. You should only invest what you can afford to lose." },
  { title: "7. Limitation of liability", body: "To the maximum extent permitted by law, Coinbase's liability is limited to the amount of fees you paid in the 12 months preceding any claim. We are not liable for indirect, consequential, or punitive damages." },
];

const cookieSections = [
  { title: "1. What are cookies?", body: "Cookies are small text files stored on your device when you visit our website. They help us remember your preferences, keep you signed in, and understand how you use our services." },
  { title: "2. Types of cookies we use", body: "Essential cookies: Required for basic site functionality. Analytics cookies: Help us understand how visitors use our site. Preference cookies: Remember your settings. Marketing cookies: Used to show relevant advertising." },
  { title: "3. Managing cookies", body: "You can control cookie settings through your browser. Note that disabling certain cookies may affect the functionality of our services. We respect browser 'Do Not Track' signals for non-essential cookies." },
];

const contentMap = {
  "Privacy Policy":    { lastUpdated: "January 15, 2026", sections: privacySections },
  "Terms of Service":  { lastUpdated: "January 15, 2026", sections: termsSections  },
  "Cookie Policy":     { lastUpdated: "January 15, 2026", sections: cookieSections  },
};

export default function Legal() {
  const [activeTab, setActiveTab] = useState("Privacy Policy");
  const { lastUpdated, sections } = contentMap[activeTab];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-cb-surface border-b border-cb-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-cb-dark mb-2">Legal</h1>
          <p className="text-cb-gray text-sm">Last updated: {lastUpdated}</p>
        </div>
        {/* Tabs */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-1">
          {TABS.map((tab) => (
            <button type="button" key={tab} onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors
                ${activeTab === tab ? "border-cb-blue text-cb-blue" : "border-transparent text-cb-gray hover:text-cb-dark"}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-sm max-w-none">
          {sections.map(({ title, body }) => (
            <div key={title} className="mb-8">
              <h2 className="text-lg font-bold text-cb-dark mb-3">{title}</h2>
              <p className="text-cb-gray leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 p-6 bg-cb-surface rounded-2xl border border-cb-border text-sm text-cb-gray">
          <p>
            If you have questions about these policies, contact us at{" "}
            <a href="mailto:legal@coinbase.com" className="text-cb-blue hover:underline">
              legal@coinbase.com
            </a>
            . This is an educational clone project and not affiliated with Coinbase, Inc.
          </p>
        </div>
      </div>
    </div>
  );
}
