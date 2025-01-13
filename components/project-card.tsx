import { TProject } from "@/types/config";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import Image from "next/image";
import Markdown from "react-markdown";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default function ProjectCard(props: { project: TProject }) {
	return (
		<Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
			{props.project.imageSrc && (
				<Image
					src={props.project.imageSrc}
					alt={props.project.title}
					width={500}
					height={300}
					className="h-40 w-full overflow-hidden object-cover object-top border-b"
				/>
			)}
			<CardHeader className="px-4 pt-2">
				<div className="space-y-1">
					<CardTitle className="text-base">
						{props.project.title}
					</CardTitle>

					<div className="hidden font-sans text-xs underline print:visible"></div>
					<Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
						{props.project.description}
					</Markdown>
				</div>
			</CardHeader>
			<CardContent className="mt-auto flex flex-col px-4">
				{props.project.technologies &&
					props.project.technologies.length > 0 && (
						<div className="mt-2 flex flex-wrap gap-1">
							{props.project.technologies.map((tag) => (
								<Badge
									className="px-1 py-0 text-[10px]"
									variant="secondary"
									key={tag}
								>
									{tag}
								</Badge>
							))}
						</div>
					)}
			</CardContent>
			<CardFooter className="px-4 pb-3">
				{props.project.links && props.project.links.length > 0 && (
					<div className="flex flex-row flex-wrap items-start gap-1">
						{props.project.links.map((link, idx) => (
							<Link href={link.href} key={idx} target="_blank">
								<Badge
									key={idx}
									className="flex gap-2 px-2 py-1 text-[10px]"
								>
									<link.icon className="size-4" />
									{link.title}
								</Badge>
							</Link>
						))}
					</div>
				)}
			</CardFooter>
		</Card>
	);
}
