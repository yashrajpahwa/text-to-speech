import React, { FC, FormEventHandler } from "react";

interface Props {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
}
const Form: FC<Props> = ({ onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col mx-4 mt-[18px]">
        <textarea className="transition p-2 text-[24px] border-[2px] border-green-500 focus:border-green-700 outline-none rounded-xl w-full h-[42vh]" />
        <button
          type="submit"
          className="px-10 mt-3 py-3 w-full text-2xl rounded-xl bg-green-500 hover:bg-green-600 hover:text-gray-100 transition-all self-center"
        >
          Start Speaking
        </button>
      </form>
    </>
  );
};

export default Form;
