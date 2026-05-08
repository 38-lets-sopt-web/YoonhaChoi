import MemberCard from "@shared/ui/member-card";
import { api } from "@shared/apis/instance";
import { useEffect, useState } from "react";
import MemberSearch from "./components/member-search";

interface MemberData {
  id: number;
  name: string;
  part: string;
}

const Members = () => {
  const [userList, setUserList] = useState<MemberData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/users");
        setUserList(res.data.data.users);
      } catch (error) {
        console.error("유저 리스트를 불러오는 데 실패했습니다.", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-10">
      <MemberSearch />

      <p className="text-xl font-bold mb-4">전체 멤버 리스트</p>
      <div className="flex flex-wrap gap-4">
        {userList.map((user) => (
          <MemberCard
            key={user.id}
            id={user.id}
            name={user.name}
            part={user.part}
          />
        ))}
      </div>
    </div>
  );
};

export default Members;
