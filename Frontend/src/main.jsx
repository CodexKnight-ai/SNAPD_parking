import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home, Slot, About, Report, Protected } from "./Components/pages.js";
import Layout from "./Components/Layout.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import TandC from "./Components/TandC.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route
        path="/login"
        element={
          <Protected authentication={false}>
            <Login />
          </Protected>
        }
      />
      <Route
        path="/signup"
        element={
          <Protected authentication={false}>
            <Signup />
          </Protected>
        }
      />
      <Route path="about-us" element={<About/>} />
      <Route
        path="/slot"
        element={
          <Protected authentication={true}>
            <Slot />
          </Protected>
        }
      />
      <Route
        path="/project-report"
        element={
          <Protected authentication={true}>
            <Report />
          </Protected>
        }
      />
      <Route path="/terms-and-conditions" element={<TandC />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
