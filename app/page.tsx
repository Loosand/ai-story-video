import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Home() {
	return (
		<section className="flex h-screen flex-col items-center justify-center gap-4">
			<Link href="/article" className={cn(buttonVariants())}>
				去创建文章
			</Link>
			<Link href="/word" className={cn(buttonVariants())}>
				去添加敏感词
			</Link>
		</section>
	)
}
