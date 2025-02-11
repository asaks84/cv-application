import BasicInfo from './Infos/PersonalInfo/BasicInfo'
import Languages from './Infos/Languages/Languages'
import Name from './Infos/PersonalInfo/Name'
import Profile from './Infos/PersonalInfo/Profile'
import Skills from './Infos/Skills'
import Education from './Infos/Education/Education'
import Personal from './Infos/Professional/Personal'

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

        <Skills />

        <hr className='w-100' />

        <Personal />

        <hr className='w-100' />

        <Education />

        <hr className='w-100' />

        <Languages />

      </div>
    </>
  )
}

export default Main