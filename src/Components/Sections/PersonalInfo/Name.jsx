import { useState, useEffect } from 'react'
import EditBtn from '../../Elements/EditBtn'
import { populateStorage, restoreStorage } from '../../../assets/storage';

const propName = { first: 'Name', last: 'Last Name' }
const dataName = () => (restoreStorage('name') === null) ? propName : restoreStorage('name');
function Name() {


  const [myName, setName] = useState(dataName());
  useEffect(() => populateStorage("name", myName), [myName]);

  const handleName = (e) => {
    const { name, value } = e.target;
    setName({ ...myName, [name]: value });
  }

  return (
    <>
      <div className="d-flex flex-sm-column col column-gap-2 col-sm-auto text-start position-relative z-1">
        <h1 className="first m-0 display-5 fw-bold">{myName.first}</h1>
        <h1 className="last m-0 display-5 fw-bold text-nowrap">{myName.last}</h1>
        <EditBtn modalName={'#nameModal'} />
      </div>

      {/* Modal Bootstrap */}
      <div className="modal fade" id="nameModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Your Name</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className="input-group mb-3">
                <span className="input-group-text">First Name</span>
                <input
                  name='first'
                  type="text"
                  className="form-control"
                  aria-label="Address"
                  aria-describedby="basic-addon1"
                  value={myName.first}
                  onChange={handleName}
                  placeholder="Write Your Name"
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Last Name</span>
                <input
                  name='last'
                  type="text"
                  className="form-control"
                  aria-label="Address"
                  aria-describedby="basic-addon1"
                  value={myName.last}
                  onChange={handleName}
                  placeholder="Your Last name"
                />
              </div>

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                id="closeModalName"
              >Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Name