import { createPortal } from "react-dom";

const Modal = ({ isOpen, level, score }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-10 w-80 text-center flex flex-col gap-4">
        <h2 className="text-xl font-bold text-slate-700">
          Level {level} 게임 종료!
        </h2>

        <p className="text-3xl font-extrabold text-yellow-300">
          최종 점수: {score}점
        </p>

        <p className="text-sm text-slate-400">잠시 후 게임이 리셋됩니다</p>
      </div>
    </div>,
    document.getElementById("modal"),
  );
};

export default Modal;
