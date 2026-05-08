import { useState } from "react";

interface InputFieldProps {
  label: string;
  placeHolder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  secret?: boolean;
  errorMessage?: string;
}

const InputField = ({
  label,
  placeHolder,
  value,
  onChange,
  secret = false,
  errorMessage,
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShow = () => {
    setShowPassword((prev) => !prev);
  };

  const inputType = secret ? (showPassword ? "text" : "password") : "text";

  return (
    <label className="w-full">
      {label && <p>{label}</p>}

      <div className="relative">
        <input
          type={inputType}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          className={`w-full p-3 my-3 border rounded-lg focus:outline-none placeholder:text-gray-500 ${
            errorMessage
              ? "border-red-500"
              : "border-gray-400 focus:border-sky-500"
          } ${secret ? "pr-12" : ""}`}
        />

        {secret && (
          <button
            type="button"
            onClick={handleToggleShow}
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity"
            aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
          >
            {showPassword ? "🫣" : "😳"}
          </button>
        )}
      </div>

      {errorMessage && (
        <p className="mb-3 text-sm text-red-500">{errorMessage}</p>
      )}
    </label>
  );
};

export default InputField;
