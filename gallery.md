---
layout: default
title: Gallery
nav_order: 5
---

# Gallery

These are the original designs using (or partly using)
BP Studio that came to my attention or were submitted to me by various designers since the release of BP Studio,
in random ordering:

<div id="divG">Loading...</div>

<link rel='stylesheet' href='/assets/gallery/front.css' type='text/css' />
<script src='/assets/gallery/jquery.min.js'></script>
<script src='/assets/gallery/fancybox.js'></script>
<script src='/assets/gallery/modula-wf.js'></script>

<!--
	Here we use fetching to obtain the Modula Gallery on the website Tsai Origami.
	To do so, the target website must be CORS ready (can be setup using plugin HTTP Headers),
	and the URL for fetching must directly returns 200 without 301
	(although fetch will follow redirection, but WordPress won't send CORS headers in that case).
-->
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
