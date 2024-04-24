import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Android8 from "./components/Android8";
import Android9 from "./components/Android9";
import Android1 from "./components/Android1";
import Android2 from "./components/Androind2";
import Android6 from "./components/Android6";
import Androind4 from "./components/Androind4";
import Androind5 from "./components/Android5";

const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Androind5/>
  },
  {
    path: "/register",
    element: <Androind4/>
  },
  {
    path: "/goals",
    element: <Android6/>
  },
  {
    path: "/android2",
    element: <Android2/>
  },
  {
    path: "/",
    element: <Android1/>
  },
  {
    path: "/mainpage",
    element: <App />,
    children: [
      {
        path: "/mainpage",
        element: <Android8 />,
      },
      {
        path: "schedule",
        element: <Android9 />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
