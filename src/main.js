import {render} from './render.js';
import NewHeaderView from './view/new-header-view.js';
// import {re} from '@babel/core/lib/vendor/import-meta-resolve';
import NewMainView from './view/new-main-view.js';

// const pageMainElement = document.querySelector('.page-main');

render(new NewHeaderView(), document.body);
render(new NewMainView(), document.body);
