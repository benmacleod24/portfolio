"use client";

import { Config } from "@/lib/config";
import BlurFade from "./ui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useTheme } from "next-themes";

export default function Header() {
	const { setTheme, theme } = useTheme();

	return (
		<section id="hero">
			<div className="flex gap-2 justify-between">
				<div className="flex flex-col flex-1 gap-2">
					<BlurFade delay={Config.animationDelay}>
						<h1 className="text-3xl font-bold lowercase tracking-tighter sm:text-5xl xl:text-6xl/none">
							hi, i&apos;m {Config.name.split(" ")[0]} 👋
						</h1>
					</BlurFade>
					<BlurFade delay={Config.animationDelay}>
						<p className="max-w-[600px] md:text-xl">
							{Config.shortSummary}
						</p>
					</BlurFade>
				</div>
				<BlurFade delay={Config.animationDelay}>
					<Avatar
						className="min-w-28 min-h-28 border"
						onClick={() =>
							setTheme(theme === "dark" ? "light" : "dark")
						}
					>
						<AvatarImage
							src={Config.avatarUrl}
							alt={Config.name}
						/>
						<AvatarFallback>{Config.initals}</AvatarFallback>
					</Avatar>
				</BlurFade>
			</div>
		</section>
	);
}
