import {render} from './render.js';
import HeaderView from './view/header-view.js';
import MainView from './view/main-view.js';
import EventsPresenter from './presenter/events-presenter.js';

render(new HeaderView(), document.body);
render(new MainView(), document.body);

const eventsPresenter = new EventsPresenter();
eventsPresenter.init();

