import {render} from './render.js';
import HeaderView from './view/header-view.js';
import MainView from './view/main-view.js';
import TripSortView from './view/trip-sort-view.js';
import TripEventsListView from './view/trip-events-list-view.js';
import TripEventsItemView from './view/trip-events-item-view.js';
import TripEventsItemEditView from './view/trip-events-item-edit-view.js';
import TripEventsItemCreateView from './view/trip-events-item-create-view.js';

render(new HeaderView(), document.body);
render(new MainView(), document.body);

const tripEventsContainerElement = document.querySelector('.trip-events');
render(new TripSortView(), tripEventsContainerElement);
render(new TripEventsListView(), tripEventsContainerElement);

const tripEventsListContainerElement = document.querySelector('.trip-events__list');
render(new TripEventsItemCreateView(), tripEventsListContainerElement);
render(new TripEventsItemEditView(), tripEventsListContainerElement);
render(new TripEventsItemView(), tripEventsListContainerElement);

