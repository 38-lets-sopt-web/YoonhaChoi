import { useState } from "react";
import IdStep from "./components/id-step";
import PasswordStep from "./components/password-step";
import ProfileStep from "./components/profile-step";
import { Link } from "react-router";

type Step = "ID" | "PASSWORD" | "PERSONAL_INFO";

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState<Step>("ID");
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    checkPassword: "",
    name: "",
    email: "",
    age: "",
    part: "",
  });

  const handleUpdateData = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    console.log("서버 제출", formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case "ID":
        return (
          <IdStep
            id={formData.id}
            updateData={handleUpdateData}
            onNext={() => setCurrentStep("PASSWORD")}
          />
        );
      case "PASSWORD":
        return (
          <PasswordStep
            password={formData.password}
            checkPassword={formData.checkPassword}
            updateData={handleUpdateData}
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
            updateData={handleUpdateData}
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
}
