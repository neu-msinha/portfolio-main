import { FC } from "react";
import GitHubCalendar from 'react-github-calendar';
import { ExperienceTitle } from "../../assets/styles/experience/Experience";
import GitHubIcon from '@mui/icons-material/GitHub';

const GithubContainer: FC = () => {
  return (
    <div id="contributions" style={{marginBottom: "5%"}}>
      {/* <ContainerDiv style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}> */}
        <ExperienceTitle style={{ width: "100%"}}>
          <a
            href="https://github.com/neu-msinha"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#595959" }}
          >
          Github Contribution Calendar
          <GitHubIcon
            sx={{
              fontSize: "1em",
              verticalAlign: "middle",
              marginLeft: "0.5em",
              marginBottom: "0.4%",
              color: "grey",
              display: { xs: "none", sm: "inline" },
            }}
          />
          </a>
        </ExperienceTitle>
       <div style={{ margin: "1.5em 0", width: "100%", display: "flex", justifyContent: "center" }}>
          <GitHubCalendar
            username="neu-msinha"
            colorScheme="light"
            fontSize={18}
          />
        </div>
      {/* </ContainerDiv> */}
    </div>
  );
};

export default GithubContainer;