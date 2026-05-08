import { useState } from "react";
import IdStep from "./components/id-step";
import PasswordStep from "./components/password-step";
import ProfileStep from "./components/profile-step";
import { Link, useNavigate } from "react-router";
import { api } from "@shared/apis/instance";

type Step = "ID" | "PASSWORD" | "PERSONAL_INFO";

interface SignupFormData {
  loginId: string;
  password: string;
  name: string;
  email: string;
  age: string;
  part: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>("ID");
  const [formData, setFormData] = useState<SignupFormData>({
    loginId: "",
    password: "",
    name: "",
    email: "",
    age: "",
    part: "",
  });

  const handleUpdateData = (key: keyof SignupFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      await api.post("/auth/signup", {
        loginId: formData.loginId,
        password: formData.password,
        name: formData.name,
        email: formData.email,
        age: Number(formData.age),
        part: formData.part,
      });
      navigate("/login");
      alert("회원가입 성공했습니다!");
    } catch {
      alert("회원가입 실패했습니다.");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case "ID":
        return (
          <IdStep
            loginId={formData.loginId}
            onChange={(value) => handleUpdateData("loginId", value)}
            onNext={() => setCurrentStep("PASSWORD")}
          />
        );
      case "PASSWORD":
        return (
          <PasswordStep
            password={formData.password}
            onChange={(value) => handleUpdateData("password", value)}
            onNext={() => setCurrentStep("PERSONAL_INFO")}
          />
        );
      case "PERSONAL_INFO":
        return (
          <ProfileStep
            name={formData.name}
            email={formData.email}
            age={formData.age}
            part={formData.part}
            onChange={handleUpdateData}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">회원가입</h1>
        {renderStep()}
        <div className="mt-3 text-center">
          이미 계정이 있나요?
          <Link to="/login" className="text-sky-500 hover:text-sky-600">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
