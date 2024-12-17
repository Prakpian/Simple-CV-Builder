import './styles/UserDetails.css'
import PersonalDetail from './PersonalDetail'
import { useState } from 'react'
import EducationDetail from './EducationDetail'

export default function UserDetails() {
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

    return (
        <div className='container'>
            <section>
                <h1 className='section-title'>Pick a layout</h1>
                <div className='layoutList'>
                    <div className='layoutBox'></div>
                    <div className='layoutBox'></div>
                    <div className='layoutBox'></div>
                </div>
            </section>
            <PersonalDetail personalDetail={personalDetail} personalDetailUpdate={personalDetailUpdate}/>
            <EducationDetail educationList={educationList} educationUpdate={educationUpdate} addEducation={addEducation} deleteEducation={deleteEducation}/>
        </div>
    )
}