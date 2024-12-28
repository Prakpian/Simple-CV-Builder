import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'
import PreviewCV from './components/PreviewCV'

function App() {
  const [menuOpen,setMenuOpen] = useState(false)

  const toggleMenu = () => {
      setMenuOpen(!menuOpen)
  }

  const [preview,setPreview] = useState(false)

  const toPreview = (boolean) => {
    setPreview((b) => b = boolean)
    setMenuOpen(menuOpen && !menuOpen)
  }

  const [personalDetail,setPersonalDetail] = useState({firstName: '', lastName: '', profession: '', email: '', phoneNumber: '', linkedin: '', location: '', summary: '',})
  const personalDetailUpdate = (e) => {
    setPersonalDetail({...personalDetail, [e.target.name] : e.target.value})
  }

  const [educationList,setEducationList] = useState([{schoolName: '', courseDegree: '', startDate: '', endDate: ''}])
  const educationUpdate = (e,index) => {
    const update = [...educationList]
    update[index][e.target.name] = e.target.value;
    setEducationList(update)
  }

  const addEducation = () => {
    setEducationList([...educationList, {schoolName: '', courseDegree: '', edStartDate: '', edEndDate: ''}])
  }

  const deleteEducation = (index) => {
    if(educationList.length !== 1) {
    const newArray = educationList.filter((_,i) => i !== index);
    setEducationList(newArray)
    }
  }

  const [experienceList,setExperienceList] = useState([{jobTitle: '', employer: '', location: '', exStartDate: '', exEndDate: '', textBox: ''}])
  const experienceUpdate = (e,index) => {
    const update = [...experienceList]
    update[index][e.target.name] = e.target.value;
    setExperienceList(update)
  }

  const addExperience = () => {
    setExperienceList([...experienceList, {jobTitle: '', employer: '', location: '', exStartDate: '', exEndDate: '', textBox: ''}])
  }

  const deleteExperience = (index) => {
    if(experienceList.length !== 1) {
    const newArray = experienceList.filter((_,i) => i !== index);
    setExperienceList(newArray)
    }
  }

  const [skillList,setSkillList] = useState([{text: ''}]);
  const skillUpdate = (event,index) => {
    const list = [...skillList]
    list[index].text = event.target.value
    setSkillList(list)
    console.log(list)
  }
  
  const addSkill = () => {
    setSkillList([...skillList, {text: ''}])
  }

  const deleteSkill = (index) => {
    if(skillList.length !== 1) {
    const newArray = skillList.filter((_,i) => i !== index);
    setSkillList(newArray)
    }
  }

  const [languageList,setLanguageList] = useState([{text: ''}]);
  const languageUpdate = (event,index) => {
    const list = [...languageList]
    list[index].text = event.target.value
    setLanguageList(list)
  }
  
  const addLanguage = () => {
    setLanguageList([...languageList, {text: ''}])
  }

  const deleteLanguage = (index) => {
    if(languageList.length !== 1) {
    const newArray = languageList.filter((_,i) => i !== index);
    setLanguageList(newArray)
    }
  }
  const personalProps = {personalDetail,personalDetailUpdate}
  const educationProps = {educationList,educationUpdate,addEducation,deleteEducation}
  const experienceProps ={experienceList,experienceUpdate,addExperience,deleteExperience}
  const skillProps = {skillList,skillUpdate,addSkill,deleteSkill}
  const languageProps = {languageList,languageUpdate,addLanguage,deleteLanguage}
  const allProps = {personalProps, educationProps, experienceProps, skillProps, languageProps}
  
  return (
    <>
    <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} toPreview={toPreview}/>
    {!preview ? 
    <UserDetails personalProps={personalProps} educationProps={educationProps} experienceProps={experienceProps} skillProps={skillProps} languageProps={languageProps}/> 
    : <PreviewCV props={allProps}/>
    }
    </>
  )
}

export default App
