import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, Theme, styled } from "@mui/material/styles";
import React from "react";
import { FiHome, FiPieChart } from "react-icons/fi";
import { GoProjectRoadmap } from "react-icons/go";
import { PiCaretDoubleLeftBold } from "react-icons/pi";

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const navigation = [
  { name: "Home", href: "#", icon: FiHome, current: true },
  { name: "Projects", href: "#", icon: FiPieChart, current: false },
  { name: "Statistics", href: "#", icon: GoProjectRoadmap, current: false },
];

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: `calc(${theme.spacing(7)} + 1px)`,
    position: "relative",
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": {
        ...openedMixin(theme),
        padding: "24px 16px",
        height: "100vh",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
        gap: 48,
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": {
        ...closedMixin(theme),
        padding: "24px 0",
        height: "100vh",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
        gap: 48,
      },
    }),
  })
);

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const Sidebar: React.FC<Props> = ({ open, setOpen }) => {
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
    >
      <div className="w-[280px] absolute inset-0 bg-no-repeat bg-center bg-cover" />

      <DrawerHeader>
        <div className="w-full flex justify-between items-center relative">
          <img
            className={`${open ? "flex" : "hidden"}`}
            src="/logo.svg"
            alt="logo"
          />

          <button
            onClick={toggleDrawer}
            className="bg-white size-11 rounded-full flex justify-center items-center shadow-xl"
          >
            <PiCaretDoubleLeftBold size={18} />
          </button>
        </div>
      </DrawerHeader>

      <List>
        {navigation.map(({ icon: Icon, ...item }, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 1,
                py: 0.5,
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#f3f4f6",
                  transition: "background-color 300ms ease-in-out",
                },
              }}
              className="gap-3 py-2 px-3 rounded-md hover:bg-gray-100 transition duration-300"
            >
              <Icon size={20} />
              <ListItemText
                className="text-lg text-primary-dark"
                primary={item.name}
                sx={{ display: open ? "block" : "none" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
