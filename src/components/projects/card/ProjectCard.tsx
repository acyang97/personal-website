import React from "react";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import useStyles from "./styles";

interface ProjectCardProps {
  img: string;
  cardTitle: string;
  cardDateDetails: string;
  cardDescription: string[];
  urlLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  cardTitle,
  cardDateDetails,
  cardDescription,
  urlLink,
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
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                className={classes.button}
                href={urlLink}
                target="_blank"
              >
                Source Code
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProjectCard;
