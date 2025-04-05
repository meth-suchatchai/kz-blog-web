import type { Metadata } from "next";
import {Pixelify_Sans, Silkscreen} from "next/font/google";
import "./globals.css";

import I18nProvider from "@/providers/I18nProvider";
import FooterCookie from "@/components/Footer/FooterCookie";
import ReduxProvider from "@/providers/ReduxProvider";

const pixelifySans =  Pixelify_Sans({
    variable: "--font-pixelify",
    subsets: ["latin"]
})

const silkscreen =  Silkscreen({
    weight: '400',
    variable: "--font-silkscreen",
    subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "KuroshibaZ",
  description: "Personal experience website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
        <body className={`${pixelifySans.variable} ${silkscreen.variable}  antialiased`}>
            <ReduxProvider>
            <I18nProvider>
              {children}
                <footer>
                    <FooterCookie />
                </footer>
            </I18nProvider>
            </ReduxProvider>
        </body>
    </html>
  );
}
