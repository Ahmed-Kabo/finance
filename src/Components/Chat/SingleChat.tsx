import {
  AttachFile,
  Backup,
  PhotoCamera,
  Send,
  Upload,
} from "@mui/icons-material";
import { Button, IconButton, Input, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
// import {
//   getAllChats,
//   getAllSinglChat,
// } from "../../Redux/Actions/MessageActions";
import Pusher from "pusher-js";

const initialState = {
  body: "",
  file_path: "",
};
const SingleChat = () => {
  const bottomRef = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const [data, setData] = useState(initialState);
  const UserId = location.pathname.split("/")[2];
  const UserSite = location.pathname.split("/")[3];
  const UserRol = location.pathname.split("/")[4];
  const UserName = location.pathname.split("/")[5];
  const GET_USER_ID = localStorage.getItem("user_id");
  const GET_ROLE_ID = localStorage.getItem("role_id");

  //   const { allSinglChat } = useSelector((state) => state.messages);

  //   useEffect(() => {
  //     const PusherFun = async () => {
  //       const pusher = new Pusher("2c551729f5c7d105fc99", {
  //         cluster: "eu",
  //       });
  //       const channel = pusher.subscribe("my-channel");
  //       channel.bind(`my-event-crm-${GET_USER_ID}`, function (data) {
  //         if (data)
  //           if (UserId && UserSite)
  //             dispatch(
  //               getAllSinglChat({
  //                 auth_user: GET_USER_ID,
  //                 site_auth_user: "crm",
  //                 user_receiver: UserId,
  //                 site_receiver: UserSite,
  //               })
  //             );
  //       });
  //       Pusher.logToConsole = true;
  //     };
  //     PusherFun();
  //     bottomRef.current?.scrollIntoView({ behavior: "smooth" });

  //     return () => {};
  //   }, [UserId, UserSite, dispatch, allSinglChat]);

  //   useEffect(() => {
  //     if (UserId && UserSite)
  //       dispatch(
  //         getAllSinglChat({
  //           auth_user: GET_USER_ID,
  //           site_auth_user: "crm",
  //           user_receiver: UserId,
  //           site_receiver: UserSite,
  //         })
  //       );
  //   }, [dispatch, UserId, UserSite]);
  //   useEffect(() => {
  //     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  //   }, [allSinglChat]);

  const handelSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("_method", "PATCH");
    // formData.append("user_sender", GET_USER_ID);
    formData.append("site_sender", "crm");
    // formData.append("department_id_sender", GET_ROLE_ID);
    formData.append("file_path", data.file_path);
    formData.append("user_receiver", UserId);
    formData.append("site_receiver", UserSite);
    formData.append("department_id_receiver", UserRol);
    formData.append("body", data.body);

    console.log(formData);

    const headers = {
      "Content-Type": "multipart/form-data",
      enctype: "multipart/form-data",
      token: "bL4r$a$c$e6JA8cU",
    };
    await axios({
      method: "POST",
      baseURL: `https://msg.boxbyld.tech/api/chat/message/store`,
      data: formData,
      headers: headers,
    })
      .then(async (res) => {
        console.log(res.data);
        console.log("done");
        await setData(initialState);
        // await dispatch(
        //   getAllSinglChat({
        //     auth_user: GET_USER_ID,
        //     site_auth_user: "crm",
        //     user_receiver: UserId,
        //     site_receiver: UserSite,
        //   })
        // );
        // await dispatch(
        //   getAllChats({ auth_user: GET_USER_ID, site_auth_user: "crm" })
        // );
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  return (
    <ChatConatiner>
      <h1>{UserName}</h1>
      <div className="chatcontiner">
        {/* {allSinglChat?.map((chat) => (
          <p
            key={chat.id}
            className={chat?.user_receiver ? "sender" : "reciver"}
          >
            {chat?.body && (
              <span>
                {chat?.body}
                <br />
              </span>
            )}

            {chat.file_path !== null && (
              <span className="file">
                <a href={`${chat.file}`} target="_blank">
                  Show File <Backup sx={{ mx: ".5rem" }} />
                </a>
              </span>
            )}
          </p>
        ))} */}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handelSubmit}>
        <div className="form-conatiner">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              //   onChange={(e) =>
              //     setData({ ...data, file_path: e.target.files[0] })
              //   }
            />
            <AttachFile />
          </IconButton>
          <input
            type="text"
            className="chat"
            placeholder="Text Messages...  "
            value={data.body}
            onChange={(e) => setData({ ...data, body: e.target.value })}
          />
          <IconButton type="submit">
            <Send />
          </IconButton>
        </div>
      </form>
    </ChatConatiner>
  );
};

const ChatConatiner = styled.div`
  width: 100%;
  h1 {
    text-transform: capitalize;
    text-align: center;
    padding: 1rem 0.5rem;
    box-shadow: 0px 5px 4px 0px rgb(33 179 255 / 12%);
    background: #1b1b1b;
    color: #fff;
  }
  .chatcontiner {
    height: calc(85vh - 80px);
    overflow-y: scroll;
    padding: 2rem;
    background: #1b1b1b;
    border-radius: 0;
    ::-webkit-scrollbar {
      width: 5px;
    }
    .sender {
      /* width: 100%; */
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      flex-direction: column;
      span {
        background: #ffa31a;
        padding: 0.6rem 1.2rem;
        color: #fff;
        border-radius: 3rem;
        margin-bottom: 0.5rem;
        display: inline-block;
        &.file {
          a {
            color: #fff;
            display: flex;
            align-items: center;
            gap: 1;
            font-weight: bold;
          }
        }
      }
    }
    .reciver {
      /* width: 100%; */
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      span {
        background: #808080;
        padding: 0.6rem 1.2rem;
        color: #fff;
        border-radius: 3rem;
        margin-bottom: 0.5rem;
        &.file {
          a {
            color: #fff;
            display: flex;
            align-items: center;
            font-weight: bold;

            gap: 1;
          }
        }
      }
    }
  }
  .form-conatiner {
    width: 100%;
    display: flex;
    height: calc(94vh - 85vh);
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 1rem;
    background: #1b1b1b;
    /* border-radius: 2rem; */
    position: relative;
    svg {
      font-size: 1.8rem;
      color: #ffa31a;
    }
    /* margin: 0 0.5rem; */
    .chat {
      width: 90%;
      padding: 0.8rem;
      border-radius: 2rem;
      border: none;
      outline: 0;
      font-size: 1.1rem;
      background: rgba(0, 0, 0, 0);
      color: #eeeeee;
      ::placeholder {
        color: #808080;
      }
      .sender {
      }
    }
  }
`;

export default SingleChat;
