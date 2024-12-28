import Button from "./Button"

export default function EducationDetail({educationList,educationUpdate,addEducation,deleteEducation}) {
    return (
        <section>
                <h1 className="section-title">Education</h1>
                {educationList.map((education,index) => {
                    return (
                        <div className='box' key={index}>
                        <div className="detail-grid">
                            <div>
                                <p>School name</p>
                                <input type="text" name='schoolName' value={education.schoolName} onChange={(e) => educationUpdate(e,index)}/>
                            </div>
                            <div>
                                <p>Course and Degree</p>
                                <input type="text" name='courseDegree' placeholder='e.g Graphic Design (A) - A level' value={education.courseDegree} onChange={(e) => educationUpdate(e,index)}/>
                            </div>
                            <div>
                                <p>Start date</p>
                                <input type="text" name="edStartDate" placeholder='MM/YYYY' value={education.edStartDate} onChange={(e) => educationUpdate(e,index)}/>
                            </div>
                            <div>
                                <p>End date</p>
                                <input type="text" name="edEndDate" placeholder='MM/YYYY or Present' value={education.edEndDate} onChange={(e) => educationUpdate(e,index)}/>
                            </div>
                        </div>
                        <Button text={'+'} className={'big-button'} onClick={() => addEducation()}/>
                        <Button text={'Delete'} className={'big-button'} onClick={() => deleteEducation(index)}/>
                    </div>
                    )
                })}
            </section>
    )
}