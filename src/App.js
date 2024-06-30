import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AppNavigator from "./AppNavigator";
import { Provider } from "react-redux";
import store from "./utils/store";
import Player from "./pages/Player";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppNavigator />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "watch",
          element: <Player />,
        },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
