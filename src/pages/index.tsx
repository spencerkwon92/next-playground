import React from "react";
import AppLayout from "../components/layout/AppLayout";
import {useQuery, useQueryClient} from "react-query";

import { loadMyInfoAPI } from "@/apis/user";

const Home = () => {
  const { data: me } = useQuery("user", loadMyInfoAPI);
  const queryClient = useQueryClient();

  return (
    <AppLayout>
      <div className="grid grid-cols-6 gap-3">
        <div className="col-span-4">postSection</div>
        <div className="col-span-2">loginSection</div>
      </div>
    </AppLayout>
  );
};

export default Home;
