interface MovieInfoProps {
  originalTitle: string;
  originalLanguage: string;
  productionCountries: string;
  spokenLanguages: string;
  budget: string;
  revenue: string;
}

const MovieInfo = ({
  originalTitle,
  originalLanguage,
  productionCountries,
  spokenLanguages,
  budget,
  revenue,
}: MovieInfoProps) => {
  const rows = [
    { label: "원제", value: originalTitle },
    { label: "언어", value: originalLanguage },
    { label: "제작 국가", value: productionCountries },
    { label: "사용 언어", value: spokenLanguages },
    { label: "예산", value: budget },
    { label: "수익", value: revenue },
  ];

  return (
    <div className="bg-white rounded-xl p-6 flex-1">
      <h2 className="label mb-4">기본 정보</h2>
      <div className="flex flex-col divide-y divide-gray-100">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex gap-6 py-3">
            <span className="caption-disabled w-20">{label}</span>
            <span className="caption">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieInfo;
