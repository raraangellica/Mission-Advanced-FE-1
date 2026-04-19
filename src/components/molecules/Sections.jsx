import { ArrowRight, ArrowLeft } from "lucide-react";
import MovieCard from "../molecules/MovieCard.jsx";
import { Movies } from "../data/Movies.jsx";

import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ContinueSection = () => {
  const sliderRef = useRef(null);
  const slide = (direction) => {
    const { current } = sliderRef;
    const scrollAmount = 300;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <section className="mx-auto  pl-5 min-w-90 max-w-360 h-58.75 py-5 md:py-10 md:px-20 md:h-77">
      <h3 className="text-bold text-xl leading-[120%] tracking-normal md:text-[32px] md:leading-[110%]">
        Melanjutkan Tonton Film
      </h3>
      <div className="relative group w-full max-w-[1280px] h-auto object-contain mt-5 md:mt-8 ">
        {/* Tombol Navigasi Kiri */}
        <button
          onClick={() => slide("left")}
          className="absolute rounded-full left-[-25px] top-1/2 -translate-y-1/2 z-10 bg-[rgba(47,51,52,1)] p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
        >
          <ArrowLeft />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-4 md:gap-6 w-full overflow-x-auto scroll-smooth md:overflow-hidden h-38 md:h-full snap-x snap-mandatory "
        >
          {Movies.filter((movie) => movie.watched === true)
            .slice(0, 5)
            .map((movie) => (
              <div
                key={movie.id}
                className="flex-shrink-0 snap-start  md:hover:scale-110"
              >
                <MovieCard variant="v1" className="">
                  <MovieCard.Image
                    variant="var1"
                    src={movie.image1}
                    alt={movie.name}
                  />
                  <MovieCard.TitleRate name={movie.name} rate={movie.rate} />
                </MovieCard>
              </div>
            ))}
        </div>

        <button
          onClick={() => slide("right")}
          className="absolute rounded-full right-[-25px] right-0 top-1/2 -translate-y-1/2 z-10 bg-[rgba(47,51,52,1)] p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ContinueSection;

export const Section2 = () => {
  const sliderRef = useRef(null);
  const slide = (direction) => {
    const { current } = sliderRef;
    const scrollAmount = 300;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <section className="mx-auto pl-5 min-w-85 max-w-360 h-48 mt-5 md:py-10 md:px-20 md:h-128 ">
      <h3 className="text-bold text-xl leading-[120%] tracking-normal md:text-[32px] md:leading-[110%]">
        Top Rating Film dan Series Hari ini
      </h3>
      <div className="relative group w-full max-w-[1280px] h-auto object-contain mt-5 md:h-[365px]">
        <button
          onClick={() => slide("left")}
          className="absolute rounded-full left-[-25px] top-1/2 -translate-y-1/2 z-10 bg-[rgba(47,51,52,1)] p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
        >
          <ArrowLeft />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-4 md:gap-6 w-full overflow-x-auto scroll-smooth md:overflow-hidden h-full snap-x snap-mandatory"
        >
          {Movies.filter((movie) => movie.new === true)
            .slice(0, 100)
            .map((movie) => (
              <div
                key={movie.id}
                className="shrink-0 snap-start h-full md:hover:scale-110"
              >
                <MovieCard variant="v2">
                  <MovieCard.Image
                    variant="var2"
                    src={movie.image2}
                    alt={movie.name}
                  />
                  {movie.newEp && <MovieCard.NewEpCard />}
                  {movie.top && <MovieCard.Top />}
                </MovieCard>
              </div>
            ))}
        </div>

        <button
          onClick={() => slide("right")}
          className="absolute rounded-full right-[-25px] right-0 top-1/2 -translate-y-1/2 z-10 bg-[rgba(47,51,52,1)] p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export const Section3 = () => {
  const sliderRef = useRef(null);
  const slide = (direction) => {
    const { current } = sliderRef;
    const scrollAmount = 300;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <section className="mx-auto pl-5 min-w-85 max-w-360 h-48 mt-5 md:py-10 md:px-20 md:h-128 ">
      <h3 className="text-bold text-xl leading-[120%] tracking-normal md:text-[32px] md:leading-[110%]">
        Film Trending
      </h3>
      <div className="relative group w-full max-w-[1280px] h-auto object-contain mt-5 md:h-[365px]">
        <button
          onClick={() => slide("left")}
          className="absolute rounded-full left-[-25px] top-1/2 -translate-y-1/2 z-10 bg-[rgba(47,51,52,1)] p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
        >
          <ArrowLeft />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-4 md:gap-6 w-full overflow-x-auto scroll-smooth md:overflow-hidden h-full snap-x snap-mandatory"
        >
          {Movies.filter((movie) => movie.top === true)
            .slice(0, 100)
            .map((movie) => (
              <div
                key={movie.id}
                className="shrink-0 snap-start h-full md:hover:scale-110"
              >
                <MovieCard variant="v2">
                  <MovieCard.Image
                    variant="var2"
                    src={movie.image2}
                    alt={movie.name}
                  />
                  {movie.top && <MovieCard.Top />}
                </MovieCard>
              </div>
            ))}
        </div>

        <button
          onClick={() => slide("right")}
          className="absolute rounded-full right-[-25px] right-0 top-1/2 -translate-y-1/2 z-10 bg-[rgba(47,51,52,1)] p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export const Section4 = () => {
  const sliderRef = useRef(null);
  const slide = (direction) => {
    const { current } = sliderRef;
    const scrollAmount = 300;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <section className="mx-auto pl-5 min-w-85 max-w-360 h-48 mt-5 md:py-10 md:px-20 md:h-128 ">
      <h3 className="text-bold text-xl leading-[120%] tracking-normal md:text-[32px] md:leading-[110%]">
        Rilis Baru
      </h3>
      <div className="relative group w-full max-w-[1280px] h-auto object-contain mt-5 md:h-[365px]">
        <button
          onClick={() => slide("left")}
          className="absolute rounded-full left-[-25px] top-1/2 -translate-y-1/2 z-10 bg-[rgba(47,51,52,1)] p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
        >
          <ArrowLeft />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-4 md:gap-6 w-full overflow-x-auto scroll-smooth md:overflow-hidden h-full snap-x snap-mandatory"
        >
          {Movies.filter((movie) => movie.newRls === true)
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(0, 100)
            .map((movie) => (
              <div
                key={movie.id}
                className="shrink-0 snap-start h-full md:hover:scale-110"
              >
                <MovieCard variant="v2">
                  <MovieCard.Image
                    variant="var2"
                    src={movie.image2}
                    alt={movie.name}
                  />
                  {movie.newEp && <MovieCard.NewEpCard />}
                  {movie.top && <MovieCard.Top />}
                </MovieCard>
              </div>
            ))}
        </div>

        <button
          onClick={() => slide("right")}
          className="absolute rounded-full right-[-25px] right-0 top-1/2 -translate-y-1/2 z-10 bg-[rgba(47,51,52,1)] p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};
