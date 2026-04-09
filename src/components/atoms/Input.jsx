import { useId, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  isPassword = false,
  isConfirmPassword = false,
}) => {
  const id = useId();

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordC, setShowPasswordC] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowPasswordC(!showPasswordC);
  };

  return (
    <div className="items-start w-full inline-block">
      <div className="mb-2">
        <label
          htmlFor={id}
          className="text-[10px] font-normal leading-[140%] md:text-[18px]"
        >
          {label}
        </label>
      </div>

      <div>
        {isPassword ? (
          <div className="flex flex-row justify-between w-full border-[0.58px] border-solid border-[rgba(231,227,252,1)] rounded-full items-center px-3 h-10">
            <input
              id={id}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className="w-full bg-transparent outline-none h-full"
              type={showPassword ? "text" : "password"}
            />

            <span onClick={togglePassword} className="cursor-pointer">
              {showPassword ? (
                <Eye className="w-[11.5px] h-[9.5px] md:w-[18.33px] md:h-[16px]" />
              ) : (
                <EyeOff className="w-[11.5px] h-[9.5px] md:w-[18.33px] md:h-[16px]" />
              )}
            </span>
          </div>
        ) : isConfirmPassword ? (
          <div className="flex flex-row justify-between w-full border-[0.58px] border-solid border-[rgba(231,227,252,1)] rounded-full items-center px-3 h-10">
            <input
              id={id}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className="w-full bg-transparent outline-none h-full"
              type={showPasswordC ? "text" : "password"}
            />

            <span onClick={toggleConfirmPassword} className="cursor-pointer">
              {showPasswordC ? (
                <Eye className="w-[11.5px] h-[9.5px] md:w-[18.33px] md:h-[16px]" />
              ) : (
                <EyeOff className="w-[11.5px] h-[9.5px] md:w-[18.33px] md:h-[16px]" />
              )}
            </span>
          </div>
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full h-10 pl-[11.55px] py-[8.09px] border-[0.58px] border-solid border-[rgba(231,227,252,1)] gap-[5.7px] rounded-full"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
