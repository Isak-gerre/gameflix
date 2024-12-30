import Menubutton from "../buttons/menu_buttons";

export default function Footer() {
  return (
    <footer className="grid grid-rows-[3fr_1fr] p-4 md:px-12 w-full ">
      <div className="flex flex-col justify-center items-start px-4 md:px-8">
        <h2 className="font-plus-jakarta-sans font-extrabold text-3xl leading-[1.85]">
          Gameflix.
        </h2>
        <h4 className="font-plus-jakarta-sans font-extrabold text-lg leading-[1.85]">
          Built with Next.js and RAWG API.
        </h4>
        <h4 className="font-plus-jakarta-sans font-extrabold text-lg leading-[1.85]">
          By Isak Gerre.
        </h4>
      </div>
      <div className="flex justify-between items-center flex-row border-t border-gray-200 py-4">
        <div className="flex space-x-4">
          <Menubutton text="Dashboard" href="/" ></Menubutton>
          <Menubutton text="Popular Games" href="/" ></Menubutton>
          <Menubutton text="Newly added" href="/" ></Menubutton>
        </div>
        <div className="flex space-x-4">
          <Menubutton text="Content Creator" href="https://isakgerre.se" ></Menubutton>
        </div>
      </div>
      <div className="flex justify-center items-center text-xs font-plus-jakarta-sans font-extrabold leading-[1.85]">
        <p>© Copyright 2024, All rights Reserved</p>
      </div>
    </footer>
  );
}