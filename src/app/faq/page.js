"use client";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";

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

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-y-8 items-center justify-center w-full min-h-screen bg-gradient-radial from-white to-indigo-500">
      <div className="text-[70px] font-semibold">FAQ</div>
      <div className="flex flex-col 2xl:w-[60%] w-[90%] gap-y-5">
        {faqs.map((qu, index) => (
          <QuizBox
            key={index}
            quiz={qu.question}
            answer={qu.answer}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
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
