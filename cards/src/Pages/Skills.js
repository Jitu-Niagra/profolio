import React from 'react'
import './Skill.scss'

function Skills() {
    return (
        <section>
            {/* Style the progress bar 
            Education bar  */}
            <div className="container">
                <div className="row text-white">
                    {/* Start of my education */}
                    <div className="col-md-6 education">
                        <h1 className="display-4 text-warning">My Education</h1>
                        <small className="text-warning">Certification</small>
                        <h5>2017-2022</h5>
                        <p>
                            <ul>
                                <li>Bachelor of Science (Mathematics) UON</li>
                                <li>Google Associate Android Developer Certification by Andela</li>
                                <li>Huwawei Networking Certification </li>
                                <li>Adobe Graphic Certification</li>
                                <li>Advanced Charted Certificate of Accounting</li>
                            </ul>
                        </p>
                        <p><small>Curriculum Activities</small></p>
                        <p>
                            <ul>
                                <li>Greenpeace Africa  Researcher and Activist</li>
                                <li>YMCA trained Mental health advocate</li>
                                <li>The Journey Cafe Member</li>
                            </ul>
                        </p>
                    </div>
                    {/* End of my education */}
                     {/* Start of my skills*/}
                     <div className="col-md-6">
                        <h1>My Skills</h1>
                        {/* Skill  */}
                        <div className="skill-title d-flex  justify-content-between">
                        <h5 className="Skill">Web Development</h5>
                        <h5 className="percent">85%</h5>
                        </div>
                        <div className="track d-flex ">
                            <div className="bg-warning right ">mmh</div>
                            <div className="wrong bg-danger">mm</div>
                        </div>
                        {/* End of Skill  */}
                        {/* Skill  */}
                        <div className="skill-title d-flex  justify-content-between">
                        <h5 className="Skill">Android Development</h5>
                        <h5 className="percent">85%</h5>
                        </div>
                        <div className="track d-flex ">
                            <div className="bg-warning right ">mmh</div>
                            <div className="wrong bg-danger">mm</div>
                        </div>
                        {/* End of Skill  */}
                        {/* Skill  */}
                        <div className="skill-title d-flex  justify-content-between">
                        <h5 className="Skill">Graphic Design</h5>
                        <h5 className="percent">85%</h5>
                        </div>
                        <div className="track d-flex ">
                            <div className="bg-warning right ">mmh</div>
                            <div className="wrong bg-danger">mm</div>
                        </div>
                        {/* End of Skill  */}
                        {/* Skill  */}
                        <div className="skill-title d-flex  justify-content-between">
                        <h5 className="Skill">Data Anlaysis</h5>
                        <h5 className="percent">85%</h5>
                        </div>
                        <div className="track d-flex ">
                            <div className="bg-warning right ">mmh</div>
                            <div className="wrong bg-danger">mm</div>
                        </div>
                        {/* End of Skill  */}
                        
                    </div>
                    {/* End of my skills*/}
                </div>
            </div>
            
        </section>
    )
}

export default Skills
