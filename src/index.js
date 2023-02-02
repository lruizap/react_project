import React from "react";
import ReactDOM from "react-dom/client";
// import { Greeting, UserCard } from "./components/Greeting";
// import Product from "./components/Product";
// import { Button } from "./components/Button";
// import { Saludar } from "./components/Saludar";
import { TaskCard } from "./components/Task";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard />
    <TaskCard ready={true} />
  </>
);
