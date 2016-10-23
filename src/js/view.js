import {calendar} from './template';

export default class View {
	constructor(){
		this.el = document.getElementById('app');
	}

	render(data) {
		this.el.innerHTML = calendar(data);
	}
}