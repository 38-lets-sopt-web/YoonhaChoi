import Button from "@shared/ui/button";
import InputField from "@shared/ui/input-field";
import { useCallback } from "react";

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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NUMBER_REGEX = /^\d+$/;

const ProfileStep = ({
  name,
  email,
  age,
  part,
  onChange,
  onSubmit,
}: ProfileStepProps) => {
  const isNameInvalid = name.length >= 10;
  const isEmailInvalid = email.length > 0 && !EMAIL_REGEX.test(email);
  const isAgeInvalid = age.length > 0 && !NUMBER_REGEX.test(age);

  const nameError =
    name && isNameInvalid ? "이름은 10자 미만으로 입력해 주세요." : undefined;

  const emailError =
    email && isEmailInvalid
      ? "올바른 이메일 형식으로 입력해 주세요."
      : undefined;

  const ageError =
    age && isAgeInvalid ? "숫자만 입력할 수 있습니다." : undefined;

  const isButtonDisabled =
    !name ||
    !email ||
    !age ||
    !part ||
    isNameInvalid ||
    isEmailInvalid ||
    isAgeInvalid;

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!isButtonDisabled) {
        onSubmit();
      }
    },
    [isButtonDisabled, onSubmit],
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <InputField
        label="이름"
        placeHolder="이름을 입력해 주세요"
        value={name}
        onChange={(e) => onChange("name", e.target.value)}
        errorMessage={nameError}
      />
      <InputField
        label="이메일"
        placeHolder="이메일을 입력해 주세요"
        value={email}
        onChange={(e) => onChange("email", e.target.value)}
        errorMessage={emailError}
      />
      <InputField
        label="나이"
        placeHolder="나이를 입력해 주세요"
        value={age}
        onChange={(e) => onChange("age", e.target.value)}
        errorMessage={ageError}
      />

      <div className="flex flex-col gap-3">
        <label>파트</label>
        <select
          value={part}
          onChange={(e) => onChange("part", e.target.value)}
          className="w-full p-3 mb-5 border border-gray-400 rounded-lg focus:outline-none focus:ring-sky-500"
        >
          {PART_OPTIONS.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <Button text="회원가입" type="submit" disabled={isButtonDisabled} />
    </form>
  );
};

export default ProfileStep;
