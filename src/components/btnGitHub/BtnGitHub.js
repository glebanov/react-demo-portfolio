import "./style.css";
import gitHubIcon from "./gitHub-black.svg";

const DtnGitHub = ({ link }) => {
  return (
    <a href={link} target="blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default DtnGitHub;
