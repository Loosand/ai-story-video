import "@/styles/globals.css"
import type { Metadata } from "next"
// import { Inter } from "next/font/google"

import { ReactHotToaster } from "@/components/ui/toast"

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="bg-card">
				<ReactHotToaster />

				{children}
			</body>
		</html>
	)
}
