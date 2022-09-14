import Image from "next/image";
import { motion } from "framer-motion";

export default function Mint() {
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
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className=" text-white  w-full py-4 mt-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 "
              >
                <span className="uppercase text-xl tracking-widest"> Mint</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
