import Button from "./Button";

export default function ExperienceDetail({experienceList,experienceUpdate,addExperience,deleteExperience}) {
    return (
        <section>
            <h1 className="section-title">Work Exprience</h1>
            {experienceList.map((experience,index) => {
                return (
                    <div className="box" key={index}>
                        <div className="single-input">
                            <p>Job title</p>
                            <input type="text" name="jobTitle" value={experience.jobTitle} onChange={(e) => experienceUpdate(e,index)}/>
                        </div>
                        <div className="detail-grid">
                            <div>
                                <p>Employer</p>
                                <input type="text" name="employer" value={experience.employer} onChange={(e) => experienceUpdate(e,index)}/>
                            </div>
                            <div>
                                <p>Location</p>
                                <input type="text" name="location" value={experience.location} onChange={(e) => experienceUpdate(e,index)}/>
                            </div>
                            <div>
                                <p>Start Date</p>
                                <input type="text" name="exStartDate" placeholder="MM/YYYY" value={experience.exStartDate} onChange={(e) => experienceUpdate(e,index)}/>
                            </div>
                            <div>
                                <p>End Date</p>
                                <input type="text" name="exEndDate" placeholder="MM/YYYY" value={experience.exEndDate} onChange={(e) => experienceUpdate(e,index)}/>
                            </div>
                        </div>
                        <div className="textarea-input">
                            <p>Description</p>
                            <textarea name="textBox" value={experience.textBox} onChange={(e) => experienceUpdate(e,index)}></textarea>
                        </div>
                        <Button text='+' className="big-button" onClick={() => addExperience()}/>
                        <Button text={'Delete'} className="big-button" onClick={() => deleteExperience(index)} />
                    </div>
                )
            })}
        </section>
    )
}