import React, { FC, useState } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import { useMutation, useQueryClient } from "react-query";
import { logInAPI } from "../apis/user";
import User from "../interface/user";
import { AxiosError } from "axios";
import { useRouter } from "next/router";

import AppLayout from "@/components/layout/AppLayout";
import Spacer from "@/components/customUI/Spacer";
import useInput from "@/hooks/useInput";
import { userState } from "../recoil/index";
import { useSetRecoilState } from "recoil";

const componentCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
`;
const Login: FC = () => {
  const [userEmail, onChangeUserEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();
  const userSetter = useSetRecoilState(userState);

  const mutation = useMutation<
    User,
    AxiosError,
    { email: string; password: string }
  >("user", logInAPI, {
    onMutate: () => {
      // mutation이 시작되기 전에 실행되는 함수
      setLoading(true);
    },
    onError: (error) => {
      // mutation이 실패했을 때 실행되는 함수
      alert(error.response?.data);
    },
    onSuccess: (user) => {
      // mutation이 성공했을 때 실행되는 함수
      queryClient.setQueryData("user", user);
      userSetter((prev) => ({ ...prev, me: user }));
      alert("로그인 성공");
      router.push("/");
    },
    onSettled: () => {
      // mutation이 성공하거나 실패했을 때 실행되는 함수
      setLoading(false);
    },
  });

  const onClickHandler = () => {
    mutation.mutate({ email: userEmail, password });
  };

  if (loading) {
    return <p>로그인 중입니다....</p>;
  }

  return (
    <AppLayout>
      <div css={componentCss}>
        <p className="text-2xl text-center">Login Page</p>
        <Spacer size={20} />
        <div className="container w-full max-w-md px-5">
          <input
            type="text"
            placeholder="Type your email"
            className="input input-bordered w-full"
            value={userEmail}
            onChange={onChangeUserEmail}
          />
          <Spacer />
          <input
            type="password"
            placeholder="Type your password"
            className="input input-bordered w-full"
            value={password}
            onChange={onChangePassword}
          />
          <Spacer />
          <button className="btn btn-primary w-full" onClick={onClickHandler}>
            Login
          </button>
        </div>
        <Spacer />
        <p className="text-md text-center">
          Don't have an account?{" "}
          <Link href="/signup">
            <a className="link link-hover text-blue-600/100">Signup here!</a>
          </Link>
        </p>
      </div>
    </AppLayout>
  );
};

export default Login;
