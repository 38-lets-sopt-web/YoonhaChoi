import Button from "@shared/ui/button/button";
import InputField from "@shared/ui/input-field/input-field";
import { useState } from "react";

interface PasswordStepProps {
  password: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

const PasswordStep = ({ password, onChange, onNext }: PasswordStepProps) => {
  const [checkPassword, setCheckPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== checkPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (password && checkPassword) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <InputField
        label="비밀번호"
        placeHolder="비밀번호를 입력해 주세요"
        value={password}
        onChange={(e) => onChange(e.target.value)}
        secret
      />
      <InputField
        label="비밀번호 확인"
        placeHolder="비밀번호를 다시 입력해 주세요"
        value={checkPassword}
        onChange={(e) => setCheckPassword(e.target.value)}
        secret
      />
      <Button
        text="다음"
        type="submit"
        disabled={!password || !checkPassword}
      />
    </form>
  );
};

export default PasswordStep;
