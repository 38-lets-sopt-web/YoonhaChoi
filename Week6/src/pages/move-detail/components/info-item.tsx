interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem = ({ label, value }: InfoItemProps) => {
  return (
    <div className="flex flex-col gap-1 border border-gray-100 rounded-2xl p-4">
      <p className="caption-disabled">{label}</p>
      <p className="label">{value}</p>
    </div>
  );
}

export default InfoItem;
