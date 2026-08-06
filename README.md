# Class-Based Profile App

A Create React App project demonstrating state and lifecycle methods in a class-based component.

## Features

- `App` extends `React.Component`
- State contains a `person` object and a `shows` boolean
- The button toggles the profile using `setState`
- `componentDidMount` starts a one-second interval
- `componentWillUnmount` clears the interval
- The interface shows how many seconds have passed since mounting

## Run locally

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## Create a production build

```bash
npm run build
```
