import Link from "next/link";
import Footer from "../components/Footer";

export const metadata = {
  title: "User Data Deletion | Timepieces.lk",
  description: "How to request deletion of your data from Timepieces.lk - Facebook App compliance.",
};

export default function UserDataDeletionPage() {
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
          User Data Deletion
        </h1>
        <p className="mb-8 text-white/60">Last updated: March 2025</p>

        <article className="prose prose-invert max-w-none space-y-6 text-white/90">
          <section>
            <p className="text-lg text-white/90">
              Timepieces.lk respects your right to control your personal data.
              This page explains how you can request deletion of your data,
              including data associated with our presence on Facebook or other
              platforms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              What Data We May Hold
            </h2>
            <p>We may store:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Contact details you provided (email, phone number)</li>
              <li>Messages or inquiries sent via our website, WhatsApp, or social channels</li>
              <li>Usage or analytics data related to your visit to our site</li>
              <li>Any data received through Facebook integration (if applicable)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              How to Request Deletion
            </h2>
            <p>To request deletion of your personal data:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Send an email to{" "}
                <a
                  href="mailto:info.timepieces.lk@gmail.com"
                  className="text-white underline hover:no-underline"
                >
                  info.timepieces.lk@gmail.com
                </a>{" "}
                with the subject line &quot;Data Deletion Request&quot;.
              </li>
              <li>
                Include the email address and/or phone number associated with
                your account or inquiries so we can identify your data.
              </li>
              <li>
                We will process your request within a reasonable period (typically
                within 30 days) and confirm once your data has been deleted.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Facebook App Users
            </h2>
            <p>
              If you use our services through a Facebook app or integration, you
              may also remove our app from your Facebook account via Facebook
              settings. To ensure we delete any data we hold from that
              integration, please still send us a Data Deletion Request using
              the steps above.
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
