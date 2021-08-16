import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#BEE3DB",
  },
  projectsHeaderContainer: {
    marginTop: "25px",
  },
  projectsHeader: {
    fontSize: "30pt",
    color: "#000",
    fontWeight: 500,
    textAlign: "center",
  },
  // the card stuff
  paper: {
    backgroundColor: "#FAF9F9",
    marginLeft: "150px",
    marginRight: "150px",
    "@media (max-width: 480px)": {
      marginLeft: "25px",
      marginRight: "25px",
    },
  },
  img: {
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
  },
  cardTextContainer: {
    marginLeft: "20px",
    marginRight: "20px",
  },

  projectsCardContainer: {
    marginTop: "50px",
  },
}));
