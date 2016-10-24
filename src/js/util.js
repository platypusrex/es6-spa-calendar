const $on = (target, event, handler) => {
	target.addEventListener(event, handler);
};

const $dayWrapperStyle = () => {
	return Array.from(document.querySelectorAll('.day-wrapper')).filter((element, i) => {
		if(i >= 28 && parseInt(element.innerText) < 2) {
			return element;
		}
	}).map((element) => {
		element.style.background = '#efefef';
	});
};

export {$on, $dayWrapperStyle};