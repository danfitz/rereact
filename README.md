# Rereact

This is a React clone built using only vanilla JS. The React clone is then used to build a presentational site explaining how the React clone works.

**Bonus**: React clone has 1 extra special feature that extends React.

## MVP Goals

* ~~Create virtual DOM~~
* ~~Render virtual DOM onto the real DOM~~
* ~~Class components~~
* ~~State management~~
* ~~Re-render *entire* virtual DOM when state changes (easier but inefficient)~~

## Stretch Goals

* ~~Props~~
* Re-render *specific parts* of virtual DOM that are actually affected by state changes
* Lifecycle methods
* New props triggers re-render
* Functional components
* Class names for components for targeted styling

## Needs Refactoring

* I want to pass the component class itself, not a new instance of the class
* `RereactDOM.renderNode` logic needs to be updated to account for every case