import * as ReactDOMClient from "react-dom/client";
import { App } from "./App";
import "../src/index.css";

const container = document.getElementById("app");
if (!container) {
  throw new Error("Container not found");
}
const root = ReactDOMClient.createRoot(container);
root.render(<App />);
