import Button from "@shared/ui/button/button";
import InputField from "@shared/ui/input-field/input-field";

interface IdStepProps {
  loginId: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

const IdStep = ({ loginId, onChange, onNext }: IdStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginId) onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="아이디"
        placeHolder="아이디를 입력해주세요"
        value={loginId}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button text="다음" type="submit" disabled={!loginId} />
    </form>
  );
};

export default IdStep;
