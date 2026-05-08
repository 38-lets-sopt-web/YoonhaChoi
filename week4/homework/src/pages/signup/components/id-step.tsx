import Button from "@shared/ui/button";
import InputField from "@shared/ui/input-field";

interface IdStepProps {
  loginId: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

const IdStep = ({ loginId, onChange, onNext }: IdStepProps) => {
  const isOverLimit = loginId.length > 20;
  const isButtonDisabled = !loginId || isOverLimit;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isButtonDisabled) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <InputField
        label="아이디"
        placeHolder="아이디를 입력해주세요"
        value={loginId}
        onChange={(e) => onChange(e.target.value)}
        errorMessage={
          isOverLimit ? "아이디는 20자를 초과할 수 없습니다." : undefined
        }
      />

      <Button text="다음" type="submit" disabled={isButtonDisabled} />
    </form>
  );
};

export default IdStep;
