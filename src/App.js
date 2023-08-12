// import React from "react";
// import './App.css';
// // import { ConnectWallet } from "@thirdweb-dev/react";
// // import { ThirdwebProvider } from '@thirdweb-dev/react';

// const App = () => (
//   // <center>
//   //   <ThirdwebProvider>
//   //     <ConnectWallet />
//   // </ThirdwebProvider>
//   // </center>
//   <>
//   <h1>hello</h1>
//   </>
// );

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Product from './Product';
import Wishlist from "./Wishlist";
import Cart from "./Cart";
// import NoPage from "./pages/NoPage";



export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"  element={<Home />} />
           <Route path="cart" element={<Cart />} />
           <Route path="/product/:userId" element={<Product/>}/>
          <Route path="/wishlist" element={<Wishlist />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// export default App;