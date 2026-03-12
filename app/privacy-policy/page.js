import Link from "next/link";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | Timepieces.lk",
  description: "Privacy Policy for Timepieces.lk - how we collect, use and protect your data.",
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="mb-8 text-white/60">Last updated: March 2025</p>

        <article className="prose prose-invert max-w-none space-y-6 text-white/90">
          <section>
            <h1 className="text-xl font-semibold text-white">Welcome to Timepieces.lk.</h1>
            <p>
              Timepieces.lk (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
              protecting your privacy. Timepieces.lk operates a website and related services that allow customers to explore, buy, and communicate regarding watches and watch-related products. 
              This Privacy Policy explains how we collect, use, and protect your information when you use our website, services, or communicate with us through platforms such as WhatsApp or Facebook.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
            Information We Collect
            </h2>
            <p>We may collect the following information when you interact with our website or services:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Contact information (e.g., email, phone) when you reach out to us</li>
              <li>Usage data (e.g., how you use our site) to improve our services</li>
              <li>Device and browser information for technical compatibility</li>
              <li>Any information you voluntarily provide via WhatsApp or other channels</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
            How We Use Your Information
            </h2>
            <p>
              We use collected information to respond to inquiries, improve our
              website and services, send relevant updates (with your consent),
              and comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Sharing and Disclosure
            </h2>
            <p>
              We do not sell your personal data. We may share information only
              with service providers who assist our operations (e.g., hosting)
              or when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Data Retention and Security
            </h2>
            <p>
              We retain your data only as long as necessary for the purposes
              described in this policy. We implement reasonable security
              measures to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Your Rights and Data Deletion
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              data. For deletion requests, please see our{" "}
              <Link href="/user-data-deletion" className="text-white underline hover:no-underline">
                User Data Deletion
              </Link>{" "}
              page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
            Cookies
            </h2>
            <p>
            Our website may use cookies or similar technologies to improve user experience and website functionality.
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
