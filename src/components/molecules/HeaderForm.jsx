import LogoForm from "../../assets/LogoForm.png";

const HeaderForm = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full mb-4 h-auto md:h-[150px]">
      <img
        src={LogoForm}
        alt="logo"
        className="w-[94px] h-[24px] md:w-[163px] md:h-[44px]"
      />
      <div className="flex flex-col items-center gap-[4.6px]">
        <h1 className="font-bold text-lg leading-[140%] tracking-[0.2px] md:text-[32px] text-center">
          {name}
        </h1>
        <p className="text-[10px] font-normal leading-[140%] tracking-[0.2px] md:text-[16px] text-center">
          {name === "Daftar" ? "Selamat datang!" : "Selamat datang kembali!"}
        </p>
      </div>
    </div>
  );
};

export default HeaderForm;
