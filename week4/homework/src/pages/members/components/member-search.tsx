import { useState } from "react";
import { api } from "@shared/apis/instance";
import InputField from "@shared/ui/input-field/input-field";
import Button from "@shared/ui/button/button";

interface MemberDetailData {
  loginId: string;
  name: string;
  email: string;
  age: number;
  part: string;
}

const MEMBER_FIELDS: { label: string; key: keyof MemberDetailData }[] = [
  { label: "아이디", key: "loginId" },
  { label: "이름", key: "name" },
  { label: "이메일", key: "email" },
  { label: "나이", key: "age" },
  { label: "파트", key: "part" },
];

const MemberSearch = () => {
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState<MemberDetailData | null>(
    null,
  );
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!searchId.trim()) return;

    try {
      const res = await api.get(`/users/${searchId}`);
      setSearchResult(res.data.data);
    } catch {
      setSearchResult(null);
    } finally {
      setHasSearched(true);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      <h2 className="text-3xl font-bold text-center mb-10">회원 조회</h2>

      <div>
        <InputField
          label="회원 ID"
          placeHolder="ID를 입력하세요"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </div>

      <Button text="검색" onClick={handleSearch} />

      <div className="flex flex-col gap-4 mt-5">
        <h3 className="text-xl font-bold">검색 결과</h3>

        <div className="border border-gray-200 rounded-xl bg-white flex px-10 py-8">
          {searchResult ? (
            <div className="flex flex-col gap-4 w-full">
              {MEMBER_FIELDS.map(({ label, key }) => (
                <div key={label} className="flex justify-between">
                  <span className="font-bold text-lg">{label}</span>
                  <span className="text-gray-400">{searchResult[key]}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-lg">
              {hasSearched
                ? "해당 ID의 회원을 찾을 수 없습니다. 🔍"
                : "찾으시는 ID를 검색해 보세요! 🔍"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberSearch;
