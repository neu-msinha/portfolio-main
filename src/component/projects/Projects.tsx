
import { ProjectContainer, ProjectItemContainer } from '../../assets/styles/projects/projects';
import { ExperienceTitle } from '../../assets/styles/experience/Experience';

import EngineeringIcon from '@mui/icons-material/Engineering';
import ProjectLists from './ProjectLists';
import nuconnectImage from "../../assets/images/nuconnect.png";
import cloudInfraImage from "../../assets/images/aws.png";
interface Props {
  title: string
}


const projects = [
  {
    src: nuconnectImage,
    header: "NUConnect (Real-Time Chat & Video Platform)",
    description:
      "Built for Northeastern students, NUConnect is a real-time peer-to-peer communication platform that supports video calls, screen-sharing, and instant messaging using WebRTC and Socket.io.",
    visit: "#", // Add deployment link if available
    learn: "https://github.com/INFO6150-Project/ConnectRoom",
    skillsDesktop: [
      "React",
      "Redux",
      "Material‑UI",
      "Node.js",
      "Express",
      "WebRTC",
      "Socket.io",
      "MongoDB",
    ],
    skillsMobile: [
      "React",
      "Node.js",
      "WebRTC",
      "Socket.io",
      "MongoDB",
    ],
  },
  {
    src: cloudInfraImage,
    header: "Cloud Infrastructure Automation",
    description:
      "Designed and implemented infrastructure as code using Terraform, integrated CI/CD pipelines, and auto-scaled EC2 instances with monitoring via CloudWatch in a dual-repository AWS/GCP deployment setup.",
    visit: "#", // Add deployment link if available
    learn: "https://github.com/CSYE6225-NetworkStructures/project", // Update if actual repo differs
    skillsDesktop: [
      "Terraform",
      "Packer",
      "AWS EC2",
      "GCP",
      "CI/CD",
      "CloudWatch",
      "Load Balancing",
      "IAC",
    ],
    skillsMobile: [
      "Terraform",
      "AWS",
      "CI/CD",
      "Packer",
      "CloudWatch",
    ],
  },
];


export default function Projects({ title }: Props) {
  return (
    <>
     <div id = "projects">
     <ProjectContainer>
      <ExperienceTitle>
        {title}
        <EngineeringIcon
          sx={{
            fontSize: "1em",
            verticalAlign: "middle",
            marginLeft: "0.5em",
            marginBottom: "0.4%",
            color: "grey",
            display: { xs: "none", sm: "inline" },
          }}
        />
      </ExperienceTitle>

      <ProjectItemContainer>
        {projects.map((project, index) => (
          <ProjectLists
            key={index}
            src={project.src}
            header={project.header}
            description={project.description}
            visit={project.visit}
            learn={project.learn}
            skillsDesktop={project.skillsDesktop}
            skillsMobile={project.skillsMobile}
          />
        ))}
      </ProjectItemContainer>
    </ProjectContainer>
     </div>
    </>
    
  );
}
