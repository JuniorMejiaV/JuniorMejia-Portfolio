//Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Button from 'react-bootstrap/Button'

function Github() {
    window.open('https://github.com/JuniorMejiaV/PersonalProjects')
 }

function LinkedIn() {
    window.open('https://www.linkedin.com/in/junior-mejia-2bb603150')
 }

function Header() {

    return (
        <>
            <div className="text-center">
                <h3 className="mx-2">Junior Mejia</h3>
                <h3 className="mx-2 text-center">Cookeville, TN</h3>
                <ul className="icon-list d-flex flex-row mx-2 my-2 gap-2 justify-content-center align-items-center">
                    <a onClick={Github}><FontAwesomeIcon icon={faGithub} size='2x' /></a>
                    <a onClick={LinkedIn}><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
                </ul>
                <h5 className="mx-2 text-center">Highly motivated graduate, I am eager to begin my career as an entry-level software developer. I am excited to apply my skills and gain meaningful experience in a dynamic and innovative company that shares my passion for technology. I am confident that I can make valuable contributions towards achieving the company's goals.</h5>
                <a className="resumeDownload" href="Mejia_Junior.pdf" download="Mejia_Junior.pdf"><Button id="Buttons" className="project-btn btn btn-sm">Resume Download</Button></a>
            </div>
        </>
    )
}

export default Header;