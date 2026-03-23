import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const AUTHOR_NAME: Record<string, string> = {
	ja: "蔡 牧村",
	"zh-CN": "蔡牧村",
	"zh-TW": "蔡牧村",
};

const copyright = (lang: string) =>
	`Copyright © 2021-2026 <a href="https://origami.abstreamace.com/" target="_blank">${AUTHOR_NAME[lang] || "Mu-Tsun Tsai"}</a>`;

function getLang() {
	const match = location.pathname.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)\//);
	return match ? match[1] : "en";
}

function FooterContent() {
	const html = copyright(getLang());

	return (
		<div
			className="copyright-footer"
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}

export default function CopyrightFooter() {
	const [container, setContainer] = useState<HTMLElement | null>(null);

	useEffect(() => {
		const target = document.querySelector("main");
		if (!target) return;

		let el = target.querySelector(".copyright-footer-container");
		if (!el) {
			el = document.createElement("div");
			el.className = "copyright-footer-container";
			target.appendChild(el);
		}
		setContainer(el as HTMLElement);
	}, []);

	if (!container) return null;
	return createPortal(<FooterContent />, container);
}
