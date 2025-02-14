import BasicInfo from './Sections/PersonalInfo/BasicInfo'
import Languages from './Sections/Languages/Languages'
import Name from './Sections/PersonalInfo/Name'
import Profile from './Sections/PersonalInfo/Profile'
import Skills from './Sections/Skills/Skills'
import Education from './Sections/Education/Education'
import Professional from './Sections/Professional/Professional'
import Courses from './Sections/Courses/Courses'

function Main() {

  return (
    <>
      <div id='sheet' className="row justify-content-center border mt-2 px-4">

        <div className="row align-items-center justify-content-center justify-content-sm-start">
          <Name />
          <BasicInfo />
          <Profile />
        </div>

        <hr className='w-100' />

        <Professional />

        <hr className='w-100' />

        <Education />

        <hr className='w-100' />

        <Courses />

        <hr className='w-100' />

        <Languages />
        
        <hr className='w-100' />
        
        <Skills />

      </div>
    </>
  )
}

export default Main