import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import ProjectCard from "./card/ProjectCard";
import montageImage from "../../assets/photos/projects/montage-pic.png";
import petCaringImage from "../../assets/photos/projects/pet-caring.jpeg";
import dueQuestImage from "../../assets/photos/projects/duequest.jpeg";

interface IExperience {
  img: string;
  cardTitle: string;
  cardDateDetails: string;
  cardDescription: string[];
  urlLink: string;
}
const projectsData: IExperience[] = [
  {
    img: montageImage,
    cardTitle: "Montage 2021 Website",
    cardDateDetails: "Jan 2021 - Aug 2021",
    cardDescription: [
      "As the IT Director of NUS Photography Society, I created a website for our annual National Photography Competition called Montage from scratch",
      "Tech stack: HTML, CSS, Javascript, Git",
    ],
    urlLink: "https://github.com/acyang97/montage",
  },
  {
    img: petCaringImage,
    cardTitle: "Pet Caring Service",
    cardDateDetails: "Aug 2020 - Nov 2020",
    cardDescription: [
      "As part of CS2102 Database Systems, I built a database web application with a team of 5 that serves to allow pet owners to find caretakers totake care of their pets.",
      "Facilitated the ideation of different SQL triggers to automate many backend logic",
      "Spearheaded the database schema design and took the initiative to learn and teach Flask to my team",
      "Tech stack: Flask, PostgreSql, Git",
    ],
    urlLink: "https://github.com/acyang97/CS2102-AY2021S1-Group51",
  },
  {
    img: dueQuestImage,
    cardTitle: "DueQuest",
    cardDateDetails: "Aug 2020 - Nov 2020",
    cardDescription: [
      "Built a Command Line Interface app that allows NUS Students to plan their schedules.",
      "Spearheaded the allocation of work and architecture of the app",
      "Acquired Object-Oriented Programming skills and good software engineering practices and utilized them to make code more organized and designed better test cases",
      "Tech stack: Java, Git, Junit",
    ],
    urlLink: "https://github.com/acyang97/tp",
  },
];

const Projects: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.projectsHeaderContainer}>
          <Typography variant="h2" className={classes.projectsHeader}>
            Projects
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.projectsCardContainer}>
        {projectsData.map((project) => (
          <ProjectCard
            img={project.img}
            cardTitle={project.cardTitle}
            cardDateDetails={project.cardDateDetails}
            cardDescription={project.cardDescription}
            urlLink={project.urlLink}
          />
        ))}
      </div>
      <p>&nbsp;</p>
    </div>
  );
};

export default Projects;
