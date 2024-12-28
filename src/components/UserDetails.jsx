import '../styles/UserDetails.css'
import PersonalDetail from './PersonalDetail'
import EducationDetail from './EducationDetail'
import ExperienceDetail from './ExperienceDetail'
import SkillDetail from './SkillDetail'
import LanguageDetail from './LanguageDetail'

export default function UserDetails({personalProps,educationProps,experienceProps,skillProps,languageProps}) {

    return (
        <div className='container'>
            <PersonalDetail {...personalProps}/>
            <EducationDetail {...educationProps}/>
            <ExperienceDetail {...experienceProps}/>
            <SkillDetail {...skillProps}/>
            <LanguageDetail {...languageProps}/>
        </div>
    )
}