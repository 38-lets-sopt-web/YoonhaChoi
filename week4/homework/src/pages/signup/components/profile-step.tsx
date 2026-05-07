import Button from "@shared/ui/button/button";
import InputField from "@shared/ui/input-field/input-field";
import React from "react";

interface ProfileStepProps {
  name: string;
  email: string;
  age: string;
  part: string;
  updateData: (key: string, value: string) => void;
  onSubmit: () => void;
}

const ProfileStep = ({
  name,
  email,
  age,
  part,
  updateData,
  onSubmit,
}: ProfileStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && age && part) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="이름"
        placeHolder="이름을 입력해 주세요"
        value={name}
        onChange={(e) => updateData("name", e.target.value)}
      />

      <InputField
        label="이메일"
        placeHolder="이메일을 입력해 주세요"
        value={email}
        onChange={(e) => updateData("email", e.target.value)}
      />

      <InputField
        label="나이"
        placeHolder="나이를 입력해 주세요"
        value={age}
        onChange={(e) => updateData("age", e.target.value)}
      />

      <div className="flex flex-col gap-3">
        <label>파트</label>
        <select
          value={part}
          onChange={(e) => updateData("part", e.target.value)}
          className="w-full p-3 mb-5 border border-gray-400 rounded-lg focus:outline-none focus:ring-sky-500"
        >
          <option value="web">웹</option>
          <option value="server">IOS</option>
          <option value="design">안드로이드</option>
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
