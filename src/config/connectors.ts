import { avalancheFuji, avalanche } from '@wagmi/core/chains';
import { configureChains, createClient } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const providers: any = [publicProvider()];

process.env.REACT_APP_ALCHEMY_KEY && providers.unshift(alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_KEY }));

const { chains, provider, webSocketProvider } = configureChains(
  [process.env.REACT_APP_PROJECT_TYPE === 'mainnet' ? avalanche : avalancheFuji],
  providers,
);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new InjectedConnector({
      chains,
      options: {
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});
