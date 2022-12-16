import {
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";

import { useState } from "react";
import {
  Approval,
  ArtTrack,
  Assessment,
  AttachFile,
  Autorenew,
  BlindsClosed,
  ChevronLeft,
  ChevronRight,
  CloudUpload,
  DocumentScanner,
  DonutSmall,
  HomeMax,
  House,
  ImportContacts,
  Inbox,
  Logout,
  Mail,
  Cottage,
  Menu,
} from "@mui/icons-material";
import { NavLink, Outlet } from "react-router-dom";

import LOGO from "../../Assets/logo.svg";
import { ImageController } from "../../Helper/Helper";

import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Slice/auth/AuthSlice";
import { useAppDispatch } from "../../Hooks/hooks";
import UnReadMessages from "../../Components/Chat/UnReadMessages";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  borderRight: "0px",
  background: "#191919",
  color: "#878787",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  borderRight: "0px",
  overflowX: "hidden",
  background: "#191919",
  color: "#878787",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  border: "none",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// add the routs name

const Routs = [
  { id: 0, name: "Home", route: "", icon: <Cottage /> },
  // { id: 1, name: "Site Survey", route: "site-survey", icon: <CloudUpload /> },
  // {
  //   id: 2,
  //   name: "Utility Bill",
  //   route: "utility-bill",
  //   icon: <Approval />,
  // },
  // { id: 3, name: "Solution", route: "solution", icon: <Assessment /> },
  // { id: 4, name: "Contract", route: "contract", icon: <AttachFile /> },
  // {
  //   id: 5,
  //   name: "Project Status",
  //   route: "project-status",
  //   icon: <DonutSmall />,
  // },
  // {
  //   id: 6,
  //   name: "conatct Officer ",
  //   route: "contact-officer",
  //   icon: <House />,
  // },
  // { id: 7, name: "Tracking ", route: "tracking", icon: <ArtTrack /> },
];

const Home = () => {
  //start message
  const [message, setMessage] = useState(null);
  const openMessage = Boolean(message);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const HandleClick = (e: any) => {
    setMessage(e.currentTarget);
  };

  const HandleClose = () => {
    setMessage(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ background: "#191919" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "0 2rem",
            }}
          >
            <h2>Welcome </h2>
            <Box>
              <IconButton
                size="large"
                onClick={HandleClick}
                aria-controls={openMessage ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMessage ? "true" : undefined}
                color="inherit"
                sx={{ color: "#fff", mr: 3 }}
              >
                <Mail />
              </IconButton>
              <IconButton
                sx={{ color: "#fff" }}
                onClick={() => dispatch(logout())}
              >
                <Logout />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          display: "block",
        }}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderRight: "0px",
          }}
        >
          <img src={LOGO} width="150px" />
          <IconButton onClick={handleDrawerClose} sx={{ color: "#878787" }}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>

        <List>
          {Routs.map((route) => (
            <ListItem key={route.id} disablePadding sx={{ display: "block" }}>
              <NavLink to={`${route.route}`}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    textTransform: "uppercase",
                    margin: "1rem 0",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      color: "#878787",
                      justifyContent: "center",
                    }}
                  >
                    {route.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={route.name}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>

      {openMessage ? (
        <UnReadMessages
          open={openMessage}
          handleClose={HandleClose}
          anchorEl={message}
        />
      ) : null}
    </Box>
  );
};

export default Home;
