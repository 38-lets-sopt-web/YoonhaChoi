const IMAGE_PATHS = {
  otter: "/otter.webp",
  villain: "/otter-villain.webp",
  hit: "/otter-hit.webp",
};

const Card = ({ type = "hidden", onClick }) => {
  const isShow = type !== "hidden";

  return (
    <button
      className="bg-yellow-300 rounded-full w-full aspect-square cursor-pointer"
      onClick={onClick}
    >
      {isShow && <img src={IMAGE_PATHS[type]} />}
    </button>
  );
};

export default Card;
