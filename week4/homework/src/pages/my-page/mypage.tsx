import { useEffect, useState } from "react";
import InputField from "@shared/ui/input-field/input-field";
import Button from "@shared/ui/button/button";
import { api } from "@shared/apis/instance";

interface UserInfo {
  loginId: string;
  part: string;
  name: string;
  email: string;
  age: string;
}

const Mypage = () => {
  const myId = localStorage.getItem("userId");

  const [userInfo, setUserInfo] = useState<UserInfo>({
    loginId: "",
    part: "",
    name: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await api.get(`/users/${myId}`);

        const data = res.data.data;

        setUserInfo({
          loginId: data.loginId,
          part: data.part,
          name: data.name,
          email: data.email,
          age: String(data.age),
        });
      } catch (error) {
        console.error("정보 로딩 실패", error);
      }
    };

    fetchUserData();
  }, [myId]);

  const handleChange = (field: keyof UserInfo, value: string) => {
    setUserInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.patch(`/users/${myId}`, {
        name: userInfo.name,
        email: userInfo.email,
        age: userInfo.age,
      });

      alert("정보 수정되었습니다.");
    } catch {
      alert("정보 수정 실패했습니다.");
    }
  };

  return (
    <div className="flex flex-col w-full justify-center">
      <div className="mx-auto w-full max-w-lg">
        <p className="mb-6 text-2xl font-bold text-center">내 정보</p>

        <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-gray-50 p-6">
          <div className="flex justify-between">
            <span className="font-bold text-slate-800">아이디</span>
            <span className="text-gray-400">{userInfo.loginId}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-slate-800">파트</span>
            <span className="text-gray-400">{userInfo.part}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <InputField
            label="이름"
            placeHolder="이름을 입력해 주세요"
            value={userInfo.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <InputField
            label="이메일"
            placeHolder="이메일을 입력해 주세요"
            value={userInfo.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <InputField
            label="나이"
            placeHolder="나이를 입력해 주세요"
            value={userInfo.age}
            onChange={(e) => handleChange("age", e.target.value)}
          />

          <div className="mt-4">
            <Button text="정보 수정" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Mypage;
