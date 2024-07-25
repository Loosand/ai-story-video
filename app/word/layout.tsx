import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="container mx-auto py-40 lg:w-1/2">
			<Link
				href="javascript:history.back()"
				className={cn(
					buttonVariants({ variant: "outline" }),
					"fixed top-10 left-10"
				)}>
				返回上一页
			</Link>
			{children}
		</div>
	)
}
