import Button from "./button";

const Header = ({ mode, onTabChange }) => {
  return (
    <header className="flex items-center p-4 bg-yellow-100 rounded-xl gap-3">
      <h1 className="text-xl font-bold">수달 게임</h1>
      <nav className="flex gap-1.5">
        <Button
          variant={mode === "game" ? "tabActive" : "tabInactive"}
          onClick={() => onTabChange("game")}
        >
          게임
        </Button>
        <Button
          variant={mode === "ranking" ? "tabActive" : "tabInactive"}
          onClick={() => onTabChange("ranking")}
        >
          랭킹
        </Button>
      </nav>
    </header>
  );
};
export default Header;
