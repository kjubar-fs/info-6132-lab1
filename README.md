# INFO 6132 - Lab 1
## Simple To-do App
### By Kaleb Jubar

This is a simple to-do list app created for lab 1. It features a state-held list of tasks that the user can add tasks to and remove tasks from, as well as the ability to mark tasks as completed.

The list is implemented via the `FlatList` component to enable efficient rendering and scrolling with minimal code.

I opted to just use prop drilling here for passing state and management functions, as it is a simple app with few layers and not cumbersome to pass these via properties. In a more complex app, however, I would either use `useContext` or Redux to handle state easier.

I also opted to implement the Add Task form using a `Modal` component instead of adding React Navigation to the project and using separate screens. This was to save time on implementation, since navigation is a bit overkill for just 2 screens.

A title must be supplied to add the task - a validation error will be displayed to indicate to the user that title is required if they attempt to add a task without a title.

## Installation Instructions
1. Download or clone this repo.
2. Run `npm install` to install the necessary packages for running the app. This will throw some warnings due to the version of Expo being used, as it apparently makes use of some deprecated packages. In addition, some of Expo's current dependencies have moderate security vulnerabilities. For a real app, this should be investigated, but for the purposes of this assignment, it doesn't affect the app's operation and there's not really anything I can do about it.
3. Start Expo with `npm start`.
4. Press `i` to open an iPhone simulator or `a` to open an Android simulator.