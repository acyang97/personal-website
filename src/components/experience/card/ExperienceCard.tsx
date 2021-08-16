import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";

interface ExperienceCardProps {
  img: string;
  cardTitle: string;
  cardCompanyTitle: string;
  cardDateDetails: string;
  cardDescription: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  img,
  cardTitle,
  cardDateDetails,
  cardCompanyTitle,
  cardDescription,
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid container item xs={12} md={3} justifyContent="center">
          <div style={{ margin: "20px" }}>
            <img src={img} alt="Shopback" className={classes.img}></img>
          </div>
        </Grid>
        <Grid container direction="column" item xs={12} md={9}>
          <div className={classes.cardTextContainer}>
            <Typography className={classes.cardTitle}>{cardTitle}</Typography>
            <Typography className={classes.cardCompanyTitle}>
              {cardCompanyTitle}
            </Typography>
            <Typography className={classes.cardDateDetails}>
              {cardDateDetails}
            </Typography>
            <Typography className={classes.cardDescription}>
              <ul>
                {cardDescription.map((point) => (
                  <li>{point}</li>
                ))}
              </ul>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ExperienceCard;
