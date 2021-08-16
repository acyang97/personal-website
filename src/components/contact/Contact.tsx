import React from "react";
import { Grid, Link } from "@material-ui/core";
import useStyles from "./styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Contact: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.contactsContainer}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
          >
            <div className={classes.iconContainer}>
              <Link href="https://github.com/acyang97" target="_blank">
                <GitHubIcon fontSize="large" className={classes.icon} />
              </Link>
            </div>
            <div className={classes.iconContainer}>
              <Link
                href="https://www.linkedin.com/in/ang-chun-yang/"
                target="_blank"
              >
                <LinkedInIcon fontSize="large" className={classes.icon} />
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Contact;
