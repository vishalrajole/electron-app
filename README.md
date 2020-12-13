# Electron Create React Example

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Folder structure

- electron/: Code for the main Electron process
- src/react/: Code for the React renderer process
- src/shared/: Code shared between React and Electron
- package.json: Contains scripts for running the app in development, building it, and packaging it for production using electron-builder

## Available Scripts

In the project directory, you can run:

### `npm run electron-start`

Runs electron app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) as electron app.

### `npm run electron-build`

Copies electron build files to build folder

### `npm run electron-package`

Packages desktop electron application for Mac/Windows platform

### `npm run test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### Reference:

https://medium.com/@johndyer24/building-a-production-electron-create-react-app-application-with-shared-code-using-electron-builder-c1f70f0e2649
