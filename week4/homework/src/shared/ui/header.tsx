import { Outlet, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userId") ?? "";

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };

  const tabs = [
    { name: "내 정보", path: "/mypage" },
    { name: "회원 조회", path: "/members" },
  ];

  return (
    <>
      <header className="flex justify-between px-20 py-6 bg-blue-950 text-white">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">SOPT MEMBERS</h1>
          <p>안녕하세요. {userName}님!</p>
        </div>
        <nav className="flex gap-8">
          <ul className="flex items-center gap-8">
            {tabs.map((tab) => (
              <li key={tab.name}>
                <button
                  type="button"
                  className="hover:text-gray-300 transition-colors"
                  onClick={() => navigate(tab.path)}
                >
                  {tab.name}
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="hover:text-gray-300 transition-colors"
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
