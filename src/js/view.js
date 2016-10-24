import {calendar} from './template';
import {$dayWrapperStyle} from './util';

export default class View {
	constructor(){
		this.el = document.getElementById('app');
	}

	render(data) {
		this.el.innerHTML = calendar(data);
		$dayWrapperStyle();
	}
}