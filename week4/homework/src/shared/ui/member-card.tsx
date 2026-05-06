import { useNavigate } from "react-router";

interface CardProps {
  id: number;
  name: string;
  part: string;
}

const MemberCard = ({ id, name, part }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/mypage/members/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center justify-center h-25 w-50 bg-white rounded-2xl cursor-pointer "
    >
      <p className="mb-3 text-lg font-bold">{name}</p>

      <p className="px-4 py-1 text-sm bg-gray-100 rounded-full">{part}</p>
    </div>
  );
};

export default MemberCard;
