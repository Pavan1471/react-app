import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { ThirdwebProvider } from '@thirdweb-dev/react';

const App = () => (
  <ThirdwebProvider>
      <ConnectWallet />
  </ThirdwebProvider>
);

export default App;