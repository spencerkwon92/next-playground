import React, { useEffect } from "react";
import AppLayout from "../components/layout/AppLayout";
import { useQuery, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";

import { loadMyInfoAPI } from "@/apis/user";
import { userState } from "@/recoil";

const Home = () => {
  const { data: me } = useQuery("user", loadMyInfoAPI);
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (me) {
      setUser((prev) => ({ ...prev, me }));
    }
  }, [me]);

  console.log("This is user From recoil: ", user);

  return (
    <AppLayout>
      {/* <div className="grid grid-cols-6 gap-3">
        <div className="col-span-4">postSection</div>
        <div className="col-span-2">loginSection</div>
      </div> */}
    </AppLayout>
  );
};

export default Home;
