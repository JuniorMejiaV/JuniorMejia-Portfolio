import Card from 'react-bootstrap/Card'

function Education() {
    return (
        <>
        <div className='mx-3 my-3'>
            <Card className="education col-11 d-flex mx-3 align-items-start flex-column flex-column flex-sm-column flex-md-column flex-lg-column">
                <h3><u>Education</u></h3>
                <div className="education d-flex flex-column flex-sm-column flex-md-column flex-lg-row">
                    <img className="tntechlogo my-3" src="/TennesseeTech.png" alt="Tennessee Tech logo" />
                    <div className="school-info d-flex flex-row align-items-center flex-row flex-sm-row flex-md-row flex-lg-row">
                        <div className="school mx-3">
                            <h4><b>Tennessee Technological Universirty</b></h4>
                            <ul>
                                <li className="my-3"><i>Bachelor of Science in Business Administration</i></li>
                                <li className="my-3">Majoring in <i>Business Information and Technology</i></li>
                            </ul>
                        </div>
                        <div className="graduation d-flex flex-column align-items-end">
                            <p className="my-3">Dec. 2022</p>
                            <p className="my-3"><i>GPA : 3.08</i></p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
        </>
    )
}

export default Education;