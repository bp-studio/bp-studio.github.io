import { fileURLToPath } from "node:url";
import path from "node:path";
import { defineConfig, UserConfig } from "@rspress/core";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	root: "docs",
	globalUIComponents: [
		path.join(__dirname, "components", "CopyrightFooter.tsx"),
	],
	lang: "en",
	title: "Box Pleating Studio",
	description: "Super-complex origami design made easy!",
	icon: "/logo.png",
	logo: {
		light: "/logo.png",
		dark: "/logo.png",
	},
	logoText: "BP Studio",
	locales: [
		{ lang: "en", label: "English", title: "Box Pleating Studio", description: "Super-complex origami design made easy!" },
		{ lang: "es", label: "Español", title: "Box Pleating Studio", description: "¡Diseño de origami super-complejo hecho fácil!" },
		{ lang: "ja", label: "日本語", title: "Box Pleating Studio", description: "超複雑な折り紙設計を簡単に！" },
		{ lang: "ko", label: "한국어", title: "Box Pleating Studio", description: "초복잡 종이접기 디자인을 쉽게!" },
		{ lang: "vi", label: "Tiếng Việt", title: "Box Pleating Studio", description: "Thiết kế origami siêu phức tạp trở nên dễ dàng!" },
		{ lang: "zh-CN", label: "简体中文", title: "Box Pleating Studio", description: "超复杂折纸设计变简单！" },
		{ lang: "zh-TW", label: "正體中文", title: "Box Pleating Studio", description: "超複雜摺紙設計變簡單！" },
	],
	globalStyles: path.join(__dirname, "docs", "public", "custom.css"),
	i18nSource: {
		prevPageText: { "zh-TW": "上一頁", "zh-CN": "上一页", "es": "Página anterior", "vi": "Trang trước" },
		nextPageText: { "zh-TW": "下一頁", "zh-CN": "下一页", "es": "Página siguiente", "vi": "Trang sau" },
		scrollToTopText: { "zh-TW": "回到頂部", "zh-CN": "回到顶部", "es": "Volver arriba", "vi": "Lên đầu trang" },
		outlineTitle: { "zh-TW": "本頁目錄", "zh-CN": "本页目录", "es": "EN ESTA PÁGINA", "vi": "TRÊN TRANG NÀY" },
		searchPlaceholderText: { "zh-TW": "搜尋", "zh-CN": "搜索", "es": "Buscar", "vi": "Tìm kiếm" },
		searchPanelCancelText: { "zh-TW": "取消", "zh-CN": "取消", "es": "Cancelar", "vi": "Hủy" },
		searchNoResultsText: { "zh-TW": "找不到相符的結果", "zh-CN": "未找到匹配的结果", "es": "Sin resultados", "vi": "Không tìm thấy kết quả" },
		searchSuggestedQueryText: { "zh-TW": "試試搜尋不同的關鍵字", "zh-CN": "试试搜索不同关键词", "es": "Intente buscar con otras palabras", "vi": "Thử tìm kiếm từ khóa khác" },
		languagesText: { "zh-TW": "語言", "zh-CN": "语言", "es": "Idiomas", "vi": "Ngôn ngữ" },
		themeText: { "zh-TW": "主題", "zh-CN": "主题", "es": "Tema", "vi": "Giao diện" },
		menuTitle: { "zh-TW": "選單", "zh-CN": "菜单", "es": "Menú", "vi": "Menu" },
		editLinkText: { "zh-TW": "編輯此頁面", "zh-CN": "编辑此页面", "es": "Editar esta página", "vi": "Sửa trang này" },
		notFoundText: { "zh-TW": "找不到頁面", "zh-CN": "页面未找到", "es": "PÁGINA NO ENCONTRADA", "vi": "KHÔNG TÌM THẤY TRANG" },
		takeMeHomeText: { "zh-TW": "返回首頁", "zh-CN": "返回首页", "es": "Ir al inicio", "vi": "Về trang chủ" },
	} as unknown,
	builderConfig: {
		html: {
			tags: [
				{
					tag: "link",
					attrs: { rel: "stylesheet", href: "/font-awesome/css/all.min.css" },
					head: true,
				},
				{
					tag: "link",
					attrs: { rel: "stylesheet", href: "/bps/style.css" },
					head: true,
				},
				{
					tag: "script",
					attrs: { src: "/locale-redirect.js" },
					head: true,
					append: false,
				},
				{
					tag: "script",
					attrs: {
						async: true,
						src: "https://www.googletagmanager.com/gtag/js?id=G-GG1TEZGBCQ",
					},
					head: true,
				},
				{
					tag: "script",
					children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","G-GG1TEZGBCQ");`,
					head: true,
				},
			],
		},
	},
	themeConfig: {
		socialLinks: [
			{
				icon: "github",
				mode: "link",
				content: "https://github.com/bp-studio/box-pleating-studio",
			},
		],
		locales: [
			{
				lang: "en", label: "English",
				nav: [
					{ text: "Launch App", link: "https://bpstudio.abstreamace.com" },
					{ text: "Sponsor", link: "https://bpstudio.abstreamace.com/donate.htm" },
				],
				sidebar: { "/": [
					{ text: "Getting started", link: "/start" },
					{ text: "Manual", link: "/manual" },
					{ text: "Resources", link: "/resources" },
					{ text: "Gallery", link: "/gallery" },
					{ text: "Notes", link: "/notes" },
				] },
			},
			{
				lang: "zh-TW", label: "正體中文",
				nav: [
					{ text: "啟動應用程式", link: "https://bpstudio.abstreamace.com" },
					{ text: "贊助", link: "https://bpstudio.abstreamace.com/donate.htm" },
				],
				sidebar: { "/zh-TW/": [
					{ text: "入門指南", link: "/zh-TW/start" },
					{ text: "使用手冊", link: "/zh-TW/manual" },
					{ text: "資源", link: "/zh-TW/resources" },
					{ text: "作品集", link: "/zh-TW/gallery" },
					{ text: "附註", link: "/zh-TW/notes" },
				] },
			},
			{
				lang: "zh-CN", label: "简体中文",
				nav: [
					{ text: "启动应用", link: "https://bpstudio.abstreamace.com" },
					{ text: "赞助", link: "https://bpstudio.abstreamace.com/donate.htm" },
				],
				sidebar: { "/zh-CN/": [
					{ text: "入门指南", link: "/zh-CN/start" },
					{ text: "使用手册", link: "/zh-CN/manual" },
					{ text: "资源", link: "/zh-CN/resources" },
					{ text: "作品集", link: "/zh-CN/gallery" },
					{ text: "附注", link: "/zh-CN/notes" },
				] },
			},
			{
				lang: "ja", label: "日本語",
				nav: [
					{ text: "アプリを起動", link: "https://bpstudio.abstreamace.com" },
					{ text: "寄付", link: "https://bpstudio.abstreamace.com/donate.htm" },
				],
				sidebar: { "/ja/": [
					{ text: "はじめに", link: "/ja/start" },
					{ text: "ユーザーマニュアル", link: "/ja/manual" },
					{ text: "リソース", link: "/ja/resources" },
					{ text: "ギャラリー", link: "/ja/gallery" },
					{ text: "ノート", link: "/ja/notes" },
				] },
			},
			{
				lang: "ko", label: "한국어",
				nav: [
					{ text: "앱 실행", link: "https://bpstudio.abstreamace.com" },
					{ text: "후원", link: "https://bpstudio.abstreamace.com/donate.htm" },
				],
				sidebar: { "/ko/": [
					{ text: "시작하기", link: "/ko/start" },
					{ text: "사용 설명서", link: "/ko/manual" },
					{ text: "리소스", link: "/ko/resources" },
					{ text: "갤러리", link: "/ko/gallery" },
					{ text: "참고", link: "/ko/notes" },
				] },
			},
			{
				lang: "es", label: "Español",
				nav: [
					{ text: "Abrir App", link: "https://bpstudio.abstreamace.com" },
					{ text: "Patrocinar", link: "https://bpstudio.abstreamace.com/donate.htm" },
				],
				sidebar: { "/es/": [
					{ text: "Primeros pasos", link: "/es/start" },
					{ text: "Manual", link: "/es/manual" },
					{ text: "Recursos", link: "/es/resources" },
					{ text: "Galería", link: "/es/gallery" },
					{ text: "Notas", link: "/es/notes" },
				] },
			},
			{
				lang: "vi", label: "Tiếng Việt",
				nav: [
					{ text: "Mở ứng dụng", link: "https://bpstudio.abstreamace.com" },
					{ text: "Tài trợ", link: "https://bpstudio.abstreamace.com/donate.htm" },
				],
				sidebar: { "/vi/": [
					{ text: "Bắt đầu", link: "/vi/start" },
					{ text: "Hướng dẫn", link: "/vi/manual" },
					{ text: "Tài nguyên", link: "/vi/resources" },
					{ text: "Bộ sưu tập", link: "/vi/gallery" },
					{ text: "Ghi chú", link: "/vi/notes" },
				] },
			},
		],
	},
} as UserConfig);
