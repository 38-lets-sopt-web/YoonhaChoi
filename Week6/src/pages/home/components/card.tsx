interface CardProps {
  title: string;
  posterUrl: string;
  date: string;
  description: string;
}

function Card({ title, posterUrl, date, description }: CardProps) {
  return (
    <div className="cursor-pointer rounded-xl overflow-hidden bg-white min-w-[23rem]">
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
    </div>
  );
}

export default Card;
