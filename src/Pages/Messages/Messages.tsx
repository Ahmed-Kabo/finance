import { Grid } from "@mui/material";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AllChats from "../../Components/Chat/AllChats";
import { useGetChatQuery } from "../../Redux/RTK/ChatsSlice";

const AllMessages = () => {
  // const [getAllMessages] = useGetChatMutation();
  const { isError, refetch, data } = useGetChatQuery({
    auth_user: 2,
    site_auth_user: "crm",
  });

  console.log("data", data);

  // useEffect(() => {
  //   getAllMessages({
  //     auth_user: 2,
  //     site_auth_user: "crm",
  //   });
  // }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <AllChats />
        </Grid>
        <Grid item xs={9}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default AllMessages;
