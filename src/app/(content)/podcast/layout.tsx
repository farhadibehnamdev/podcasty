import localFont from "next/font/local";
import "@/app/globals.css";
import NextUIProviderClient from "@/providers/nextui-provider";
import QueryProvider from "@/providers/react-query-provider";
import { DrawerProvider } from "@/providers/drawer-provider";
import { PodcastHeader } from "@/app/_components/header/podcast-header";

const geistSans = localFont({
  src: "../../../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased inset-0 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]`}
    >
      <body className="light text-foreground font-[family-name:var(--font-geist-sans)] inset-0 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <NextUIProviderClient>
          <QueryProvider>
            <DrawerProvider>
              {/* <PodcastHeader /> */}

              {/* min-h-screen p-8 pb-20 gap-16 sm:p-20 w-full */}
              <main className="py-5">{children}</main>
            </DrawerProvider>
          </QueryProvider>
        </NextUIProviderClient>
      </body>
    </html>
  );
}
