import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage.tsx";
import Books from "./components/Books.tsx";
import Charecters from "./components/Charecters.tsx";
import Movies from "./components/Movies.tsx";
import Potions from "./components/Potions.tsx";
import Spells from "./components/Spells.tsx";
import Header from "./components/Header.tsx";
import BodyItems from "./components/BodyItems.js";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/charecters",
        element: <Charecters />,
      },
      {
        path: "/potions",
        element: <Potions />,
      },
      {
        path: "/spells",
        element: <Spells />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/books/:id",
        element: <BodyItems />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
