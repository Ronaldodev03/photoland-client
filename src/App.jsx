import { RouterProvider, createBrowserRouter } from "react-router-dom";
/* components */
import Layout from "./components/Layout.jsx";

/* pages */
import Home from "./pages/Home";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Search from "./pages/Search.jsx";


/* routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
        //    errorElement: <ErrorPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        // errorElement: <ErrorPage />,
      },
      {
        path: "/search",
        element: <Search />,
        // errorElement: <ErrorPage />,
      },

      {
        //   path: "/*",
        //   element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
