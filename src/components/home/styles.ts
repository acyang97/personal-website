import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  homeContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BEE3DB",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderTop: "0",
    minHeight: "110vh",
    height: "110vh !important",
    position: "relative",
    textAlign: "center",
    overflow: "hidden",
    "@media (max-width: 480px)": {
      minHeight: "100vh",
      height: "100vh !important",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  profileImageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  profileImage: {
    width: "300px",
    "@media (max-width: 480px)": {
      width: "200px",
    },
  },
  aboutMeTopContainer: {
    marginTop: "100px",
    marginBottom: "25px",
    display: "flex",
    justifyContent: "center",
    marginLeft: "200px",
    marginRight: "200px",
    "@media (max-width: 768px)": {
      marginLeft: "100px",
      marginRight: "100px",
    },
    "@media (max-width: 480px)": {
      marginLeft: "25px",
      marginRight: "25px",
    },
  },
  aboutMeText: {
    fontSize: "16pt",
    "@media (max-width: 768px)": {
      fontSize: "12pt",
    },
    "@media (max-width: 480px)": {
      fontSize: "10pt",
    },
  },
  aboutMeContainer: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    marginLeft: "200px",
    marginRight: "200px",
    "@media (max-width: 980px)": {
      marginLeft: "100px",
      marginRight: "100px",
    },
    "@media (max-width: 768px)": {
      marginLeft: "100px",
      marginRight: "100px",
    },
    "@media (max-width: 480px)": {
      marginLeft: "25px",
      marginRight: "25px",
    },
  },
}));
