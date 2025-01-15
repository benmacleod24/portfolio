import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Config } from "@/lib/config";
import NavBar from "@/components/nav-bar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
	variable: "--font-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	// metadataBase: new URL(DATA.url),
	title: {
		default: Config.name,
		template: `%s | ${Config.name}`,
	},
	description: Config.shortSummary,
	openGraph: {
		title: `${Config.name}`,
		description: Config.shortSummary,
		// url: DATA.url,
		siteName: `${Config.name}`,
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: `${Config.name}`,
		card: "summary_large_image",
	},
	verification: {
		google: "",
		yandex: "",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					`${inter.variable} font-sans antialiased`,
					"min-h-screen bg-background antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6"
				)}
			>
				<ThemeProvider
					attribute={"class"}
					defaultTheme="system"
					enableSystem
				>
					<TooltipProvider delayDuration={0}>
						<div className="flex flex-col space-y-10">
							{children}
							<Analytics />
						</div>
						<NavBar />
					</TooltipProvider>
					<div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background" />
				</ThemeProvider>
			</body>
		</html>
	);
}
