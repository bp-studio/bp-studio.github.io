---
layout: default
title: Gallery
nav_order: 5
---

# Gallery

These are the original designs using BP Studio that came to my attention or were submitted to me by various designers since the release of BP Studio, in random ordering:

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

<div id="divG">Loading...</div>

<link rel='stylesheet' id='modula-css'  href='https://origami.abstreamace.com/wp-content/plugins/modula-best-grid-gallery/assets/css/front.css?ver=2.6.2' type='text/css' media='all' />
<script type='text/javascript' src='https://origami.abstreamace.com/wp-includes/js/jquery/jquery.min.js?ver=3.6.0' id='jquery-core-js'></script>
<script type='text/javascript' src='https://origami.abstreamace.com/wp-content/plugins/modula-best-grid-gallery/assets/js/front/fancybox.js?ver=2.6.2' id='modula-fancybox-js'></script>
<script type='text/javascript' src='https://origami.abstreamace.com/wp-content/plugins/modula-best-grid-gallery/assets/js/modula-wf.js?ver=2.6.2' id='modula-wf-js'></script>