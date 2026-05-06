import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { api } from "@shared/apis/instance";

interface MembersProps {
  name: string;
  loginId: string;
  email: string;
  age: number;
  part: string;
}

const Members = () => {
  const { id } = useParams();
  const [user, setUser] = useState<MembersProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/users/${id}`);
        setUser(res.data.data);
      } catch (error) {
        console.error("유저 상세 정보를 불러오는 데 실패했습니다.", error);
      }
    };

    fetchData();
  }, [id]);

  if (!user) return <p>로딩 중...</p>;

  return (
    <div className="flex flex-col h-[calc(100vh-112px)] items-center justify-center">
      <h2 className="text-2xl font-bold text-blue-950 mb-5">회원정보</h2>

      <Link
        to="/mypage"
        className="text-gray-500 font-bold flex items-center hover:opacity-80"
      >
        ← 뒤로가기
      </Link>

      <div className="bg-white p-10 rounded-2xl shadow-lg w-sm flex flex-col gap-3">
        <p>
          <strong>이름: </strong> {user.name}
        </p>
        <p>
          <strong>아이디: </strong> {user.loginId}
        </p>
        <p>
          <strong>이메일: </strong> {user.email}
        </p>
        <p>
          <strong>나이: </strong> {user.age}세
        </p>
        <p>
          <strong>파트: </strong> {user.part}
        </p>
      </div>
    </div>
  );
};

export default Members;
