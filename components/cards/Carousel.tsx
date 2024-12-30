"use client"
import { useRef } from "react";
import Gamecard from "./gamecard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Carousel({ games }: { games: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Left Scroll Button */}

      <Button variant="outline" size="icon" onClick={() => scroll("left")}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10 hover:bg-gray-700"
      >
      <ChevronLeft />
    </Button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-scroll scrollbar-hide py-4 px-8"
      >
        {games.map((game: any, index: number) => (
          <Gamecard
            key={`${game.id}-${index}`}
            href={`/game/${game.slug}`}
            name={game.name}
            bg={game.background_image}
            genres={game.genres}
          />
        ))}
      </div>

      {/* Right Scroll Button */}
      <Button variant="outline" size="icon" onClick={() => scroll("right")}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10 hover:bg-gray-700"
      >
      <ChevronRight />
    </Button>
    </div>
  );
}