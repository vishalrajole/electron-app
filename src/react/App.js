import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { channels } from "../shared/constants";
const { ipcRenderer } = window;

const App = () => {
  const [appName, setAppName] = useState();
  const [appVersion, setAppVersion] = useState();

  useEffect(() => {
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      const { appName, appVersion } = arg;
      setAppName(appName);
      setAppVersion(appVersion);
    });
  }, []);

  useEffect(() => {
    const getNews = async () => {
      const result = await axios.get(
        "http://api.openweathermap.org/data/2.5/weather?q=berlin&appid=cd125d5804fde511952a167d5fbcc931"
      );

      console.log("axios result: ", result);
    };
    getNews();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {appName} version {appVersion}
        </p>
      </header>
    </div>
  );
};

export default App;
