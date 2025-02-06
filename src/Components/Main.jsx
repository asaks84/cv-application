import Abilities from './Infos/Abilities'
import BasicInfo from './Infos/BasicInfo'
import Experiences from './Infos/Experiemces'
import Name from './Infos/Name'
import Profile from './Infos/Profile'

function Main() {

  return (
    <>
      <div className="row justify-content-center border mt-2 px-4">
       
        <div className="row align-items-center justify-content-center justify-content-sm-start">
          <Name />
          <BasicInfo />
          <Profile />
        </div>

        <hr className='w-100' />
        
        <div className="row text-start">
          <Abilities />
        </div>

        <hr className='w-100' />
        
        <div className="row text-start">
          <Experiences />
        </div>
      </div>
    </>
  )
}

export default Main