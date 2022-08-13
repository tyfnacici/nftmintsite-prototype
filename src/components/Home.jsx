import React, { useEffect, useState } from "react";
import WalletBalance from "./WalletBalance";
import { ethers } from "ethers";
import CubergramNFT from "../artifacts/contracts/CubergramNFT.sol/Cubergram.json";
import Sidebar from "./Sidebar";
import Card from "./Card";

const liste = [15, 7, 2, 10, 12, 14, 11, 6, 8, 1, 9, 16, 3, 13, 5, 4];

// const listeTitles = [
//   "1Bit Hunter",
//   "1Bit Traveler",
//   "Goblin The Gourmand",
//   "Redpunch Studios & Cuberium",
//   "Goblin King",
//   "Agent Soul",
//   "Obsidian Dragon",
//   "Fire Dragon",
//   "Goblin The Gourmand",
//   "Pearl Dragon",
//   "Agent Jonas",
//   "1Bit Hunter",
//   "Agent Colby",
//   "Agent Benedict",
//   "1Bit Skeleton",
// ];
const listeTitles = [
  "Pearl Dragon",
  "Goblin The Gourmand",
  "Agent Colby",
  "1Bit Skeleton",
  "Agent Benedict",
  "Fire Dragon",
  "1Bit Traveler",
  "Goblin The Gourmand",
  "Agent Jonas",
  "Redpunch Studios & Cuberium",
  "Obsidian Dragon",
  "Goblin King",
  "Cuberium",
  "Agent Soul",
  "Redpunch Studios",
  "1Bit Hunter",
];

const contractAddrr = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const provider = new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();

const contract = new ethers.Contract(contractAddrr, CubergramNFT.abi, signer);

function NFTImage({ tokenId, getCount }) {
  const contentId = "QmVVQgcbNxnNaM9zR1vMpdcADVs6rLtJbwFYR4J4HtHC91";
  const metadataURI = `${contentId}/${tokenId}.json`;
  const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;

  const [isMinted, setIsMinted] = useState(false);
  useEffect(() => {
    getMintedStatus();
  }, [isMinted]);

  const getMintedStatus = async () => {
    const result = await contract.isContentOwned(metadataURI);
    setIsMinted(result);
  };

  const mintToken = async () => {
    const connection = contract.connect(signer);
    const addr = connection.address;
    const result = await contract.payToMint(addr, metadataURI, {
      value: ethers.utils.parseEther("0.05"),
    });

    await result.wait();
    getMintedStatus();
    getCount();
  };

  async function getURI() {
    const uri = await contract.tokenURI(tokenId);
    alert(uri);
  }
  let buton;

  if (isMinted === true) {
    buton = (
      <button
        className="px-3 py-2 text-xs text-white bg-blue-600"
        onClick={getURI}
      >
        Taken! Show URI
      </button>
    );
  } else {
    buton = (
      <button
        className="px-3 py-2 text-xs text-white bg-blue-600"
        onClick={mintToken}
      >
        Mint
      </button>
    );
  }

  if (!isMinted) {
    return (
      <Card
        image={"src/assets/cuberium1.png"}
        id={tokenId}
        button={buton}
        title="Mint to unveal secrets!"
      />
    );
  } else {
    return (
      <Card
        image={imageURI}
        id={tokenId}
        title={listeTitles[tokenId - 1]}
        button={buton}
      />
    );
  }
}

function Home() {
  // function randomList(quantity, max) {
  //   const liste = new Set();
  //   while (liste.size < quantity) {
  //     liste.add(Math.floor(Math.random() * max) + 1);
  //   }
  //   return liste;
  // }
  // const liste = randomList(16, 16);

  const [totalMinted, setTotalMinted] = useState(0);
  const [walletStatus, setWalletStatus] = useState(false);
  const [balance, setWalletBalance] = useState();

  useEffect(() => {
    const loginInformation = localStorage.getItem("isLoggedIn");

    if (loginInformation === "1") {
      setWalletStatus(true);
      setWalletBalance(localStorage.getItem("walletBalance"));
    }
  }, []);

  useEffect(() => {
    getCount();
  }, []);
  const getCount = async () => {
    const count = await contract.count();
    setTotalMinted(parseInt(count));
  };

  if (!walletStatus) {
    return (
      <div className="bg-slate-500 flex">
        <Sidebar />
        <div className="">
          <div className="flex flex-wrap h-screen items-center">
            <WalletBalance
              setWalletBalance={setWalletBalance}
              setWalletStatus={setWalletStatus}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-slate-500 flex">
        <Sidebar balance={balance} />
        <div className="">
          <div className="flex flex-wrap place-content-evenly">
            {liste.map((number) => {
              return (
                <div key={number}>
                  <NFTImage tokenId={number} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
