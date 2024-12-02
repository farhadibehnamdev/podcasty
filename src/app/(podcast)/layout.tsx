import localFont from "next/font/local";
import "@/app/globals.css";
import NextUIProviderClient from "@/providers/nextui-provider";
import QueryProvider from "@/providers/react-query-provider";
import { PodcastHeader } from "../_components/header/podcast-header";
import DrawerProvider from "@/providers/drawer-provider";

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
						<DrawerProvider>
							<PodcastHeader />
							{/* min-h-screen p-8 pb-20 gap-16 sm:p-20 w-full */}
							<main className="py-5">{children}</main>
						</DrawerProvider>
					</QueryProvider>
				</NextUIProviderClient>
			</body>
		</html>
	);
}
