import MemberCard from "@shared/ui/member-card";
import { api } from "@shared/apis/instance";
import { useEffect, useState } from "react";

interface UserData {
  id: number;
  name: string;
  part: string;
}

const MyPage = () => {
  const [userList, setUserList] = useState<UserData[]>([]);

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
    <>
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
    </>
  );
};

export default MyPage;
