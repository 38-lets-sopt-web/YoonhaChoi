import Button from "@shared/ui/button/button";
import InputField from "@shared/ui/input-field/input-field";

interface IdStepProps {
  id: string;
  updateData: (key: string, value: string) => void;
  onNext: () => void;
}

const IdStep = ({ id, updateData, onNext }: IdStepProps) => {
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateData("id", e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="아이디"
        placeHolder="아이디를 입력해주세요"
        value={id}
        onChange={handleIdChange}
      />
      <Button text="다음" type="submit" disabled={!id} />
    </form>
  );
};

export default IdStep;
