import Button from "@shared/ui/button/button";
import InputField from "@shared/ui/input-field/input-field";

interface ProfileStepProps {
  name: string;
  email: string;
  age: string;
  part: string;
  onChange: (field: "name" | "email" | "age" | "part", value: string) => void;
  onSubmit: () => void;
}

const PART_OPTIONS = [
  { label: "웹", value: "웹" },
  { label: "iOS", value: "iOS" },
  { label: "안드로이드", value: "안드로이드" },
];

const ProfileStep = ({
  name,
  email,
  age,
  part,
  onChange,
  onSubmit,
}: ProfileStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && age && part) onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <InputField
        label="이름"
        placeHolder="이름을 입력해 주세요"
        value={name}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <InputField
        label="이메일"
        placeHolder="이메일을 입력해 주세요"
        value={email}
        onChange={(e) => onChange("email", e.target.value)}
      />
      <InputField
        label="나이"
        placeHolder="나이를 입력해 주세요"
        value={age}
        onChange={(e) => onChange("age", e.target.value)}
      />
      <div className="flex flex-col gap-3">
        <label>파트</label>
        <select
          value={part}
          onChange={(e) => onChange("part", e.target.value)}
          className="w-full p-3 mb-5 border border-gray-400 rounded-lg focus:outline-none focus:ring-sky-500"
        >
          <option value="" disabled>
            파트를 선택해 주세요
          </option>
          {PART_OPTIONS.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <Button
        text="회원가입"
        type="submit"
        disabled={!name || !email || !age || !part}
      />
    </form>
  );
};

export default ProfileStep;
