import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-[#1A0E35]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-[#41344F] py-6 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt=""
              />
            </a>
          </div>
          <div className="ml-10 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              href="#"
              className="text-white  w-full py-4 mt-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
            >
              <span className="uppercase text-sm mx-4  tracking-widest">
                {" "}
                Connect Wallet
              </span>
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  );
}
