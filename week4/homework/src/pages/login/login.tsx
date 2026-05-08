import { useState } from "react";
import InputField from "@shared/ui/input-field/input-field";
import { Link, useNavigate } from "react-router";
import Button from "@shared/ui/button/button";
import Character from "@shared/ui/character/character";
import { api } from "@shared/apis/instance";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = id.trim().length > 0 && password.trim().length > 0;

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/signin", {
        loginId: id,
        password: password,
      });

      const userId = response.data.data.userId;

      if (userId) {
        localStorage.setItem("userId", userId);
      }

      alert("로그인에 성공했습니다!");
      navigate("/mypage");
    } catch {
      alert("로그인 비밀번호를 확인해주세요");
    }
  };

  return (
    <div className="flex min-h-screen items-center">
      <form onSubmit={handleSubmit} className="mx-auto w-full max-w-lg">
        <Character />

        <h1 className="mb-6 text-2xl font-bold text-center">SOPT MEMBERS</h1>

        <InputField
          label="아이디"
          placeHolder="아이디를 입력해주세요"
          value={id}
          onChange={handleIdChange}
        />

        <InputField
          label="비밀번호"
          placeHolder="비밀번호를 입력해주세요"
          value={password}
          onChange={handlePasswordChange}
          secret
        />

        <Button text="로그인" type="submit" disabled={!isFormValid} />

        <Link
          to="/signup"
          className="block mt-1 text-center text-sky-500 hover:text-sky-600"
        >
          회원가입
        </Link>
      </form>
    </div>
  );
};

export default Login;
