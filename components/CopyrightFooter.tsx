import React from "react";
import ReactDOM from "react-dom";

const COPYRIGHT: Record<string, string> = {
	en: 'Copyright © 2021-2026 <a href="https://origami.abstreamace.com/" target="_blank">Mu-Tsun Tsai</a>',
	es: 'Copyright © 2021-2026 <a href="https://origami.abstreamace.com/" target="_blank">Mu-Tsun Tsai</a>',
	ja: 'Copyright © 2021-2026 <a href="https://origami.abstreamace.com/" target="_blank">蔡 牧村</a>',
	ko: 'Copyright © 2021-2026 <a href="https://origami.abstreamace.com/" target="_blank">Mu-Tsun Tsai</a>',
	vi: 'Copyright © 2021-2026 <a href="https://origami.abstreamace.com/" target="_blank">Mu-Tsun Tsai</a>',
	"zh-CN": 'Copyright © 2021-2026 <a href="https://origami.abstreamace.com/" target="_blank">蔡牧村</a>',
	"zh-TW": 'Copyright © 2021-2026 <a href="https://origami.abstreamace.com/" target="_blank">蔡牧村</a>',
};

function FooterContent() {
	const lang = typeof document !== "undefined"
		? document.documentElement.lang || "en"
		: "en";
	const html = COPYRIGHT[lang] || COPYRIGHT.en;

	return (
		<div
			className="copyright-footer"
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}

export default function CopyrightFooter() {
	const [container, setContainer] = React.useState<HTMLElement | null>(null);

	React.useEffect(() => {
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
	return ReactDOM.createPortal(<FooterContent />, container);
}
