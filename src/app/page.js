'use client'

// import Image from "next/image";
import AddItem from "../components/AddItem"
import ListItems from "../components/ListItems";

export default function Home() {
  return (
    <div className="bg-white h-screen w-screen text-black flex flex-col justify-center items-center">
      <h1>Todo List App</h1>
      <small>Made with NextJS, Firebase and Firestore</small>
      <AddItem />
      <ListItems />
    </div>
  );
}
