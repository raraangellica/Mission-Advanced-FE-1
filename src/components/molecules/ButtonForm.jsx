import GoogleLogo from "../../assets/GoogleLogo.png";
import Button from "../atoms/Button";

const ButtonForm = ({ name }) => {
  return (
    <div className="flex flex-col items-center gap-1 w-full mt-4">
      <Button
        type="submit"
        variant=" cursor-pointer w-full h-[27px] rounded-full border-[1px] border-[rgba(231,227,252,0.23)] px-[11.55px] py-[8.09px] bg-[rgba(61,65,66,1)] flex items-center justify-center md:rounded-3xl md:h-[47px] hover:bg-gray-600 "
      >
        {name}
      </Button>
      <p>Atau</p>
      <Button
        type="button"
        onClick={() =>
          alert(
            `Anda ${name === "Daftar" ? "Mendaftar" : "Masuk"} menggunakan Google (Hanya Contoh)`,
          )
        }
        variant="!bg-transparent h-[27px] rounded-xl border-[1px] border-[rgba(231,227,252,0.23)]  px-[11.55px] py-[8.09px] cursor-pointer flex items-center justify-center gap-2 md:rounded-3xl md:px-5 md:py-[14px] md:h-[47px] w-full hover:text-gray-400"
      >
        <img
          src={GoogleLogo}
          alt="Google Logo"
          className="w-[10px] lg:w-[18px]"
        />
        <span>{name} dengan Google</span>
      </Button>
    </div>
  );
};

export default ButtonForm;
