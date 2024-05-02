import {RenderPosition} from './const.js';

function createElement(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
}

function render(component, container, place = RenderPosition.AFTERBEGIN) {
  container.insertAdjacentElement(place, component.getElement());
}

export {createElement, render};
