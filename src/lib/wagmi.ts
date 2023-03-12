import { createClient, configureChains } from "wagmi";
import { goerli, hardhat, mainnet } from "wagmi/chains";
import { getDefaultClient } from "connectkit";

let currentChain = hardhat;

if (process.env.NEXT_PUBLIC_NETWORK?.toLowerCase() == "goerli") {
  currentChain = goerli;
}

const client = createClient(
  getDefaultClient({
    appName: "WAGMI",
    alchemyId:  process.env.NEXT_PUBLIC_ALCHEMY_GOERLI_API,
    chains: [currentChain, mainnet],
  })
);

export default client;
