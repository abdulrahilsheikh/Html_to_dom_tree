import mermaid from "mermaid";
import { useEffect } from "react";

mermaid.initialize({ startOnLoad: true, theme: "dark" });
export const Mermaid = ({
	data,
	className,
}: {
	data: string;
	className: string;
}) => {
	useEffect(() => {
		mermaid.contentLoaded();
	}, []);
	return <pre className={`mermaid ${className}`}>{data}</pre>;
};
