import {
  ContactContainer,
  ContactIconsContainer,
  ContentTitle,
} from "../../assets/styles/footer/contact";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Colors } from "../../assets/styles/basetheme/theme";
import { useMediaQuery, Typography } from "@mui/material";

export default function Contact() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  const iconStyle = {
    fontSize: "42px",
    marginRight: "15px",
    marginBottom: "30px",
    cursor: "pointer",
    borderRadius: "50%",
    color: "grey",
    transition: "0.4s ease-out",
    "&:hover": {
      color: Colors.primary,
    },
  };

  if (isSmallScreen) {
    iconStyle.fontSize = "32px";
  } else if (isMediumScreen) {
    iconStyle.fontSize = "39px";
  }

  return (
    <ContactContainer>
      <ContentTitle>Connect With Me</ContentTitle>
      <ContactIconsContainer>
        <a
          href="https://github.com/neu-msinha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={iconStyle} />
        </a>

        <a
          href="https://www.linkedin.com/in/mayukh99/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={iconStyle} />
        </a>

        <a href="mailto:sinha.may@northeastern.edu">
          <EmailIcon sx={iconStyle} />
        </a>
      </ContactIconsContainer>

      {/* Email & Phone Info */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          textAlign: "center",
          marginTop: "10px",
          fontSize: isSmallScreen ? "1rem" : "1.5rem",
        }}
      >
        <a
          href="mailto:sinha.may@northeastern.edu"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          sinha.may@northeastern.edu
        </a>
        {" | "}
        <a
          href="tel:+18572255986"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          +1 (857) 225-5986
        </a>
        {" | Boston MA"}
      </Typography>
      <hr style={{ marginTop: "18px", marginBottom: "0" }} />
    </ContactContainer>
  );
}
