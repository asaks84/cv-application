import { useState } from 'react'
import EditBtn from '../Elements/EditBtn'

function Profile() {

  const [profile, setProfile] = useState('Write your profile here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, libero provident rerum quo hic placeat, veritatis soluta suscipit quae illum tempore tempora, facilis quos a delectus unde aperiam asperiores sapiente.');

  const handleProfile = (e) => {
    setProfile(e.target.value);
  }

  return (
    <>
      <div className="mt-2 position-relative">
        <p className='text-start pe-3'>{profile}</p>
        <EditBtn modalName={'#editProfile'}/>
      </div>

      {/* Modal Bootstrap */}
      <div className="modal fade" id="editProfile" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Write your profile</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className="form-floating">
                <textarea 
                className="form-control" 
                placeholder="Write your Profile"
                id="floatingTextarea2" 
                style={{height: '100px'}}
                value={profile}
                onChange={handleProfile}
                ></textarea>
              </div>

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                id="closeModalBtn"
              >Close</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile