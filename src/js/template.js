import moment from 'moment';

const html = (literal, ...cooked) => {
	let result = '';

	cooked.forEach((cook, i) => {
		let lit = literal[i];

		if(Array.isArray(cook)){
			cook = cook.join('');
		}
		result += lit;
		result += cook;
	});

	result += literal[literal.length - 1];
	return result;
};

const controls = (data) => {
	const curr = moment(data.iso);
	const next = moment(data.iso).add(1, 'month');
	const prev = moment(data.iso).subtract(1, 'month');

	return html`
		<div id="controls">
			<a class="item" href="#/${prev.format('MM')}/${prev.format('YYYY')}">
				<i class="fa fa-chevron-left"></i>
			</a>
			<span class="item">${curr.format('MMMM')}, ${curr.format('YYYY')}</span>
			<a class="item" href="#/${next.format('MM')}/${next.format('YYYY')}">
				<i class="fa fa-chevron-right"></i>
			</a>
		</div>
	`
};

const day = (data) => html`
	<div class="day-wrapper" data-iso="${data.iso}">
		<span class="date">${moment(data.iso).format('D')}</span>
	</div>
`;

const calendar = (data) => {
	let dayNodes = `${data.days.map(data => day(data))}`;

	let calendar = html`
		${controls(data)}
		<div class="calendar full-width weeks-${data.weekCount}">
			${dayNodes.replace(/,/g, '')}
		</div>
	`;

	return calendar;
};

export {calendar};