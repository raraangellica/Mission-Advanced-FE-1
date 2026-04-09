import { useState } from "react";
import Input from "../atoms/Input";
import HeaderForm from "../molecules/HeaderForm";
import ButtonForm from "../molecules/ButtonForm";
import { NavLink, useNavigate } from "react-router"; // penting saat mau ngelink pake navlink

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirm = () => {
    setShowConfirm(!showConfirm);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData.username.length < 3) {
      setError("Username minimal 3 karakter");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password minimal 8 karakter");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Password dan Confirm Password tidak sama");
      return;
    }

    localStorage.setItem("user_data", JSON.stringify(formData));
    alert("Register berhasil!");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center mx-auto bg-[rgba(24,26,28,0.84)] max-w-[306px] md:max-w-[529px] w-full rounded-lg p-6 text-white">
      <HeaderForm name="Daftar" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2 w-full"
      >
        <div className="mb-3 inline-block w-full">
          <Input
            label="Username"
            name="username"
            placeholder="Masukkan username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <Input
            label="Kata Sandi"
            name="password"
            placeholder="Masukkan kata sandi"
            value={formData.password}
            onChange={handleChange}
            showToggle
            isPassword={true}
          />

          <Input
            label="Konfirmasi Kata Sandi"
            name="confirmPassword"
            placeholder="Masukkan kata sandi"
            value={formData.confirmPassword}
            onChange={handleChange}
            showToggle
            isConfirmPassword={true}
          />

          <div className="flex  text-[10px] font-normal leading-[140%] tracking-[0.2px] md:text-[12px]">
            <p className="text-[rgba(193,194,196,1)]">
              Sudah punya akun?{" "}
              <NavLink
                to="/login"
                className="text-[rgba(255,255,255,1)] font-medium md:text-[12px]"
              >
                Masuk
              </NavLink>
            </p>
          </div>
        </div>

        <ButtonForm name="Daftar" />
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
