"use client";
import { IoIosArrowDown } from "react-icons/io";
import React, { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";

//all the click handlesr should issolated to seperate client components
//but in here i place all the components and others in same file
//just because of the assignment asked to do i single js file

//data set
const faqs = [
  {
    question: "What is Next.js?",
    answer: "Next.js is a React framework for building web applications.",
  },
  {
    question: "How does Tailwind CSS work?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
  },
  {
    question: "What is the purpose of getStaticProps?",
    answer: "getStaticProps is used to fetch data at build time in Next.js.",
  },
];

//main component

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const [inputValue, setInputValue] = useState("");

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const HandleToggleAll = () => {};

  const inputRef = useRef(null);

  const filterdArray = faqs.filter((q) => q.question.startsWith(inputValue));
  console.log(filterdArray);

  const selectedArray = inputValue == "" ? faqs : filterdArray;

  return (
    <div className="flex relative flex-col gap-y-8 items-center justify-center w-full min-h-screen bg-gradient-radial from-white to-indigo-500">
      <div className="flex  top-[10%] 2xl:right-[30%] right-[5%] 2xl:left-[30%] left-[5%] absolute md:px-5 px-3 2xl:py-2 py-1 bg-white rounded-md shadow-xl">
        <input
          type="text"
          className="flex-1 outline-none md:text-[18px] text-[14px] text-indigo-500 font-semibold placeholder:md:text-[18px] placeholder:text-[14px] placeholder:font-normal placeholder:text-indigo-500"
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
          placeholder="Search Your Problem"
        />
        <IoIosSearch
          className="text-indigo-500 2xl:size-[30px] size-[25px]"
          onClick={() => inputRef.current.focus()}
        />
      </div>

      <div className="text-[70px] font-semibold">FAQ</div>

      <div className="flex flex-col 2xl:w-[60%] w-[90%] gap-y-5">
        {selectedArray.map((qu, index) => (
          <QuizBox
            key={index}
            quiz={qu.question}
            answer={qu.answer}
            isExpanded={expandedIndex == index}
            onToggle={() => handleToggle(index)}
          />
        ))}
        {selectedArray.length < 1 && (
          <div className="md:text-[18px] text-[14px]   py-2 text-center">
            Sorry, no matches found. Please try a different search term.
          </div>
        )}
      </div>
      <div
        className="absolute bottom-[10%] right-[10%]"
        onClick={HandleToggleAll}
      >
        all
      </div>
    </div>
  );
};

export default Faq;

// QuizBox Component
const QuizBox = ({ quiz, answer, isExpanded, onToggle }) => {
  return (
    <div className="flex flex-col w-full shadow-md">
      <div
        className={`${
          isExpanded ? "rounded-t-md" : "rounded-md"
        } md:px-5 px-3 py-2 flex justify-between items-center bg-white`}
        onClick={onToggle}
      >
        <div className="font-semibold md:text-[18px] text-[14px]">{quiz}</div>
        <IoIosArrowDown
          className={`${
            isExpanded ? "rotate-180" : "rotate-0"
          } duration-500 transition-all w-[20px]`}
        />
      </div>
      <div
        className={`${
          isExpanded
            ? "h-auto opacity-100 py-2 border-t-2 border-indigo-300"
            : "h-0 opacity-0"
        } w-full bg-white text-gray-700 font-light transition-all duration-500 rounded-b-md px-5 overflow-hidden md:text-[16px] text-[12px]`}
      >
        {answer}
      </div>
    </div>
  );
};
