import { useState, useRef, useEffect } from "react";
import { VolumeOff, Volume2 } from "lucide-react";
import Button from "../atoms/Button";
import { Info } from "lucide-react";

export const ButtonHero = () => {
  const basestyle =
    "flex items-center justify-center gap-2 rounded-full  transition-all duration-200 text-[12px] leading-[140%] tracking-[0.2px] md:text-[16px] h-full ";
  const iconStyle = "w-3 h-3 md:w-5 md:h-5";
  return (
    <div className="flex items-center gap-4">
      <Button
        variant={`${basestyle}px-6 py-2 font-bold bg-[rgba(15,30,147,1)] hover:bg-blue-800 `}
      >
        Mulai
      </Button>
      <Button
        variant={`${basestyle} px-6 py-2  font-bold bg-[rgba(47,51,52,1)] hover:bg-gray-700 `}
      >
        <Info
          className={`${iconStyle} bg-[rgba(47,51,52,1)] hover:bg-gray-700 `}
        />{" "}
        Selengkapnya
      </Button>
      <Button
        variant={`${basestyle} border border-white/50 bg-transparent cursor-default text-white/50 p-1 md:px-4 md:py-2 w-7.5 h-6 md:text-normal md:w-13 md:h-11 flex items-center justify-center`}
      >
        18+
      </Button>
    </div>
  );
};

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    videoRef.current?.play();
  }, []);
  useEffect(() => {
    videoRef.current.muted = isMuted;
  }, [isMuted]);

  return (
    <section className="relative flex flex-col items-center  ">
      <video
        className="min-w-90 min-h-56 w-screen max-w-full min-w-full object-cover max-w-[1440px] max-h-[587px]"
        ref={videoRef}
        loop
        autoPlay
      >
        <source
          src="/public/videos/DutyAfterSchoolVideo.mp4"
          type="video/mp4"
        />
      </video>
      <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(16,18,19,0.86)] to-[rgba(24,26,28,1)]"></div>
      <div className="absolute flex flex-col gap-3 md:gap-10 z-20 px-5 bottom-10 min-w-[320px] max-w-[1280px] w-full md:bottom-20 md:px-20 ">
        <div className="flex flex-col gap-3 md:gap-5  md:mb-5 md:w-[668px] md:h-37">
          <h1 className="text-2xl leading-[120%] font-bold md:leading-[110%] tracking-normal md:text-5xl">
            Duty After School
          </h1>
          <p className="w-80 md:h-[75px]line-clamp-2 text-medium text-[12px] leading-[140%] tracking-[0.1px] md:text-lg md:line-clamp-none max-w-full md:w-full">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
        </div>
        <div className="flex justify-between h-[25px] md:h-11">
          <ButtonHero />
          <button
            onClick={toggleMute}
            className=" w-6 pl-[6px] pr-[7px] md:w-11 h-full  md:pl-[13px] md:pr-[13px] border border-white/50 bg-transparent rounded-full cursor-pointer"
          >
            {isMuted ? (
              <VolumeOff className="text-white/50 w-3 h- md:w-4.5 md:h-4.5" />
            ) : (
              <Volume2 className="text-white/50 w-3 h-3 md:w-4.5 md:h-4.5 " />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
