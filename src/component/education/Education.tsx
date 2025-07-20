import {
  ExperienceContainer,
  ExperienceItemContainer,
  ExperienceTitle,
} from "../../assets/styles/experience/Experience";
import ExperienceItemCard from "./EducationItem";
import ComputerIcon from "@mui/icons-material/Computer";

export default function () {
  return (
    <>
    <div id = "experience">
      <ExperienceContainer>
        <ExperienceTitle>
          Education
          <ComputerIcon
            sx={{
              fontSize: "1em",
              verticalAlign: "middle",
              marginLeft: "0.5em",
              marginBottom: "0.4%",
              color: "grey",
              display: { xs: "none", sm: "inline" },
            }}
          />{" "}
        </ExperienceTitle>

        <ExperienceItemContainer>
          <ExperienceItemCard />
        </ExperienceItemContainer>
      </ExperienceContainer>
    </div>
    </>
  );
}
