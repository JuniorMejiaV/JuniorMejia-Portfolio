import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import LearnMore from './projectmodal';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDatabase } from "@fortawesome/free-solid-svg-icons";
// import { faHTML5Logo, faAlternateCSS3Logo, faPHP } from "@fortawesome/free-brands-svg-icons";

function Projects() {

    return (
        <div>
            <Card className='projects mx-3'>
                <Card.Body>
                    <h3><u>Projects</u></h3>
                    {/* <Card.Title className='mb-2 text-center'>Technology Stack</Card.Title>
                    <Card.Subtitle className='mb-3 text-center'>Bootstrap, Nextjs, MySQL</Card.Subtitle> */}
                        {/* Start Project List */}
                    <div className='d-flex col-12 my-3 justify-content-center align-items-center flex-column flex-sm-column flex-md-column flex-lg-row'>
                        <Card className="card-projects card mx-3 my-3 col-11 col-sm-11 col-md-11 col-lg-3">
                            <Card.Img variant="top" src="/portfolio.png" />
                            <div>
                                <h5 className="card-title text-center">Personal Portfolio</h5>
                                <div className='Tech Stack'>
                                    {/* <FontAwesomeIcon icon="faBrands, faHTML5Logo" />
                                    <FontAwesomeIcon icon={faAlternateCSS3Logo} />
                                    <FontAwesomeIcon icon={faJavaScript(JS)} />
                                    <FontAwesomeIcon icon={faPHP} />
                                    <FontAwesomeIcon icon={faDatabase} /> */}
                                </div>
                                <LearnMore />
                            </div>
                        </Card>
                        {/* <Card className="card-projects card mx-3 my-3 col-11 col-sm-11 col-md-11 col-lg-3">
                            <Card.Img variant="top" src="/UCHRARewards.png" />
                            <div>
                                <h5 className="card-title text-center">UCHRA Rewards System</h5>
                                <div className='Tech Stack'>
                                    <FontAwesomeIcon icon="faBrands, faHTML5Logo" />
                                    <FontAwesomeIcon icon={faAlternateCSS3Logo} />
                                    <FontAwesomeIcon icon={faJavaScript(JS)} />
                                    <FontAwesomeIcon icon={faPHP} />
                                    <FontAwesomeIcon icon={faDatabase} />
                                </div>
                                <div className='buttons d-flex gap-2 justify-content-center mx-auto my-3'>
                                    <Button className='project-btn col-6'>Learn More</Button>
                                    <Button className='project-btn col-6'>Live Demo</Button>
                                </div>
                            </div>
                        </Card> */}
                        {/* <Card className="card-projects card mx-3 my-3 col-11 col-sm-11 col-md-11 col-lg-3">
                            <Card.Img variant="top" src="UCHRADashboard.png" />
                            <div>
                                <h5 className="card-title text-center">UCHRA Dashboard</h5>
                                <div className='Tech Stack'>
                                    <FontAwesomeIcon icon={faHTML5Logo} />
                                    <FontAwesomeIcon icon={faAlternateCSS3Logo} />
                                    <FontAwesomeIcon icon={faJavaScript(JS)} />
                                    <FontAwesomeIcon icon={faPHP} />
                                    <FontAwesomeIcon icon={faDatabase} />
                                </div>
                                <div className='buttons d-flex gap-2 justify-content-center mx-auto my-3'>
                                    <Button className='project-btn col-6'>Learn More</Button>
                                    <Button className='project-btn col-6'>Live Demo</Button>
                                </div>
                            </div>
                        </Card> */}
                    </div>
                        {/* End Project List */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default Projects;