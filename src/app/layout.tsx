import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-Noto_Sans_Thai",
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GeoReserved - ระบบจองห้องคอมเอกภูมิศาสตร์",
  description: "ระบบจองห้องคอมเอกภูมิศาสตร์ คณะอักษรศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansThai.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
