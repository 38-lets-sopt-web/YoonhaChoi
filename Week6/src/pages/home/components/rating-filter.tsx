interface RatingFilterProps {
  rating?: number;
  onChange: (rating?: number) => void;
}

const RatingFilter = ({ rating, onChange }: RatingFilterProps) => (
  <div className="bg-white p-4 rounded-xl">
    <select
      className="rounded-lg border caption bg-white px-3 py-2"
      value={rating ?? ""}
      onChange={(e) => onChange(e.target.value ? Number(e.target.value) : undefined)}
    >
      <option value="">전체 별점</option>
      {[...Array(10).keys()].map((i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}점 대
        </option>
      ))}
    </select>
  </div>
);

export default RatingFilter;
