import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import Header from "../header/Header";
import profilePhoto from "../../assets/photos/profile-photo.png";

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.homeContainer}>
        <div className={classes.aboutMeTopContainer}>
          <Typography align="center" className={classes.aboutMeText}>
            Hi Everyone!
          </Typography>
        </div>
        <div className={classes.profileImageContainer}>
          <img
            src={profilePhoto}
            className={classes.profileImage}
            alt="profile"
          />
        </div>
        <div className={classes.aboutMeContainer}>
          <Typography align="center" className={classes.aboutMeText}>
            My name is Chun Yang, a final year Applied Mathematics student (Yes,
            Math) from NUS, minoring in Computer Science and Economics,
            graduating in May 2022, aspiring to be a software engineer I have
            strong interest in web development, mobile app development and UI/UX
            design. I am currently looking out for related full-time job and
            internship opportunities!
          </Typography>
        </div>
        <p>&nbsp;</p>
      </div>
    </>
  );
};

export default Home;
