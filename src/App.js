import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Orders from "./Components/Orders/Orders";
import Main from "./Main/Main";
import Shop from "./Components/Shop/Shop";
import Inventory from "./Components/Inventory/Inventory";
import { commonLoader } from "./Loader/Loader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Shop></Shop>,
          loader: async () => {
            return fetch(`./products.json`);
          },
        },
        {
          path: "/shop",
          loader: async () => {
            return fetch(`./products.json`);
          },
          element: <Shop></Shop>,
        },

        {
          path: "/orders",
          loader: commonLoader,
          element: <Orders></Orders>,
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>;
    </div>
  );
}

export default App;
