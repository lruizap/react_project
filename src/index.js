import React from "react";
import ReactDOM from "react-dom/client";
// import { Greeting, UserCard } from "./components/Greeting";
// import Product from "./components/Product";
import { Button } from "./components/Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Button text="Click me" />
    <Button text="Pay" />
    <Button />
    <Button text="" />
  </>
);
