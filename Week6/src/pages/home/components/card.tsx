import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  title: string;
  posterUrl: string;
  date: string;
  description: string;
}

const Card = ({ id, title, posterUrl, date, description }: CardProps) => {
  return (
    <Link
      to={`/movie/${id}`}
      className="cursor-pointer rounded-xl overflow-hidden bg-white min-w-[23rem] transition-transform duration-200 hover:scale-101"
    >
      <img
        src={posterUrl}
        alt={`${title} 이미지`}
        className="w-full aspect-[2/3] object-cover"
      />
      <div className="p-5">
        <h3 className="label">{title}</h3>
        <p className="caption-disabled mt-1">{date}</p>
        <p className="caption mt-1 line-clamp-4">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
