import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import shopbackImage from "../../../assets/photos/shopback.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: "0 50px",
    },
    paper: {
      // padding: theme.spacing(20),
      margin: "auto",
      // maxWidth: 500,
      "@media (max-width: 480px)": {
        // padding: theme.spacing(4),
      },
    },
    card: {
      backgroundColor: "blue",
    },
    // image: {
    //   width: 300,
    //   height: 300,
    // },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  })
);

interface CustomCardProps {
  // image
  // image width
  // image height
}

const CustomCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <Typography>Test</Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography>Test</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomCard;
