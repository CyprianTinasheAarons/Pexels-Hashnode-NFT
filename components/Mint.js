import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAccount, useContract, useSigner, useNetwork } from "wagmi";
const mintAbi = require("../contract/abi.json");
import Connect from "./Connect";

export default function Mint() {
  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();
  const [minting, setMinting] = useState(false);
  const [minted, setMinted] = useState(false);
  const { chain } = useNetwork();
  const contractAddr = "0xCDe88C6AD38aB5B6C980Fa22FC1f63f0Bf0bd8C3";

  const mainContract = useContract({
    addressOrName: contractAddr,
    contractInterface: mintAbi,
    signerOrProvider: signer,
  });

  const mint = async () => {
    setMinting(true);
    const tx = await mainContract.safeMint(address);
    await tx.wait();
    setMinting(false);
    setMinted(true);
  };

  return (
    <div className=" bg-[#1A0E35]  ">
      <div className="m-auto">
        <h1 className="text-center text-2xl my-8  uppercase tracking-wider text-[#7758F2] animate__animated animate__bounce">
          Pexels Dapp
        </h1>
        <div className="flex justify-center">
          <div>
            <div className="animate__animated animate__rubberBand">
              {" "}
              <Image
                src="/demo.jpeg"
                alt="pexels"
                width={300}
                height={300}
                className="rounded-xl"
              />
            </div>
            <div className="flex justify-center mt-8 mb-16">
              {isConnected ? (
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => mint()}
                  disabled={minting || minted}
                  className="w-full py-4 mt-4 text-white bg-gray-400 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
                >
                  <span className="text-xl tracking-widest uppercase">
                    {" "}
                    Mint
                  </span>
                </motion.button>
              ) : (
                <Connect />
              )}
            </div>
            <div className="-mt-6">
              <h1 className="text-sm font-light text-center">
                {chain && "On " + chain.name + " Network"}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
