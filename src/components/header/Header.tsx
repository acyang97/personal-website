import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import useStyles from "./styles";

const headersData = [
  {
    label: "Home",
    text: "home",
  },
  {
    label: "Skills",
    text: "skills",
  },
  {
    label: "Experience",
    text: "experience",
  },
  // {
  //   label: "Education",
  //   href: "/education",
  //   id: 3,
  //   text: 'education',
  //   url: '#education',
  // },
  {
    label: "Projects",
    text: "projects",
  },
];

export default function Header() {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, text }) => {
      return (
        <ScrollLink
          {...{
            component: ScrollLink,
            to: text,
            spy: true,
            smooth: true,
            color: "inherit",
            style: { textDecoration: "none" },
            keyScrollLink: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </ScrollLink>
      );
    });
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={classes.logo}>
      Chun Yang
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, text }) => {
      return (
        <Button
          {...{
            component: ScrollLink,
            to: text,
            spy: true,
            smooth: true,
            color: "inherit",
            style: { textDecoration: "none" },
            keyScrollLink: label,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={classes.header} elevation={0}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
