import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  homeContainer: {
    backgroundColor: "#BEE3DB",
    minHeight: "100%",
    width: "100%",
    height: "auto",
    position: "fixed",
    top: "0",
    left: "0",
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
    marginTop: "125px",
    marginBottom: "50px",
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
