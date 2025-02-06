import BasicInfo from './BasicInfo'
import Name from './Name'
import Profile from './Profile'

function Main() {

  return (
    <>
      <div className="row text-center border mt-2 px-4">
        <div className="row align-items-center justify-content-center justify-content-sm-start">
          <Name />
          <BasicInfo />
          <div className="row g-0 my-2">
            <Profile />
          </div>
        </div>
        <hr className='w-100' />
      </div>
    </>
  )
}

export default Main