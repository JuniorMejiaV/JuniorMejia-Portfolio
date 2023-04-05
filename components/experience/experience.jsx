import Card from 'react-bootstrap/Card'

function Jobs() {
    return(
        <div className="experience d-flex flex-column mx-3">
            <h3 className="mt-3"><u>Experience</u></h3>
            <Card className="twinlakes-card d-flex flex-column flex-sm-column flex-md-column flex-lg-row my-3 mx-3">
                <img className="twinlakeslogo my-3" src="/TwinLakes.png" alt="Twin Lakes logo" />
                <div className="twinlakes-info d-flex flex-row align-items-center">
                    <div className="twinlakes mx-3">
                        <h4><b>Twin Lakes</b></h4>
                        <h4><i>Technical Support Representative</i></h4>
                        <ul>
                            <li className="my-3 ms-3">Provideed technical support through various communication channels via Telephone, Email, and chat.</li>
                            <li className="my-3 ms-3">   Assisted with the installation and testing of customer equipment, and reduce the need for ticket escalations.</li>
                            <li className="my-3 ms-3">   Ensured service order work is completed, maintained, and updated all necessary plant records, and worked with other departments to ensure customer satisfaction.</li>
                            <li className="my-3 ms-3">   Provided outstanding customer service to ensure all products were functioning and professional assistance with any service request.</li>
                        </ul>
                    </div>
                    <div className="graduation d-flex flex-column align-items-end mx-3">
                        <p className="my-3 d-flex flex-nowrap">Jan. 2022 - Present</p>
                    </div>
                </div>
            </Card>
            <hr></hr>
            <Card className="its-card d-flex flex-row my-3 mx-3 flex-column flex-sm-column flex-md-column flex-lg-row">
                <img className="itslogo my-3" src="/TennesseeTech.png" alt="Tennessee Tech logo" />
                <div className="its-info d-flex flex-row align-items-center">
                    <div className="its mx-3">
                        <h4><b>Tennessee Technological University</b></h4>
                        <h4><i>Student Technology Assistant</i></h4>
                        <ul>
                            <li className="my-3 ms-3">Provided students with university-owned computer hardware and used ticketing software to issue tickets.</li>
                            <li className="my-3 ms-3">Assisted students, faculty, and staff with basic software troubleshooting skills, and provided maintenance to university-owned printers.</li>
                            <li className="my-3 ms-3">Utilized Microsoft office suite to create and design PowerPoints and workflow charts to maximize efficiency for future employees in training.</li>
                        </ul>
                    </div>
                    <div className="graduation d-flex flex-column align-items-end mx-3">
                        <p className="my-3">Summer 2021</p>
                    </div>
                </div>
            </Card>
            <hr></hr>
            <Card className="saic-card d-flex flex-row my-3 flex-column flex-sm-column flex-md-column flex-lg-row">
                    <img className="saiclogo my-3 mx-3 d-flex align-items-center justify-content-center" src="/SAIC.png" alt="SAIC logo" />
                    <div className="saic-info d-flex flex-row align-items-center">
                        <div className="saic mx-3">
                            <h4><b>SAIC</b></h4>
                            <h4><i>Tier 1 IT Helpdesk Specialist</i></h4>
                            <ul>
                            <li className="my-3 ms-3">Contracted to the Federal Aviation Administration (FAA) contract.</li>
                            <li className="my-3 ms-3">Resolved technical problems and answered queries through various channels such as telephone, chat, email, and tickets submitted online.</li>
                            <li className="my-3 ms-3">Assisted customers in diagnosing, identifying, analyzing, and resolving problems by utilizing technical skills, historical database records, and knowledgeable documentation.</li>
                            </ul>
                        </div>
                        <div className="graduation d-flex flex-column align-items-end col-2">
                            <p className="my-3 mx-3">Oct. - Dec. 2021</p>
                        </div>
                    </div>
                </Card>
        </div>
    )
}

export default Jobs;