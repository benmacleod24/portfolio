import About from "@/components/about";
import Education from "@/components/education";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Image from "next/image";
import React from "react";

export default function Home() {
	return (
		<React.Fragment>
			<Header />
			<About />
			<Education />
			<Skills />
			<Projects />
		</React.Fragment>
	);
}
