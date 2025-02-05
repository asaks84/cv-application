import BasicInfo from './BasicInfo'
import Name from './Name'
import Profile from './Profile'

function Main() {

  return (
    <>
      <div className="container text-center border mt-2">
        <div className="row align-items-center justify-content-center">
          <Name />
          <BasicInfo />
          <div className="row p-0 my-2">
            <Profile />
          </div>
        </div>
        <div className="row px-2">
          <hr />
        </div>
      </div>
    </>
  )
}

export default Main