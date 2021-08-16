import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import ExperienceCard from "./card/ExperienceCard";
import shopbackImage from "../../assets/photos/shopback.png";
import moeImage from "../../assets/photos/moe.jpeg";
import safImage from "../../assets/photos/saf.png";

interface IExperience {
  img: string;
  cardTitle: string;
  cardCompanyTitle: string;
  cardDateDetails: string;
  cardDescription: string[];
}
const experienceData: IExperience[] = [
  {
    img: shopbackImage,
    cardTitle: "Software Engineering Intern",
    cardCompanyTitle: "Shopback",
    cardDateDetails: "May 2021 - Aug 2021",
    cardDescription: [
      "Worked with the ShopBack GO team, taking part in agile sprints where I implemented features on both the frontend and backend",
      "Refractored code to improve database, using techniques such as indexing",
      "Tech stack: NestJS, React, Redux, MongoDB",
    ],
  },
  {
    img: shopbackImage,
    cardTitle: "Software Engineering Intern",
    cardCompanyTitle: "Shopback",
    cardDateDetails: "Jan 2021 - May 2021",
    cardDescription: [
      "Streamlined business workflows by building new apps in Salesforce, using Apex,Lightning/Aura Web Components, HTML, CSS, JavaScript, SQL",
      "Created a new app for ShopBack Go’s business development teams to create multiple new Business Opportunities on a single page to reduce time spent on creating them by 50%",
      "Created a new app for ShopBack’s operations team, used for revamping the internal inventory system",
    ],
  },
  {
    img: moeImage,
    cardTitle: "Teaching Intern",
    cardCompanyTitle: "Pierce Secondary School",
    cardDateDetails: "Feb 2018 - Apr 2018",
    cardDescription: [
      "Taught mathematics for 2 classes and chemistry for 1 class",
      "Learnt and created lesson plans for my classes",
      "Improved students' grades within my short stint",
    ],
  },
  {
    img: safImage,
    cardTitle: "Infantry Officer",
    cardCompanyTitle: "Singapore Armed Forces",
    cardDateDetails: "Apr 2016 - Feb 2018",
    cardDescription: [
      "Underwent a 38 week long Officer Cadet Course and graduated as an Infantry Officer",
      "Posted as a Platoon Trainer after commissioning at the Island Defence Training Center (2PDF), where I planned and executed trainings for Reservist personnels",
      "Awarded the Commander's coin on Jan 2018",
    ],
  },
];

const Experience: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.experienceHeaderContainer}>
          <Typography variant="h2" className={classes.experienceHeader}>
            Experience
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.experienceCardsContainer}>
        {experienceData.map((experience) => (
          <ExperienceCard
            img={experience.img}
            cardTitle={experience.cardTitle}
            cardCompanyTitle={experience.cardCompanyTitle}
            cardDateDetails={experience.cardDateDetails}
            cardDescription={experience.cardDescription}
          />
        ))}
      </div>
      <p style={{ margin: 0 }}>&nbsp;</p>
    </div>
  );
};

export default Experience;
