import React, { FC, useState, useCallback, useEffect, SetStateAction} from "react";
import axios from "axios";
import {useQuery} from "react-query";
import { css } from "@emotion/react";
import Link from "next/link";

import AppLayout from "@/components/layout/AppLayout";
import Spacer from "@/components/customUI/Spacer";
import useInput from "@/hooks/useInput";
import User from "@/interface/user";
import {loadMyInfoAPI, signupAPI} from "../apis/user";

const componentCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
`;
const Singup: FC = () => {
  const [userEmail, onChangeUserEmail, setUserEmail] = useInput("");
  const [nickname, onChangeNickname, setNickname] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState(false);

  const [loading, setLoading] = useState(false);
  const {data: me} = useQuery<User>('user', loadMyInfoAPI)
  console.log(me)

  const onChangePasswordCheck = useCallback((e: { target: { value: SetStateAction<string>; }; })=>{
    setPasswordCheck(e.target.value);
    setPasswordCheckError(e.target.value !== password);
  },[password])

  const onClickHandler = useCallback(() => {
    if(password !== passwordCheck){
      return setPasswordCheckError(true);
    }

    setLoading(true);
    signupAPI({email: userEmail, nickname, password})
      .then((res)=>{
        console.log('signup success')
      })
      .catch((error)=>{
        alert(error.response.data)
      })
      .finally(()=>{
        setLoading(false);
      })

  }, [userEmail, nickname, password, passwordCheck]);


  return (
    <AppLayout>
      <div css={componentCss}>
        <p className="text-2xl text-center">SignUp Here!</p>
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
            type="text"
            placeholder="Type your nickname"
            className="input input-bordered w-full"
            value={nickname}
            onChange={onChangeNickname}
          />
          <Spacer />
          <input
            type="password"
            placeholder="password"
            className="input input-bordered w-full"
            value={password}
            onChange={onChangePassword}
          />
          <Spacer />
          <input
            type="password"
            placeholder="password check"
            className="input input-bordered w-full"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />
          <Spacer />
          <button className="btn btn-primary w-full" onClick={onClickHandler}>
            Login
          </button>
        </div>
        <Spacer />
        {passwordCheckError && (
          <p className="text-md text-center text-red-600/100">
            Fail to Password Check.
          </p>
        )}
      </div>
    </AppLayout>
  );
};

export default Singup;
