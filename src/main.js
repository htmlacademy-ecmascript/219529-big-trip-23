import {render} from './render.js';
import NewHeaderView from './view/new-header-view.js';
import NewMainView from './view/new-main-view.js';
import NewTripSortView from './view/new-trip-sort-view.js';
import EventsListView from './view/events-list-view.js';

render(new NewHeaderView(), document.body);
render(new NewMainView(), document.body);

const tripEventsContainerElement = document.querySelector('.trip-events');
render(new NewTripSortView(), tripEventsContainerElement);
render(new EventsListView(), tripEventsContainerElement);

