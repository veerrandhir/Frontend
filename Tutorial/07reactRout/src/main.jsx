import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import { Children } from "react";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from './components/User/User.jsx'

// const router = createBrowserRouter([
//   { path: "/", 
//     element: <Layout />,
//     Children: [{
//       path: '',
//       element :<Home/>

//     },
//   {
//     path:'about',
//     element: <About/>
//   }] 
//   },
// ]);
// Alternative way to define route


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element= {<Layout/>}>
      <Route path="" element ={< Home/>}/>
      <Route path="contact" element ={< Contact/>}/>
      <Route path="about" element ={< About/>}/>
      <Route path="user/:userid" element ={< User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
