import { Check, DoneAll } from "@mui/icons-material";
import { ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
// import Pusher from "pusher-js";
// import {
//   ChangeStatusChat,
//   getAllChats,
// } from "../../Redux/Actions/MessageActions";

const AllChats = () => {
  const GET_USER_ID = localStorage.getItem("user_id");

  //   useEffect(() => {
  //     const PusherFun = async () => {
  //       const pusher = new Pusher("2c551729f5c7d105fc99", {
  //         cluster: "eu",
  //       });
  //       const channel = pusher.subscribe("my-channel");
  //       channel.bind(`my-event-crm-${GET_USER_ID}`, function (data: any) {
  //         if (data)
  //           dispatch(
  //             getAllChats({ auth_user: GET_USER_ID, site_auth_user: "crm" })
  //           );
  //       });
  //       Pusher.logToConsole = true;
  //     };
  //     PusherFun();

  //     return () => {};
  //   }, []);

  //reducer
  //   const { allChats } = useSelector((state) => state.messages);

  //   useEffect(() => {
  //     dispatch(getAllChats({ auth_user: GET_USER_ID, site_auth_user: "crm" }));
  //   }, []);
  return (
    <AllMessagesStyled>
      <h2> All Messages</h2>
      <ListMessages>
        {/* {allChats?.map((chat) => (
          <Box
            className={
              chat?.one_message?.user_receiver?.site
                ? "cardList"
                : chat?.one_message?.status === 0 &&
                  chat?.one_message?.user_sender?.site
                ? "cardList reseve reseve_unseen"
                : "cardList reseve"
            }
            key={chat.id}
            onClick={async () => {
              await dispatch(
                ChangeStatusChat({
                  auth_user: GET_USER_ID,
                  site_auth_user: "crm",
                  user_receiver:
                    chat?.one_message?.user_sender?.id ||
                    chat?.one_message?.user_receiver?.id,
                  site_receiver:
                    chat?.one_message?.user_sender?.site ||
                    chat?.one_message?.user_receiver?.site,
                })
              );
              await dispatch(
                getAllChats({ auth_user: GET_USER_ID, site_auth_user: "crm" })
              );
            }}
          >
            <NavLink
              to={`/all-messages/${
                chat?.one_message?.user_sender?.id ||
                chat?.one_message?.user_receiver?.id
              }/${
                chat?.one_message?.user_sender?.site ||
                chat?.one_message?.user_receiver?.site
              }/${
                chat?.one_message?.user_sender?.role_id ||
                chat?.one_message?.user_receiver?.role_id
              }/${
                chat?.one_message?.user_sender?.name ||
                chat?.one_message?.user_receiver?.name
              }`}
            >
              <Typography
                sx={{ mt: 0, ml: 2, p: 0, color: "#888" }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                {chat?.one_message?.user_sender?.site ||
                  chat?.one_message?.user_receiver?.site}
              </Typography>
              <ListItem
                sx={{
                  pt: 0,
                  color: "#ffa31ade",
                  marginTop: "0px",

                  "& .MuiListItemText-primary": { fontWeight: "bold" },
                }}
              >
                <ListItemText
                  primary={
                    chat?.one_message?.user_sender?.name ||
                    chat?.one_message?.user_receiver?.name
                  }
                  secondary={chat?.one_message?.body}
                  sx={{ marginTop: "0px" }}
                />
                {chat?.one_message?.status === "0" ? (
                  <Check sx={{ color: "#888" }} />
                ) : (
                  <DoneAll />
                )}
              </ListItem>
            </NavLink>
          </Box>
        ))} */}
      </ListMessages>
    </AllMessagesStyled>
  );
};

const ListMessages = styled(Box)`
  && {
    box-shadow: none;
    padding: 0.5rem 0;
    .MuiTypography-body2 {
      color: #fff;
    }

    &.active {
      background: #ffa31a;
    }

    .cardList {
      padding: 0.5rem 0;
      background: #292929;
      transition: all 0.5s;
      /* margin: 0.5rem 0; */
      border-bottom: 1px solid #ffa31a1a;
      overflow: hidden;
      word-break: break-word;
      .reseve_unseen {
        background: #4e8fba;
      }
      &.reseve_unseen {
        .list_item {
          font-weight: bold;
          color: #fff;
        }
      }
      /* border-top: 1px solid #4e8fba; */
      &:hover {
        background: #4e8fba;
      }
      /* border-radius: 0 1.5rem 1.5rem 0; */
    }
  }
`;

const AllMessagesStyled = styled.div`
  border: 1px solid #4e8fba77;
  height: 94vh;
  overflow-y: scroll;
  background: #f9f9f9;
  ::-webkit-scrollbar {
    width: 0.3em;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #4e8fba;
    /* outline: 1px solid slategrey; */
  }
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  }
  h2 {
    text-align: center;
    margin: 1.5rem 0;
    color: #61b8f2;
  }
`;
export default AllChats;
