---
layout: default
title: Gallery
nav_order: 5
---

# Gallery

These are the original designs using (or partly using) BP Studio that came to my attention or were submitted to me by various designers since the release of BP Studio, in random ordering:

<div id="divG">Loading...</div>

<link rel='stylesheet' href='/assets/gallery/front.css' type='text/css' />
<script src='/assets/gallery/jquery.min.js'></script>
<script src='/assets/gallery/fancybox.js'></script>
<script src='/assets/gallery/modula-wf.js'></script>

{% comment %}
	這邊利用動態讀取的方法取得《牧村摺紙》網站上的 Modula Gallery。
	這邊有幾個前提：對方網站上必須設定好 CORS（可以透過 HTTP Headers 外掛來設定），
	而且 fetch 的網址必須是直接傳回 200 的標準網址，不能有 301
	（雖然 fetch 預設的行為是 follow 轉址沒錯，但是 WordPress 在轉址的時候似乎沒辦法發送 CORS header）。
{% endcomment %}
<script>
	fetch("https://origami.abstreamace.com/gallery/").then(async (res) => {
		const html = await res.text();
		const reg = new RegExp('<body class="cleanpage">(.+)<script type="application/ld\\+json">', 's');
		const match = html.match(reg);
		document.getElementById("divG").innerHTML = match[1];
		jQuery(".modula.modula-gallery").each(function() {
			let t = jQuery(this).data("config");
			jQuery(this).modulaGallery(t);
		});
	}).catch(() => document.getElementById("divG").innerHTML = "Failed to load gallery.");
</script>
