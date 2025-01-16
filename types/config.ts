import { JSX } from "react";

export type TConfig = {
	name: string;
	initals: string;
	summary: string;
	shortSummary: string;
	avatarUrl: string;
	animationDelay: number;
	education: TEducation[];
	projects: TProject[];
	navigation: TNavOptions[];
	social: TSocial[];
	skills: string[];
};

export type TEducation = {
	school: string;
	href: string;
	degree: string;
	start: string;
	end: string;
	logoUrl: string;
};

export type TProject = {
	title: string;
	description: string;
	imageSrc?: string;
	technologies?: string[];
	links: {
		title: string;
		href: string;
		icon: any;
	}[];
};

export type TNavOptions = {
	icon: any;
	label: string;
	href: string;
};

export type TSocial = {
	label: string;
	icon: any;
	href: string;
};
