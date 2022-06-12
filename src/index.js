import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import {
  WagmiConfig,
  configureChains,
  createClient,
  defaultChains,
} from 'wagmi'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import { Buffer } from 'buffer'
import Header from './components/header'
import Home from './pages/home'
import Lending from './pages/lending'
import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// polyfill Buffer for client
if (!window.Buffer) {
  window.Buffer = Buffer
}

const alchemyId = process.env.REACT_APP_ALCHEMY_ID

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ alchemyId }),
])

const client = createClient({
  connectors: [
    new MetaMaskConnector({ chains }),
    // new CoinbaseWalletConnector({
    //   chains,
    //   options: {
    //     appName: 'wagmi',
    //   },
    // }),
    // new WalletConnectConnector({
    //   chains,
    //   options: {
    //     qrcode: true,
    //   },
    // }),
    // new InjectedConnector({
    //   chains,
    //   options: {
    //     name: 'Injected',
    //     shimDisconnect: true,
    //   },
    // }),
  ],
  provider,
  webSocketProvider,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lending" element={<Lending />} />

        </Routes>
      </BrowserRouter>

    </WagmiConfig>
  </React.StrictMode>,
)
