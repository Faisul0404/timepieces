import Link from "next/link";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms of Service | Timepieces.lk",
  description: "Terms of Service and conditions of use for Timepieces.lk.",
};

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0f0f0f] text-white">
      <header className="border-b border-white/10 bg-black/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="text-sm text-white/70 transition hover:text-white"
          >
            ← Back to Timepieces.lk
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl flex-1 px-4 py-10">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Terms of Service
        </h1>
        <p className="mb-8 text-white/60">Last updated: March 2025</p>

        <article className="prose prose-invert max-w-none space-y-6 text-white/90">
          <section>
            <h2 className="text-xl font-semibold text-white">
              Acceptance of Terms
            </h2>
            <p>
              By accessing or using Timepieces.lk (&quot;the Site&quot;), you agree to
              be bound by these Terms of Service. If you do not agree, please
              do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Use of the Site
            </h2>
            <p>
              You may use the Site for lawful purposes only. You must not use
              the Site in any way that violates applicable laws, infringes
              others&apos; rights, or disrupts the Site or its services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Intellectual Property
            </h2>
            <p>
              All content on the Site (including text, logos, images, and design)
              is owned by Timepieces.lk or its licensors and is protected by
              intellectual property laws. You may not copy, modify, or distribute
              such content without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Products and Services
            </h2>
            <p>
              Product availability, pricing, and descriptions are subject to
              change. We strive to provide accurate information but do not
              warrant that product details are error-free. Orders are subject to
              our acceptance and availability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Third-Party Links and Integrations
            </h2>
            <p>
              The Site may link to or integrate with third-party services (e.g.,
              WhatsApp, Facebook). Your use of those services is governed by
              their respective terms and policies. We are not responsible for
              third-party content or practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Timepieces.lk shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising from your use of the Site or any products or
              services obtained through it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Changes to Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              Site after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p>
            If you have questions about this Privacy Policy, please contact us:
            </p>
            <p>
            Email:{" "}
              <a
                href="mailto:info.timepieces.lk@gmail.com"
                className="text-white underline hover:no-underline"
              >
                info.timepieces.lk@gmail.com
              </a>
            </p>
            <p>
            Website:{" "}
              <a
                href="mailto:info.timepieces.lk@gmail.com"
                className="text-white underline hover:no-underline"
              >
                https://timepieces.lk
              </a>
            </p>
            <p>
            Phone Number:{" "}
              <a
                href="mailto:info.timepieces.lk@gmail.com"
                className="text-white underline hover:no-underline"
              >
                0712424025
              </a>
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
