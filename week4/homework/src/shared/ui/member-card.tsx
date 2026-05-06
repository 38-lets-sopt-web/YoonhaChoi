interface CardProps {
  name: string;
  part: string;
  onClick?: () => void;
}

const MemberCard = ({ name, part, onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center h-25 w-50 bg-white rounded-2xl cursor-pointer "
    >
      <p className="mb-3 text-lg font-bold">{name}</p>

      <p className="px-4 py-1 text-sm bg-gray-100 rounded-full">{part}</p>
    </div>
  );
};

export default MemberCard;
