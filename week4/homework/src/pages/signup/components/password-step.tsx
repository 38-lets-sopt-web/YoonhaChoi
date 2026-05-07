import Button from "@shared/ui/button/button";
import InputField from "@shared/ui/input-field/input-field";

interface PasswordStepProps {
  password: string;
  checkPassword: string;
  updateData: (key: string, value: string) => void;
  onNext: () => void;
}

const PasswordStep = ({
  password,
  checkPassword,
  updateData,
  onNext,
}: PasswordStepProps) => {
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateData("password", e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="비밀번호"
        placeHolder="비밀번호를 입력해 주세요"
        value={password}
        onChange={handlePasswordChange}
        secret
      />

      <InputField
        label="비밀번호 확인"
        placeHolder="비밀번호를 다시 입력해 주세요"
        value={checkPassword}
        onChange={handlePasswordChange}
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
