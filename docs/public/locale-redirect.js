(function() {
	var SUPPORTED = ["en", "zh-TW", "zh-CN", "ja", "ko", "es", "vi"];
	var DEFAULT = "en";
	var KEY = "bp-docs-lang";
	var path = location.pathname;

	// 判斷目前頁面的語系
	var current = DEFAULT;
	for (var i = 0; i < SUPPORTED.length; i++) {
		if (path.startsWith("/" + SUPPORTED[i] + "/")) {
			current = SUPPORTED[i];
			break;
		}
	}

	var saved = localStorage.getItem(KEY);
	if (saved) {
		// 已有儲存的偏好，若與目前語系不同則重定向
		if (saved !== current && SUPPORTED.indexOf(saved) !== -1) {
			var pagePath = path;
			// 移除目前的語系前綴
			if (current !== DEFAULT) {
				pagePath = path.substring(("/" + current).length);
			}
			// 加上目標語系前綴
			var target = saved === DEFAULT ? pagePath : "/" + saved + pagePath;
			location.replace(target || "/");
			return;
		}
	} else {
		// 第一次造訪：偵測瀏覽器語系
		var langs = navigator.languages || [navigator.language];
		var detected = DEFAULT;
		for (var j = 0; j < langs.length; j++) {
			var lang = langs[j];
			if (lang === "zh-TW" || lang === "zh-Hant") { detected = "zh-TW"; break; }
			if (lang === "zh-CN" || lang === "zh-Hans" || lang === "zh") { detected = "zh-CN"; break; }
			if (lang === "ja" || lang.startsWith("ja-")) { detected = "ja"; break; }
			if (lang === "ko" || lang.startsWith("ko-")) { detected = "ko"; break; }
			if (lang === "es" || lang.startsWith("es-")) { detected = "es"; break; }
			if (lang === "vi" || lang.startsWith("vi-")) { detected = "vi"; break; }
			if (lang.startsWith("en")) { detected = "en"; break; }
		}
		localStorage.setItem(KEY, detected);
		if (detected !== current) {
			var pagePath2 = path;
			if (current !== DEFAULT) {
				pagePath2 = path.substring(("/" + current).length);
			}
			var target2 = detected === DEFAULT ? pagePath2 : "/" + detected + pagePath2;
			location.replace(target2 || "/");
			return;
		}
	}

	// 當使用者透過語言切換器切換時，更新 localStorage
	var observer = new MutationObserver(function() {
		var newPath = location.pathname;
		var newLang = DEFAULT;
		for (var k = 0; k < SUPPORTED.length; k++) {
			if (newPath.startsWith("/" + SUPPORTED[k] + "/")) {
				newLang = SUPPORTED[k];
				break;
			}
		}
		localStorage.setItem(KEY, newLang);
	});
	observer.observe(document.querySelector("html"), { attributes: true, attributeFilter: ["lang"] });
})();
