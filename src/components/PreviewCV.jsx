import { useRef } from 'react'
import '../styles/PreviewCV.css'
import Button from './Button'
import { useReactToPrint } from 'react-to-print';

export default function PreviewCV({props}) {
    const personal = props.personalProps.personalDetail;
    const work = props.experienceProps.experienceList;
    const education = props.educationProps.educationList;
    const skill = props.skillProps.skillList;
    const language = props.languageProps.languageList;
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({contentRef})

    return (
        <div id="preview">
        <Button text={'Print CV'} className="print-btn" onClick={reactToPrintFn}/>
        <div className="page" ref={contentRef}>
            <div className="name">
                <h1>Ted Lasso</h1>
            </div>
            <div id='preview-container'>
                <div id='sum-con'>
                    <div>
                        <h2>Profile</h2>
                        <p>{personal.summary}</p>
                    </div>
                    <div id='contact'>
                        <h2>Contact</h2>
                        <div className='mb-i'>
                            <img src="https://img.icons8.com/?size=100&id=9730&format=png&color=000000" alt="" className='icon'/>
                            <p>{personal.number}</p>
                        </div>
                        <div className='mb-i'>
                            <img src="https://img.icons8.com/?size=100&id=12623&format=png&color=000000" alt="" className='icon'/>
                            <p>{personal.email}</p>
                        </div>
                        {personal.linkedin &&
                        <div className='mb-i'>
                            <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="" className='icon'/>
                            <p>{personal.linkedin}</p>
                        </div>}
                        <div className='mb-i'>
                            <img src="https://img.icons8.com/?size=100&id=7880&format=png&color=000000" alt="" className='icon'/>
                            <p>{personal.location}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Work Experience</h2>
                    {work.map((e,index) => {
                        return (
                        <div className='mb' key={index}>
                        <h3>{e.jobTitle}</h3>
                        <p>{e.employer}, {e.location}</p>
                        <p className='mb'>{e.exStartDate} - {e.exEndDate}</p>
                        <p>{e.textBox}</p>
                    </div>
                        )
                    })}
                </div>
                <div>
                    <h2>Education</h2>
                    {education.map((e,index) => {
                        return (
                        <div className='mb' key={index}>
                        <h3>{e.schoolName}</h3>
                        <p>{e.courseDegree}</p>
                        <p className='mb'>{e.edStartDate} - {e.edEndDate}</p>
                    </div>
                        )
                    })}
                </div>
                <div className='split'>
                    {skill[0].text && 
                        <div>
                            <h2>Skill</h2>
                            <ul>
                                {skill.map((e,index) => {
                                    return <li key={index}>{e.text}</li>
                                })}
                            </ul>
                        </div>
                    }
                    {language[0].text &&
                        <div>
                            <h2>Language</h2>
                            <ul>
                                {language.map((e,index) => {
                                    return <li key={index}>{e.text}</li>
                                })}
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
        </div>
    )
}