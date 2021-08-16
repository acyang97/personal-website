import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FAF9F9",
  },
  item1: {
    order: 2,
    [theme.breakpoints.up("md")]: {
      order: 1,
    },
  },
  item2: {
    order: 1,
    [theme.breakpoints.up("md")]: {
      order: 2,
    },
  },
  skillHeaderContainer: {
    marginTop: "25px",
  },
  skillsHeader: {
    fontSize: "30pt",
    color: "#000",
    fontWeight: 500,
    textAlign: "center",
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
  },
  skillsMainContainer: {
    marginTop: "30px",
    "@media (max-width: 600px)": {
      direction: "row-reverse",
      marginTop: "0",
    },
  },
  skillsContainer: {
    margin: "0px 40px 40px 40px",
  },
  icon: {
    width: "50px",
    height: "50px",
  },
  iconContainer: {
    margin: "20px 0 20px 0",
  },
  subContainer: {
    marginLeft: "150px",
    "@media (max-width: 480px)": {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
  coderVectorImage: {
    width: "350px",
    height: "350px",
  },
}));
