import { Star } from "lucide-react";

const MovieCard = ({ children, variant, className }) => {
  const variants = {
    v1: "relative w-77.5 h-38 md:w-75.5 md:h-40.5  ",
    v2: "relative w-[95px] h-[145px] md:w-58.5 md:h-91.25",
  };
  return <div className={`${variants[variant]} ${className}`}>{children}</div>;
};

const Image = ({ src, alt, variant, className }) => {
  const variants = {
    var1: "w-77.5 h-38 md:w-75.5 md:h-40.5 bg-gradient-to-b from-transparent to-black opacity-80",
    var2: "w-[95px] h-[145px] md:w-[234px] md:h-[365px]",
  };
  return (
    <img
      src={src}
      alt={alt}
      className={`${variants[variant]} object-cover rounded-lg ${className}`}
    />
  );
};

const TitleRate = ({ name, rate }) => {
  return (
    <div className="absolute flex justify-between bottom-2 w-full px-1 ">
      <h6>{name}</h6>
      <p className="flex items-center gap-1">
        <Star /> <span>{rate}</span>
      </p>
    </div>
  );
};

const NewEpCard = () => {
  return (
    <div className="absolute top-2 left-2 md:left-4 md:top-4 bg-[rgba(15,30,147,1)] text-[6px] text-bold leading-[140%] tracking-[0.1px] rounded-xl border-[0.48px] border-solid border-[rgba(15,30,147,1)] py-0.5 px-1.25 md:text-sm md:tracking-[0.2px] md:px-2.5 md:py-1">
      Episode Baru
    </div>
  );
};

const Top = () => {
  return (
    <div className="absolute w-[15px] h-5.5 md:w-[31px] md:h-12 top-0 right-1  md:right-3 font-normal text-[6.69px] md:font-normal md:text-sm md:tracking-[0.2px] text-center leading-[140%] tracking-[0.1px] bg-[rgba(183,31,29,1)] p-0.5 md:p-1 rounded-tr-xs rounded-bl-xs md:rounded-tr-sm md:rounded-bl-sm ">
      Top 10
    </div>
  );
};

MovieCard.TitleRate = TitleRate;
MovieCard.NewEpCard = NewEpCard;
MovieCard.Image = Image;
MovieCard.Top = Top;

export default MovieCard;
