import Button from "./button";

const Header = ({ activeTab = "game" }) => {
  return (
    <header className="flex items-center p-4 bg-yellow-100 rounded-xl gap-3 mb-8">
      <h1 className="text-xl font-bold">수달 게임</h1>
      <nav className="flex gap-1.5">
        <Button
          variant={activeTab === "game" ? "tabActive" : "tabInactive"}
          onClick={() => {}}
        >
          게임
        </Button>
        <Button
          variant={activeTab === "ranking" ? "tabActive" : "tabInactive"}
          onClick={() => {}}
        >
          랭킹
        </Button>
      </nav>
    </header>
  );
};
export default Header;
