import BasicInfo from './Infos/BasicInfo'
import Experiences from './Infos/Experiemces'
import Languages from './Infos/Languages'
import Name from './Infos/Name'
import Profile from './Infos/Profile'
import Skills from './Infos/Skills'

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
        
        <div className="row text-start">
          <Experiences title={'Professional Experiences'} />
        </div>

        <hr className='w-100' />

        <div className="row text-start">
          <Experiences title={'Education'} />
        </div>

        <hr className='w-100' />
        
        <Languages />

      </div>
    </>
  )
}

export default Main