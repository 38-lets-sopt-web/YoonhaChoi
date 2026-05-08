import Button from "@shared/ui/button/button";
import InputField from "@shared/ui/input-field/input-field";
import { useState } from "react";

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,20}$/;

interface PasswordStepProps {
  password: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

const PasswordStep = ({ password, onChange, onNext }: PasswordStepProps) => {
  const [checkPassword, setCheckPassword] = useState("");

  const isValidPolicy = PASSWORD_REGEX.test(password);
  const isMismatch = password !== checkPassword;

  const passwordError =
    password && !isValidPolicy
      ? "영문, 숫자, 특수문자를 포함하여 8~20자로 입력해 주세요."
      : undefined;

  const checkPasswordError =
    checkPassword && isMismatch ? "비밀번호가 일치하지 않습니다." : undefined;

  const isButtonDisabled =
    !password || !checkPassword || !isValidPolicy || isMismatch;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isButtonDisabled) return;
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <InputField
        label="비밀번호"
        placeHolder="비밀번호를 입력해 주세요"
        value={password}
        onChange={(e) => onChange(e.target.value)}
        secret
        errorMessage={passwordError}
      />

      <InputField
        label="비밀번호 확인"
        placeHolder="비밀번호를 다시 입력해 주세요"
        value={checkPassword}
        onChange={(e) => setCheckPassword(e.target.value)}
        secret
        errorMessage={checkPasswordError}
      />

      <Button text="다음" type="submit" disabled={isButtonDisabled} />
    </form>
  );
};

export default PasswordStep;
