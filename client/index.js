import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./components/App";
// import styles from "./styles.css";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<App />);
