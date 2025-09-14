import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserrRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import { Children } from "react";

const router = createBrowserrRouter([
  { path: "/", 
    element: <Layout />,
    Children: [{
      path: '',
      element :<Home/>

    },
  {
    path:'about',
    element: <About/>
  }] 
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
