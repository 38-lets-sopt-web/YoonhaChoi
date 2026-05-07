import InputField from "@shared/ui/input-field/input-field";
import Button from "@shared/ui/button/button";

const Mypage = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-112px)] items-center justify-center">
      <div className="mx-auto w-full max-w-lg">
        <p className="mb-6 text-2xl font-bold text-center"> 내 정보</p>

        <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-gray-50 p-6">
          <div className="flex justify-between">
            <span className="font-bold text-slate-800">아이디</span>
            <span className="text-gray-400">아이디</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-slate-800">파트</span>
            <span className="text-gray-400">dmpq</span>
          </div>
        </div>

        <form onSubmit={() => {}}>
          <InputField
            label="이름"
            placeHolder="이름을 입력해 주세요"
            value=""
            onChange={() => {}}
          />

          <InputField
            label="이메일"
            placeHolder="이메일을 입력해 주세요"
            value=""
            onChange={() => {}}
          />

          <InputField
            label="나이"
            placeHolder="나이를 입력해 주세요"
            value=""
            onChange={() => {}}
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
