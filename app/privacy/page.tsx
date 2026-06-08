import PageCover from "@/components/ui/PageCover"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Mafia Island Authentic",
  description: "Learn how Mafia Island Authentic collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <>
      <PageCover
        src="/lagoon2.jpg"
        alt="Mafia Island lagoon"
        label="Legal"
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
      />

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none space-y-8 text-sm md:text-base leading-relaxed">
            <p className="text-gray-500 italic">
              Last updated: June 2026
            </p>

            <Section title="1. Introduction">
              Mafia Island Authentic (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;) respects your privacy and is committed to protecting the
              personal data you share with us. This Privacy Policy explains how we collect, use, and safeguard your
              information when you visit our website or use our services.
            </Section>

            <Section title="2. Information We Collect">
              We may collect the following types of information:
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>
                  <strong>Personal identification data</strong> &mdash; name, email address, phone number, and
                  country of residence when you submit a booking inquiry or contact form.
                </li>
                <li>
                  <strong>Technical data</strong> &mdash; IP address, browser type, device information, and browsing
                  behaviour collected through cookies and similar technologies.
                </li>
                <li>
                  <strong>Communication data</strong> &mdash; messages you send us via WhatsApp, email, or contact
                  forms on our website.
                </li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              We use your information for the following purposes:
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>To respond to your booking inquiries and provide tour information.</li>
                <li>To process and confirm reservations for tours and activities.</li>
                <li>To improve our website, services, and customer experience.</li>
                <li>To send occasional promotional communications (only with your consent).</li>
                <li>To comply with legal obligations and regulatory requirements in Tanzania.</li>
              </ul>
            </Section>

            <Section title="4. Legal Basis for Processing">
              We process your personal data based on the following legal grounds:
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>
                  <strong>Consent</strong> &mdash; when you accept our cookies or subscribe to our newsletter.
                </li>
                <li>
                  <strong>Contractual necessity</strong> &mdash; when processing a booking or service request you
                  have made.
                </li>
                <li>
                  <strong>Legitimate interests</strong> &mdash; improving our services, website analytics, and
                  fraud prevention.
                </li>
              </ul>
            </Section>

            <Section title="5. Cookies">
              Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on
              your device that help us remember your preferences and understand how you use our site.
              <p className="mt-2">
                You can choose to accept or reject non-essential cookies when you first visit our site. Essential
                cookies required for the basic functioning of the website cannot be rejected. You may also adjust
                your browser settings to manage or delete cookies at any time.
              </p>
              <p className="mt-2">
                We use the following types of cookies:
              </p>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-600">
                <li>
                  <strong>Essential cookies</strong> &mdash; necessary for the website to function properly.
                </li>
                <li>
                  <strong>Analytics cookies</strong> &mdash; help us understand how visitors interact with our
                  website (e.g., pages visited, time spent).
                </li>
                <li>
                  <strong>Functional cookies</strong> &mdash; remember your preferences and settings for future
                  visits.
                </li>
              </ul>
            </Section>

            <Section title="6. Data Sharing and Disclosure">
              We do not sell your personal data to third parties. We may share your information with:
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Service providers who assist us with website hosting, analytics, and communication tools.</li>
                <li>Tour operators, accommodation providers, and transport partners solely for fulfilling your booking.</li>
                <li>Regulatory authorities if required by Tanzanian law.</li>
              </ul>
            </Section>

            <Section title="7. Data Retention">
              We retain your personal data only as long as necessary to fulfil the purposes for which it was
              collected, including legal, accounting, or reporting requirements. Booking-related data is typically
              retained for up to three years after your last interaction with us.
            </Section>

            <Section title="8. Your Rights">
              Depending on your jurisdiction, you may have the following rights regarding your personal data:
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>
                  <strong>Right to access</strong> &mdash; request a copy of the data we hold about you.
                </li>
                <li>
                  <strong>Right to rectification</strong> &mdash; request correction of inaccurate data.
                </li>
                <li>
                  <strong>Right to erasure</strong> &mdash; request deletion of your data where applicable.
                </li>
                <li>
                  <strong>Right to restrict processing</strong> &mdash; request limitation of data processing.
                </li>
                <li>
                  <strong>Right to data portability</strong> &mdash; request transfer of your data to another
                  service provider.
                </li>
                <li>
                  <strong>Right to withdraw consent</strong> &mdash; at any time, without affecting the lawfulness
                  of processing based on consent before its withdrawal.
                </li>
              </ul>
            </Section>

            <Section title="9. Data Security">
              We implement appropriate technical and organisational measures to protect your personal data against
              unauthorised access, alteration, disclosure, or destruction. These include SSL encryption, secure
              servers, and restricted access to personal data.
            </Section>

            <Section title="10. Third-Party Links">
              Our website may contain links to third-party websites (e.g., WhatsApp, social media platforms). We
              are not responsible for the privacy practices of these external sites. We encourage you to review
              their privacy policies before providing any personal data.
            </Section>

            <Section title="11. International Data Transfers">
              If you are accessing our website from outside Tanzania, your data may be transferred to and processed
              in Tanzania or other countries where our service providers operate. We ensure appropriate safeguards
              are in place for such transfers.
            </Section>

            <Section title="12. Changes to This Policy">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
              updated revision date. We encourage you to review this policy periodically.
            </Section>

            <Section title="13. Contact Us">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data,
              please contact us:
              <div className="mt-3 space-y-1 text-gray-600">
                <p><strong>Email:</strong> info@mafiaislandauthentic.com</p>
                <p><strong>Phone / WhatsApp:</strong> +255 785 696 021</p>
                <p><strong>Address:</strong> Kilindoni, Mafia Island, Tanzania</p>
              </div>
            </Section>
          </div>
        </div>
      </section>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg md:text-xl font-bold text-gray-900 font-montserrat mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  )
}
