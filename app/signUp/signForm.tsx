"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

function SignForm(props: Props) {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const register = () => {
    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
    };
    axios
      .post("/api/register", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        router.push("/signIn");
      });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="p-10 rounded-lg shadow-lg flex flex-col">
        <h1 className="text-xl font-medium mb-4">회원가입</h1>
        <label htmlFor="" className="mb-2">
          이름
        </label>
        <input
          type="text"
          className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none 
        focus:border-gray-600 text-black"
          id="name"
          value={user.name}
          placeholder="이름을 입력해주세요"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label htmlFor="" className="mb-2">
          이메일
        </label>
        <input
          type="text"
          className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none 
        focus:border-gray-600 text-black"
          id="email"
          value={user.email}
          placeholder="이메일을 입력해주세요"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="" className="mb-2">
          비밀번호
        </label>
        <input
          type="text"
          className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none 
        focus:border-gray-600 text-black"
          id="name"
          value={user.password}
          placeholder="비밀번호를 입력해주세요"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          className="p-2 border bg-purple-600 text-white border-gray-300 mt-2 focus:outline-none 
        focus:border-gray-600"
          onClick={register}
        >
          회원가입
        </button>
        <Link
          href="/signin"
          className="text-sm text-center mt-5 text-neutral-600"
        >
          아이디가 있으신가요?
        </Link>
        <Link href="/" className="text-center mt-2">
          Home
        </Link>
      </div>
    </div>
  );
}

export default SignForm;
