import Grid from "@material-ui/core/Grid";
import { ImageList, ImageListItem, Typography } from "@material-ui/core";
import useStyles from "./styles";
import typescriptImage from "../../assets/icons/typescript.svg";
import javacriptImage from "../../assets/icons/Javascript.svg";
import java from "../../assets/icons/java.svg";
import pythonImage from "../../assets/icons/python.svg";
import htmlImage from "../../assets/icons/html.png";
import cssImage from "../../assets/icons/css.png";
import rImage from "../../assets/icons/r.png";
import gitImage from "../../assets/icons/git.png";
import reactImage from "../../assets/icons/react.png";
import reduxImage from "../../assets/icons/redux.svg";
import flutterImage from "../../assets/icons/flutter.png";
import nestJsImage from "../../assets/icons/nestjs.png";
import flaskImage from "../../assets/icons/flask.png";
import nodeImage from "../../assets/icons/node.png";
import mongodbImage from "../../assets/icons/mongodb.svg";
import postgreImage from "../../assets/icons/posrgresql.png";
import figmaImage from "../../assets/icons/figma.svg";
import lightroomImage from "../../assets/icons/lightroom.png";
import salesforceImage from "../../assets/icons/salesforce.png";
import codingImage from "../../assets/vectors/undraw_Coding_re_iv62.svg";

const languageData = [
  {
    name: "typescript",
    img: typescriptImage,
  },
  {
    name: "javascript",
    img: javacriptImage,
  },
  {
    name: "java",
    img: java,
  },
  {
    name: "python",
    img: pythonImage,
  },
  {
    name: "html",
    img: htmlImage,
  },
  {
    name: "css",
    img: cssImage,
  },
  {
    name: "r",
    img: rImage,
  },
  {
    name: "git",
    img: gitImage,
  },
];

const frameworksData = [
  {
    name: "react",
    img: reactImage,
  },
  {
    name: "redux",
    img: reduxImage,
  },
  {
    name: "flutter",
    img: flutterImage,
  },
  {
    name: "nestjs",
    img: nestJsImage,
  },
  {
    name: "node",
    img: nodeImage,
  },
  {
    name: "flask",
    img: flaskImage,
  },
];

const databaseData = [
  {
    name: "mongo",
    img: mongodbImage,
  },
  {
    name: "postgre",
    img: postgreImage,
  },
];

const othersData = [
  {
    name: "figma",
    img: figmaImage,
  },
  {
    name: "lightroom",
    img: lightroomImage,
  },
  {
    name: "salesforce",
    img: salesforceImage,
  },
];

const Skills = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.skillHeaderContainer}>
          <Typography variant="h2" className={classes.skillsHeader}>
            Skills
          </Typography>
        </Grid>
        <Grid container className={classes.skillsMainContainer}>
          <Grid item xs={12} md={6} className={classes.item1}>
            <div className={classes.skillsContainer}>
              <div className={classes.subContainer}>
                <Typography variant="h4">Languages</Typography>
                <div className={classes.iconContainer}>
                  <ImageList rowHeight={75} cols={4}>
                    {languageData.map((item) => (
                      <ImageListItem key={item.name} cols={1}>
                        <img
                          src={item.img}
                          alt={item.name}
                          className={classes.icon}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </div>
              </div>
              <div className={classes.subContainer}>
                <Typography variant="h4">Frameworks and Libraries</Typography>
                <div className={classes.iconContainer}>
                  <ImageList rowHeight={75} cols={4} gap={3}>
                    {frameworksData.map((item) => (
                      <ImageListItem key={item.name} cols={1}>
                        <img
                          src={item.img}
                          alt={item.name}
                          className={classes.icon}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </div>
              </div>
              <div className={classes.subContainer}>
                <Typography variant="h4">Database</Typography>
                <div className={classes.iconContainer}>
                  <ImageList rowHeight={75} cols={4} gap={3}>
                    {databaseData.map((item) => (
                      <ImageListItem key={item.name} cols={1}>
                        <img
                          src={item.img}
                          alt={item.name}
                          className={classes.icon}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </div>
              </div>
              <div className={classes.subContainer}>
                <Typography variant="h4">Others</Typography>
                <div className={classes.iconContainer}>
                  <ImageList rowHeight={75} cols={4} gap={3}>
                    {othersData.map((item) => (
                      <ImageListItem key={item.name} cols={1}>
                        <img
                          src={item.img}
                          alt={item.name}
                          className={classes.icon}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={6}
            alignItems="center"
            justify="center"
            className={classes.item2}
          >
            <img
              src={codingImage}
              alt="coder"
              className={classes.coderVectorImage}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
