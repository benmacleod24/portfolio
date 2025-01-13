import { cn } from "@/lib/utils";
import { Card, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export type CustomCard = {
	imageSrc?: string;
	imageAlt?: string;
	title: string;
	subtitle?: string;
	period?: string;
	href?: string;
};

export default function CustomCard(props: CustomCard) {
	return (
		<Link
			href={props.href || "#"}
			className="block cursor-pointer"
			target="_blank"
		>
			<Card className="flex items-center">
				{props.imageSrc && (
					<div className="flex-none">
						<Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
							<AvatarImage
								src={props.imageSrc}
								alt={props.imageAlt || "N/A"}
								className="object-fill object-center"
							/>
							<AvatarFallback>
								{props.imageAlt ? props.imageAlt[0] : "N/A"}
							</AvatarFallback>
						</Avatar>
					</div>
				)}
				<div className="flex-grow ml-4 items-center flex-col group">
					<CardHeader>
						<div className="flex items-center justify-between gap-x-2 text-base">
							<h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
								{props.title}

								<ChevronRightIcon
									className={cn(
										"size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
									)}
								/>
							</h3>
							{props.period && (
								<div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
									{props.period}
								</div>
							)}
						</div>
						{props.subtitle && (
							<div className="font-sans text-xs">
								{props.subtitle}
							</div>
						)}
					</CardHeader>
				</div>
			</Card>
		</Link>
	);
}
