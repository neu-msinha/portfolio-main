import { FC } from "react";
import {
  AboutSkillsContainer,
  SkillsButton,
} from "../../assets/styles/about/Aboutstyles";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const skillsArrayDesktop = [
  "C#/.NET", // Backend
  "Node.js", // Backend
  "ReactJS", // Frontend
  "TypeScript", // Frontend
  "SQL", // Database
  "MongoDB", // Database
  "AWS (EC2/S3)", // Cloud
  "Docker", // DevOps
  "Terraform", // DevOps
  "Git", // Tooling
  "CI/CD", // DevOps
  "Material UI", // Frontend
  "JIRA", // Workflow
];

const skillsArrayMobile = [
  "C#",
  "Node",
  "React",
  "TS",
  "SQL",
  "Mongo",
  "AWS",
  "Docker",
  "TF",
  "Git",
  "CI/CD",
  "MUI",
  "JIRA",
  ".NET",
];

const AboutUserSkills: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const skillsToDisplay = isMobile ? skillsArrayMobile : skillsArrayDesktop;

  return (
    <AboutSkillsContainer>
      {skillsToDisplay.map((skill, index) => (
        <SkillsButton key={index}>{skill}</SkillsButton>
      ))}
    </AboutSkillsContainer>
  );
};

export default AboutUserSkills;
