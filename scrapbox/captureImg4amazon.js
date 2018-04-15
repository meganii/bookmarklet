javascript:(() => {
	const titleElement = document.getElementById("productTitle") || document.getElementById("ebooksProductTitle");
	if (!titleElement) return;
	const title = window.prompt('Scrap "Amazon" to your scrapbox.', titleElement.innerHTML);
	if (!title) return;
	const imageElement = document.getElementById("imageBlockContainer") || document.getElementById("ebooksImageBlockContainer");
	if (!imageElement) return;
	const image = imageElement.getElementsByTagName("img")[0];
	const imageUrl = image.getAttribute("src");
	const productUrl = document.querySelector('link[rel="canonical"]').href.replace(/amazon.co.jp\/.*\/dp/, 'amazon.co.jp/dp');
 	const lines=`[${imageUrl} ${productUrl}]\n#本`;
	const body = encodeURIComponent(lines);
	const pageTitle = encodeURIComponent(title.trim());
	window.open(`https://scrapbox.io/your-project/${pageTitle}?body=${body}`);
})();