import React, { FC, FormEventHandler, useState } from "react";

interface Props {}

const Form: FC<Props> = ({}) => {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("en");

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (text !== "") {
      var msg = new SpeechSynthesisUtterance();
      msg.text = text;
      msg.lang = lang;
      window.speechSynthesis.speak(msg);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col mx-4 mt-[18px]">
        <select
          name="langs"
          onChange={(e) => setLang(e.target.value)}
          value={lang}
          className="outline-none mt-3 px-2 py-3 w-full text-[24px] rounded-xl bg-green-100 border-[2px] border-green-500 hover:border-green-700  transition-all self-center"
        >
          <option value="de">Deutsch</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="hi">हिंदी</option>
        </select>
        <textarea
          className="mt-3 transition p-2 text-[24px] border-[2px] border-green-500 focus:border-green-700 outline-none rounded-xl w-full h-[42vh]"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
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
