const LEVEL_OPTIONS = [
  { label: "Level 1", value: 1 },
  { label: "Level 2", value: 2 },
  { label: "Level 3", value: 3 },
];

const LevelDropdown = ({ level, onLevelChange }) => {
  const handleChange = (e) => {
    onLevelChange(Number(e.target.value));
  };

  return (
    <select
      className="flex rounded-xl bg-green-50 px-4 py-2 cursor-pointer"
      value={level}
      onChange={handleChange}
    >
      {LEVEL_OPTIONS.map(({ label, value: optionValue }) => (
        <option key={optionValue} value={optionValue}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default LevelDropdown;
