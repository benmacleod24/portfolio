import { Config } from "@/lib/config";
import BlurFade from "./ui/blur-fade";
import Markdown from "react-markdown";

export default function About() {
	return (
		<section id="about">
			<BlurFade delay={Config.animationDelay * 3}>
				<h2 className="text-xl font-bold">About</h2>
			</BlurFade>
			<BlurFade delay={Config.animationDelay * 4}>
				<Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert">
					{Config.summary}
				</Markdown>
			</BlurFade>
		</section>
	);
}
