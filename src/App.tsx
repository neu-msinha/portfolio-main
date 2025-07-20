import { useEffect } from "react";
import UserProfileNav from "./component/UserProfileNav/UserProfileNav";
import HeroBodyWithHeroImageAssociation from "./component/herobodyWithTypeWriterEffect/herobody/herobodyWithHeroImageAssociation";
import TerminalContainer from "./component/terminal/TerminalContainer";
import GithubContainer from "./component/github/GithubContainer";
import AboutUser from "./component/about/AboutUser";
import Experience from "./component/experience/Experience";
import Education from "./component/education/Education";
import Footer from "./component/footer/Footer";
import Projects from "./component/projects/Projects";

function App() {
  useEffect(() => {
    document.title = "Software Engineer II | Mayukh Sinha";
  }, []);
  return (
    <>
      <UserProfileNav />
      <HeroBodyWithHeroImageAssociation/>
      <AboutUser/>
      <TerminalContainer/>
      <Experience/>
      <GithubContainer/>
      <Education/>
      <Projects title="Projects"/>
      <Footer/>
    </>
  );
}

export default App;
