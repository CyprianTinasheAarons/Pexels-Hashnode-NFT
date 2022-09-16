import Connect from "./Connect";
export default function Header() {
  return (
    <header className="bg-[#1A0E35]">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-[#41344F] py-6 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <img
                className="w-auto h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt=""
              />
            </a>
          </div>
          <div className="ml-10 space-x-4">
            <Connect />
          </div>
        </div>
      </nav>
    </header>
  );
}
