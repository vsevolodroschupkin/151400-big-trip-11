import {createTripInfoTemplate as createTripInfoTemplate} from './components/tripInfoTemplate.js';
import {createTripCostTemplate as createTripCostTemplate} from './components/tripCostTemplate.js';
import {createMainMenuTemplate as createMainMenuTemplate} from './components/mainMenuTemplate.js';
import {createFiltersMenuTemplate as createFiltersMenuTemplate} from './components/filtersMenuTemplate.js';
import {createSortingTemplate as createSortingTemplate} from './components/sortingTemplate.js';
import {createEventEditFormTemplate as createEventEditFormTemplate} from './components/eventEditFormTemplate.js';
import {createTripDaysTemplate as createTripDaysTemplate} from './components/tripDaysTemplate.js';
import {createTripDayTemplate as createTripDayTemplate} from './components/tripDayTemplate.js';
import {createTripEventTemplate as createTripEventTemplate} from './components/tripEventTemplate.js';

const DAYS_QUANTITY = 1;
const EVENTS_PER_DAY = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteTripMainElement = document.querySelector(`.trip-main`);
render(siteTripMainElement, createTripInfoTemplate(), `afterbegin`);
const siteTripInfoElement = siteTripMainElement.querySelector(`.trip-info`);
render(siteTripInfoElement, createTripCostTemplate(), `afterbegin`);

const siteTripControlsTabHeader = siteTripMainElement.querySelector(`.trip-controls > h2:nth-of-type(1)`);
const siteTripControlsFiltersHeader = siteTripMainElement.querySelector(`.trip-controls > h2:nth-of-type(2)`);
render(siteTripControlsTabHeader, createMainMenuTemplate(), `afterend`);
render(siteTripControlsFiltersHeader, createFiltersMenuTemplate(), `afterend`);

const siteTripEventsElement = document.querySelector(`.trip-events`);
render(siteTripEventsElement, createSortingTemplate(), `beforeend`);
render(siteTripEventsElement, createEventEditFormTemplate(), `beforeend`);
render(siteTripEventsElement, createTripDaysTemplate(), `beforeend`);
const siteTripDaysElement = siteTripEventsElement.querySelector(`.trip-days`);

for (let i = 0; i < DAYS_QUANTITY; i++) {
  render(siteTripDaysElement, createTripDayTemplate(), `beforeend`);
  const siteTripDayElement = siteTripDaysElement.querySelectorAll(`.trip-events__list`);
  for (let j = 0; j < EVENTS_PER_DAY; j++) {
    render(siteTripDayElement[i], createTripEventTemplate(), `beforeend`);
  }
}


