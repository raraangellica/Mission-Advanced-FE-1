import { useState } from "react";
import { User, Star, LogOut, ChevronUp, BriefcaseBusiness } from "lucide-react";
import { useNavigate } from "react-router";

export const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const buttonstyle =
    "flex items-center justify-start pl-4 py-4 group transition-colors group";
  const iconStyle =
    "w-3.5 h-3 md:w-5 md:h-5 text-white mr-4 fill-white group-hover:text-[rgba(50,84,255,1)]";
  const textStyle =
    "text-white font-medium text-[10px] line-height-[140%] tracking-[0.2px] md:text-sm group-hover:text-[rgba(50,84,255,1)]";

  return (
    <nav className="p-4 flex items-center ">
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 focus:outline-none group"
        >
          <div className="w-5 h-5 md:w-10 md:h-10 rounded-full overflow-hidden border border-gray-600">
            <img
              src="/images/DefaultProfile.png"
              alt="Profile Default"
              className="w-full h-full object-cover"
            />
          </div>
          <ChevronUp
            className={`text-white w-4 h-4 md:w-5 md:h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 w-30 md:w-39 bg-[rgba(24,26,28,1)] rounded-lg shadow-2xl overflow-hidden border border-gray-800 z-50">
            <div className="flex flex-col py-2 font-medium text-[10px] line-height-[140%] tracking-[0.2px] md:text-sm">
              <button className={buttonstyle}>
                <User className={iconStyle} />
                <span className={textStyle}>Profil Saya</span>
              </button>
              <button className={buttonstyle}>
                <Star className={iconStyle} />
                <span className={textStyle}>Ubah Premium</span>
              </button>
              <button
                onClick={() => {
                  navigate("/management");
                }}
                className={buttonstyle}
              >
                <BriefcaseBusiness className={iconStyle} />
                <span className={textStyle}>Manajemen</span>
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("isAuthenticated");
                  globalThis.location.href = "/login";
                  alert("Berhasil Keluar");
                }}
                className={buttonstyle}
              >
                <LogOut className={iconStyle} />
                <span className={textStyle}>Keluar</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
