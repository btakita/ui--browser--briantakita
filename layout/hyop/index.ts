export function nofouc__hyop(el:HTMLBodyElement) {
	el.classList.remove('nofouc')
	let scrolled = false
	function on_scroll() {
		const should_scroll = window.scrollY > 0
		if (scrolled !== should_scroll) {
			scrolled = should_scroll
			document.documentElement.classList.toggle('scrolled', scrolled)
		}
	}
	window.addEventListener('scroll', on_scroll, { passive: true })
	on_scroll()
}
