"use client"

import Header from "./components/Header";
import Main from "./components/Main";
import PreBlog from "./components/PreBlog";

export default function Home() {
  return (
    <div className="flex items-center justify-between flex-col w-full">
      <Header />
      <PreBlog />
      <Main />
    </div>
  );
}
