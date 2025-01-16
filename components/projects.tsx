import { Config } from "@/lib/config";
import BlurFade from "./ui/blur-fade";
import ProjectCard from "./project-card";

export default function Projects() {
	return (
		<section id="projects">
			<div className="space-y-12 w-full py-12">
				<BlurFade delay={Config.animationDelay * 9}>
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
								My Projects
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Check out my latest work
							</h2>
							<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Explore a diverse range of projects I've
								completed, from freelance websites to
								sophisticated data-driven applications.
							</p>
						</div>
					</div>
				</BlurFade>
				<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
					{Config.projects.map((p, index) => (
						<BlurFade
							key={p.title}
							delay={Config.animationDelay * 10 + index * 0.05}
						>
							<ProjectCard project={p} />
						</BlurFade>
					))}
				</div>
			</div>
		</section>
	);
}
