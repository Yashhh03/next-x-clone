"use client";

import { useSession } from "next-auth/react";
import { HiDotsHorizontal } from "react-icons/hi";

export default function UserSideProfile() {
  const { data: session } = useSession();

  return (
    <div>
      {session && (
        <div className="text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200">
          <img
            src={session.user.image}
            alt="user-image"
            className="h-10 w-10 rounded-full xl:mr-2"
          />
          <div className="hidden xl:inline">
            <h4 className="font-bold ">{session.user.name}</h4>
            <p className="text-gray-500">@{session.user.username}</p>
          </div>
          <HiDotsHorizontal className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
      )}
    </div>
  );
}
