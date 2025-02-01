import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

export const metadata = {
  title: "Timepieces.lk - Under Construction",
  description: "Luxury Watches Coming Soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="${geistSans.variable} ${geistMono.variable} bg-[#3674B5] text-[#D1F8EF]">{children}</body>
    </html>
  );
}
