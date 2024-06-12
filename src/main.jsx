import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Success from "./Success.jsx";
import Fail from "./Fail.jsx";
import Cancel from "./Cancel.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/success",
    element: <Success></Success>,
  },
  {
    path: "/cancel",
    element: <Cancel></Cancel>,
  },
  {
    path: "/fail",
    element: <Fail></Fail>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
