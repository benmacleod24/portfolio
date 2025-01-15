import { TConfig, TEducation, TProject } from "@/types/config";
import { Github, Globe, Home } from "lucide-react";

const Education: TEducation[] = [
	{
		degree: "B.S in Computer Science & Engineering",
		end: "2026",
		start: "2024",
		href: "https://www.utoledo.edu/",
		school: "University of Toledo",
		logoUrl: "/utoledo.webp",
	},
	{
		degree: "A.A.S in Computer Science",
		end: "2024",
		start: "2022",
		href: "https://www.monroeccc.edu/",
		school: "Monroe County Community College",
		logoUrl: "/mccc.png",
	},
];

const projects: TProject[] = [
	{
		title: "123soldteam Website",
		technologies: ["TailwindCSS", "Next.js", "TypeScript", "Shadcn UI"],
		description:
			"Assisted the 123soldteam in centralizing their information, enabling clients to access resources like guides, home values, client ratings, and more all in one place.",
		links: [
			{ href: "https://123soldteam.com", title: "Website", icon: Globe },
		],
		imageSrc: "/123soldteam.png",
	},
	{
		title: "VendorLink",
		technologies: [
			"TailwindCSS",
			"Next.js",
			"TypeScript",
			"Shadcn UI",
			"C#",
			".NET",
			"Prisma",
			"Postgres",
		],
		description:
			"VendorLink is a vendor management platform for real estate agents, helping them find trusted vendors, share them with clients, and track business impact with analytical tools.",
		links: [
			{ href: "https://vendorl.ink", title: "Website", icon: Globe },
		],
		imageSrc: "/vendorlink.png",
	},
	{
		title: "Job Application Manager",
		technologies: [
			"Vite",
			"React",
			"TailwindCSS",
			"Shadcn UI",
			"C#",
			".NET",
			"SQL Server",
			"TypeScript",
		],
		description: `Developed a full-stack web application to streamline job search management, enabling tracking of application statuses and the specific resume used for each job. Built an intuitive dashboard for viewing and managing applications efficiently. `,
		links: [
			{
				href: "https://github.com/benmacleod24/job-application-manager",
				title: "Github",
				icon: Github,
			},
		],
		imageSrc: "/jobmanager.png",
	},
	{
		title: "Python Blackjack",
		technologies: ["Python", "PyFiglet", "Algorithms"],
		description: `Developed a terminal-based blackjack game implementing rules with features including automatic ace valuation and dealer behavior logic. Implemented basic game mechanics where the dealer and the player take turns choosing actions.`,
		links: [
			{
				href: "https://github.com/benmacleod24/python-blackjack",
				title: "Github",
				icon: Github,
			},
		],
		imageSrc: "/python_blackjack.png",
	},
];

export const Config: TConfig = {
	name: "Ben Macleod",
	initals: "BM",
	animationDelay: 0.04,
	avatarUrl: "/me.png",
	shortSummary:
		"Software Developer & Lifelong Learner. Building innovative platforms and growing through constant learning.",
	summary:
		"I began my software development journey four years ago, teaching myself how to create small plugins for [Cfx.re](https://fivem.net). Since then, I’ve expanded my skills to building web applications that simplify life and improve efficiency for myself and others. When I’m not coding, you’ll likely find me on the golf course or diving into a Star Wars book (or two).",
	education: Education,
	projects,
	navigation: [
		{
			href: "/",
			icon: Home,
			label: "Home",
		},
	],
	social: [
		{
			href: "https://github.com/benmacleod24",
			label: "GitHub",
			icon: Github,
		},
		{
			href: "https://www.linkedin.com/in/ben-macleod-641b7621b/",
			label: "LinkedIn",
			icon: () => (
				<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<title>LinkedIn</title>
					<path
						fill="currentColor"
						d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
					/>
				</svg>
			),
		},
		{
			href: "https://bsky.app/profile/benmacleod24.bsky.social",
			label: "Bluesky",
			icon: () => (
				<svg
					width="568"
					height="501"
					viewBox="0 0 568 501"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M123.121 33.6637C188.241 82.5526 258.281 181.681 284 234.873C309.719 181.681 379.759 82.5526 444.879 33.6637C491.866 -1.61183 568 -28.9064 568 57.9464C568 75.2916 558.055 203.659 552.222 224.501C531.947 296.954 458.067 315.434 392.347 304.249C507.222 323.8 536.444 388.56 473.333 453.32C353.473 576.312 301.061 422.461 287.631 383.039C285.169 375.812 284.017 372.431 284 375.306C283.983 372.431 282.831 375.812 280.369 383.039C266.939 422.461 214.527 576.312 94.6667 453.32C31.5556 388.56 60.7778 323.8 175.653 304.249C109.933 315.434 36.0535 296.954 15.7778 224.501C9.94525 203.659 0 75.2916 0 57.9464C0 -28.9064 76.1345 -1.61183 123.121 33.6637Z"
						fill="currentColor"
					/>
				</svg>
			),
		},
	],
};
