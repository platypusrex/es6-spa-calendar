export default class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	render() {
		this.view.render(this.model.toJSON());
	}

	setView(hash) {
		let validUrl = /^#\/[\d]{2}\/[\d]{4}$/.test(hash);

		if(validUrl) {
			let matches = hash.match(/^#\/([\d]{2})\/([\d]{4})$/);
			var month = parseInt(matches[1], 10) - 1;
			var year = parseInt(matches[2], 10);

			this.model.setData(month, year);
		}

		this.render();
	}
}