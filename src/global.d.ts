import { BigNumber } from "ethers";
import { GoalStatusEnum } from "./lib/utils";
import { Project } from "../.graphclient";

interface Window {
  ethereum: ExternalProvider;
}

interface ICACollection {
  _address: string;
  type: "Learn" | "Certificate";
  name: string;
  symbol: string;
  artist: string;
  description: string;
  defaultImage: string;
  maxSupply: BigNumber;
  price: BigNumber;
  _library: string;
  libraryURL: string;
  code: string;
}

type IABCollection = Project;
