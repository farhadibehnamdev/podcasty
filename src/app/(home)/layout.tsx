import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import { Header } from "../_components/header";
import NextUIProviderClient from "@/providers/nextui-provider";
import QueryProvider from "@/providers/react-query-provider";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="light text-foreground bg-background font-[family-name:var(--font-geist-sans)] ">
        <NextUIProviderClient>
          <QueryProvider>
            <Header />
            {/* min-h-screen p-8 pb-20 gap-16 sm:p-20 w-full */}
            <main className="">{children}</main>
          </QueryProvider>
        </NextUIProviderClient>
      </body>
    </html>
  );
}
