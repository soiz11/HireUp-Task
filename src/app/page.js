import Link from "next/link";

export default function Home() {
  return (
    <div className="flex relative flex-col gap-y-8 items-center justify-center w-full min-h-screen bg-gradient-radial from-white to-indigo-500">
      <Link
        href="/faq"
        className="px-5 py-2 bg-indigo-500 text-white 2xl:text-[18px] text-[14px] rounded-md shadow-lg"
      >
        To FAQ Page
      </Link>
    </div>
  );
}
