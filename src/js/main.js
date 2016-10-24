import {$on} from './util';
import View from './view';
import Model from './model';
import Controller from './controller';

class App {
	constructor() {
		this.model = new Model();
		this.view = new View();
		this.controller = new Controller(this.model, this.view);
	}

	init() {
		this.view.render();
	}
}

const app = new App();

const setView = () => {
	app.controller.setView(document.location.hash);
};

$on(window, 'load', setView);
$on(window, 'hashchange', setView);