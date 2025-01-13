"use client";

import { Button } from "@/components/ui/button";
import { MoonStar, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			type="button"
			size="icon"
			className="min-h-12 min-w-12 rounded-full"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
			<MoonStar className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
		</Button>
	);
}
