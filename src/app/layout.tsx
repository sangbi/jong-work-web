import type { Metadata } from "next";
import type { ReactNode } from "react";
import Providers from "./providers";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} | 하남 미사 도배 매장`,
  description: `${site.name} 매장 소개. ${site.address}.`,
  openGraph: {
    title: site.name,
    description: "벽 하나가 바뀌면, 일상이 달라져요.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
