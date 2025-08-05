export interface BaseComponentProps {
	class?: string;
	id?: string;
}

export interface NavigationItem {
	label: string;
	url: string;
	external?: boolean;
}

export interface ThemeContextType {
	theme: "light" | "dark";
	toggleTheme: () => void;
}

export interface ImageProps {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	quality?: number;
	format?: "webp" | "avif" | "jpeg" | "png";
	loading?: "lazy" | "eager";
}

export interface AnchorProps extends BaseComponentProps {
	url: string;
	external?: boolean;
	"aria-label"?: string;
}

export interface ButtonProps extends BaseComponentProps {
	variant?: "primary" | "secondary" | "ghost";
	size?: "sm" | "md" | "lg";
	disabled?: boolean;
	"aria-label"?: string;
	"aria-pressed"?: boolean;
	"aria-expanded"?: boolean;
}

export interface SectionProps extends BaseComponentProps {
	tag?: "section" | "article" | "aside" | "nav" | "div";
	maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export interface SEOProps {
	title: string;
	description: string;
	image?: string;
	url?: string;
	type?: "website" | "article" | "profile";
	twitterCard?: "summary" | "summary_large_image";
}
