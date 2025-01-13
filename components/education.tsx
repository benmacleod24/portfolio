import { Config } from "@/lib/config";
import BlurFade from "./ui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import CustomCard from "./custom-card";

export default function Education() {
	return (
		<section id="education">
			<BlurFade delay={Config.animationDelay * 5}>
				<h2 className="text-xl font-bold">Education</h2>
			</BlurFade>
			<div className="flex flex-col gap-y-3 mt-3">
				{Config.education.map((school, index) => (
					<BlurFade
						key={school.school}
						delay={Config.animationDelay * 6 + index * 0.05}
					>
						<CustomCard
							imageAlt={school.school}
							imageSrc={school.logoUrl}
							title={school.school}
							subtitle={school.degree}
							href={school.href}
							period={`${school.start} - ${school.end}`}
						/>
					</BlurFade>
				))}
			</div>
		</section>
	);
}
