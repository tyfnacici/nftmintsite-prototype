import { ethers } from "ethers";
import { formatEther } from "ethers/lib/utils";

function WalletBalance(props) {
  function randomList(quantity, max) {
    const liste = new Set();
    while (liste.size < quantity) {
      liste.add(Math.floor(Math.random() * max) + 1);
    }
    return liste;
  }
  const liste = randomList(16, 16);

  const getBalance = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    props.setWalletBalance(formatEther(balance).toString());
    props.setWalletStatus(true);
    localStorage.setItem("isLoggedIn", "1");
    localStorage.setItem("walletBalance", formatEther(balance).toString());
  };

  return (
    <div className="">
      <button
        className="px-4 py-2 rounded-md bg-blue-500"
        onClick={() => getBalance()}
      >
        Connect your wallet
      </button>
    </div>
  );
}

export default WalletBalance;
