import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
/*import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";*/
import HomePage from "./components/HomePage";
import ContentList from "./components/contentList";
import Carrito from "./components/Carrito";
import store from "./store";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/content" element={<ContentList />}></Route>
            <Route path="/carrito" element={<Carrito />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
