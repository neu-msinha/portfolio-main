import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import northeasternLogo from "../../assets/images/northeastern-university-logo.jpg";
import jiitLogo from "../../assets/images/jiit-logo.jpeg";
import Accordion from "@mui/material/Accordion";
import Avatar from "@mui/material/Avatar";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import myEducation from "../../assets/config/developer_data/educationData";
import { Colors } from "../../assets/styles/basetheme/theme";

export default function EducationItemCard() {
  return (
    <>
      {myEducation.education.map((eduItem, index) => {
        const {
          institution,
          degree,
          educationDate,
          educationDescription,
          coursework,
        } = eduItem;

        return (
          <Card key={index} sx={{ margin: "2%", height: "auto" }}>
            <CardHeader
              avatar={
                degree == "Master of Science in Software Engineering Systems" ?
                <Avatar
                  src={northeasternLogo}
                  alt="University Logo"
                  sx={{ width: 56, height: 56, bgcolor: "transparent" }}
                /> :
                <Avatar
                  src={jiitLogo}
                  alt="University Logo"
                  sx={{ width: 56, height: 56, bgcolor: "transparent" }}
                /> 
              }
              title={degree}
              subheader={educationDate}
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {educationDescription}
              </Typography>
            </CardContent>

            <CardActions disableSpacing></CardActions>

            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${index}-coursework-content`}
                  id={`panel-${index}-coursework-header`}
                  color="text.secondary"
                >
                  <Typography>Coursework</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{ fontSize: "0.9em", color: Colors.primary }}
                  >
                    {coursework}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Card>
        );
      })}
    </>
  );
}
