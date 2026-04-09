import { useState } from "react";
import Input from "../atoms/Input";
import HeaderForm from "../molecules/HeaderForm";
import ButtonForm from "../molecules/ButtonForm";
import { NavLink, useNavigate } from "react-router"; // penting saat mau ngelink pake navlink

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const savedUser = JSON.parse(localStorage.getItem("user_data"));

    if (
      savedUser?.username === formData.username &&
      savedUser?.password === formData.password
    ) {
      alert("Hallo," + savedUser.username + " Login Anda berhasil!");
      localStorage.setItem("isAuthenticated", "true");
      navigate("/home");
    } else {
      setError("Username atau password salah");
    }
  };

  return (
    <div className="flex flex-col items-center mx-auto bg-[rgba(24,26,28,0.84)] max-w-[306px] md:max-w-[529px] w-full rounded-lg p-6 text-white">
      <HeaderForm name="Masuk" />
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

          <div className="flex justify-between text-[10px] font-normal leading-[140%] tracking-[0.2px] md:text-[12px]">
            <p className="text-[rgba(193,194,196,1)]">
              Belum punya akun?{" "}
              <NavLink
                to="/register"
                className="text-[rgba(255,255,255,1)] font-medium md:text-[12px]"
              >
                Daftar
              </NavLink>
            </p>

            <NavLink to="/register">Lupa kata sandi?</NavLink>
          </div>
        </div>

        <ButtonForm name="Masuk" />
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
