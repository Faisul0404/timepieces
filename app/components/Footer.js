"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Top section: Legal links + contact */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Legal links - for Facebook app submission */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/90">
              Legal
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/user-data-deletion"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  User Data Deletion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span aria-hidden>📍</span>
                Wellampitiya, Sri Lanka
              </li>
              <li>
                <a
                  href="mailto:info.timepieces.lk@gmail.com"
                  className="transition hover:text-white"
                >
                  📧 info.timepieces.lk@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+94712424025"
                  className="transition hover:text-white"
                >
                  📞 +94 712 424 025
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-center text-sm text-white/60">
            © {currentYear} Timepieces.lk. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm">
            <Link
              href="/privacy-policy"
              className="text-white/60 transition hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-white/60 transition hover:text-white"
            >
              Terms
            </Link>
            <Link
              href="/user-data-deletion"
              className="text-white/60 transition hover:text-white"
            >
              Data Deletion
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
