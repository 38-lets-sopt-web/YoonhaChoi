import { useNavigate } from "react-router";

const MemberCard = ({ user }) => {
  const navigate = useNavigate();

  const { id, name, part } = user;

  const handleClick = () => {
    navigate(`/member/${id}`);
  };
  return (
    <div
      style={{
        display: "block",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textDecoration: "none",
        color: "#333",
        width: "150px",
        textAlign: "center",
      }}
      onClick={handleClick}
    >
      <h3 style={{ margin: "0 0 0.5rem 0" }}>{name}</h3>
      <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>{part}</p>
    </div>
  );
};

export default MemberCard;
