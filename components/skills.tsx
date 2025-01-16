import { Config } from "@/lib/config";
import BlurFade from "./ui/blur-fade";
import { Badge } from "./ui/badge";

export default function Skills() {
	return (
		<section id="skills">
			<div className="flex min-h-0 flex-col gap-y-3">
				<BlurFade delay={Config.animationDelay * 7}>
					<h2 className="text-xl font-bold">Skills</h2>
				</BlurFade>
				<div className="flex flex-wrap gap-1">
					{Config.skills.map((skill, id) => (
						<BlurFade
							key={skill}
							delay={Config.animationDelay * 8 + id * 0.05}
						>
							<Badge key={skill}>{skill}</Badge>
						</BlurFade>
					))}
				</div>
			</div>
		</section>
	);
}
