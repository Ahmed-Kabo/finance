import { Add } from "@mui/icons-material";
import { List, ListItem, ListItemText, Menu, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Messages = (props: any) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  //   const { unseenMessages } = useSelector((state) => state.messages);

  //   const GetUserSender = unseenMessages
  //     ? unseenMessages?.chats?.map((t) => {
  //         return t;
  //       })
  //     : [];

  return (
    <>
      <Menu
        anchorEl={props.anchorEl}
        id="account-menu"
        open={props.open}
        onClose={props.handleClose}
        onClick={props.handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            width: 400,
            mt: 1.5,
            borderRadius: "1rem",
            padding: "1rem 0 ",
            "& .MuiAvatar-root": {
              width: 60,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#4e8fba",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
          variant="h5"
        >
          Messages
        </Typography>

        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
          }}
        >
          {/* {GetUserSender?.map((chat) => (
            <Box key={chat.id} sx={{ borderBottom: "0.5px solid #88888855" }}>
              <Link
                to={`/all-messages/${chat?.one_message?.user_sender?.id}/${chat?.one_message?.user_sender?.site}/${chat?.one_message?.user_sender?.role_id}/${chat?.one_message?.user_sender?.name}`}
              >
                <Typography
                  sx={{ mt: 0, ml: 2, p: 0, color: "#888" }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                  {chat?.one_message?.user_sender?.site}
                </Typography>
                <ListItem
                  sx={{
                    pt: 0,
                    color: "#64b0ffde",
                    marginTop: "0px",

                    "& .MuiListItemText-primary": { fontWeight: "bold" },
                  }}
                >
                  <ListItemText
                    primary={chat?.one_message?.user_sender?.name}
                    secondary={chat?.one_message?.body}
                    sx={{ marginTop: "0px" }}
                  />
                </ListItem>
              </Link>
            </Box>
          ))} */}
        </List>

        <Typography
          sx={{
            color: "#4e8fba",
            margin: "1rem 0",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Add />
          <Link to="/all-messages">See All Messages</Link>
        </Typography>
      </Menu>
    </>
  );
};

export default React.memo(Messages);
