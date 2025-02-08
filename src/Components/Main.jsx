import Abilities from './Infos/Abilities'
import BasicInfo from './Infos/BasicInfo'
import Experiences from './Infos/Experiemces'
import Name from './Infos/Name'
import Profile from './Infos/Profile'

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
        
        <div className="row text-start">
          <Abilities title={'Skills'} listStyle={'grid2'} />
        </div>

        <hr className='w-100' />
        
        <div className="row text-start">
          <Experiences title={'Professional Experiences'} />
        </div>

        <hr className='w-100' />

        <div className="row text-start">
          <Experiences title={'Education'} />
        </div>

        <hr className='w-100' />
        
        <div className="row text-start">
          <Abilities title={'Languages'} listStyle={'grid1'} />
        </div>

      </div>
    </>
  )
}

export default Main