import React from "react";
import './App.css';
import { ConnectWallet } from "@thirdweb-dev/react";
import { ThirdwebProvider } from '@thirdweb-dev/react';

const App = () => (
  <center>
    <ThirdwebProvider>
      <ConnectWallet />
  </ThirdwebProvider>
  </center>
);

export default App;