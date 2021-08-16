import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: "50px",
    marginBottom: "50px",
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
  cardTitle: {
    fontSize: "24pt",
    fontWeight: 700,
  },
  cardCompanyTitle: {
    fontSize: "20pt",
    fontWeight: 500,
  },
  cardDateDetails: {
    fontSize: "12pt",
    fontWeight: 400,
  },
  cardDescription: {
    fontSize: "12pt",
    fontWeight: 400,
  },
}));
