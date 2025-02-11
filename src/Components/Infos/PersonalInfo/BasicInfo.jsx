
import { useEffect, useState } from 'react'
import EditBtn from '../../Elements/EditBtn'
import { populateStorage, restoreStorage } from '../../../assets/storage';

function BasicInfo() {

  const propBasicInfo = {
    address: 'Address',
    phone: '(00) 00000.0000',
    email: 'youremail@gmail.com',
    portfolio: {text: "asaks' GitHub", link: 'https://github.com/asaks84/cv-application/'}
  }

  const dataBasicInfo = () => (restoreStorage('basicInfo') === null) ? propBasicInfo : JSON.parse(restoreStorage('basicInfo'));

  const [info, setInfo] = useState(dataBasicInfo())

  const handleInfo = (e) => { 
    const { name, value } = e.target; // getting attribute name and value

    setInfo((prev) => {
      if (name.includes('portfolio')) { // check if it's a portfolio info
        return {  // return an object
          ...prev, // make a copy of the original object to edit
          portfolio: {
            ...prev.portfolio, // set the portfolio key to edit
            [name.split(".")[1]]: value.trim(), // use word after '.' as a key for new object
          },
        };
      }
      // not being a portfolio name attribute return an object
      return {
        ...prev, // making a copy from original to edit 
        [name]: value, // setting name as a key from object
      }
    })
  }

  useEffect(() => {
    const modal = document.getElementById("basicInfoModal");

    if (modal) {
      const handleModalClose = () => {
        populateStorage("basicInfo", info);
      };

      modal.addEventListener("hidden.bs.modal", handleModalClose);

      return () => {
        modal.removeEventListener("hidden.bs.modal", handleModalClose);
      };
    }
  }, [info]);

  return (
    <>
      <div className="col basicInfo d-flex flex-row justify-content-end align-items-stretch position-relative p-0">
        <ul className='list-unstyled d-flex flex-column gap-2 text-end pt-3'>
          <li>
            {info.address}
            <i className='bi bi-house-fill'> </i>
          </li>
          <li>
            {info.phone}
            <i className='bi bi-phone-fill'> </i>
          </li>
          <li>
            {info.email}
            <i className='bi bi-envelope-fill'> </i>
          </li>
          <li>
            {(info.portfolio.text !== '')
              ? <>
                <a href={info.portfolio.link} target='_blank'>{info.portfolio.text}</a>
                <i className='bi bi-globe'></i>
              </>
              : <li>&nbsp;</li>
            }
          </li>

        </ul>
        <EditBtn modalName={'#basicInfoModal'} />

        {/* Modal Bootstrap */}
        <div className="modal fade" id="basicInfoModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Item</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                <div className="input-group mb-3">
                  <span className="input-group-text bi bi-house-fill"></span>
                  <input
                    name='address'
                    type="text"
                    className="form-control"
                    aria-label="Address"
                    aria-describedby="basic-addon1"
                    value={info.address}
                    onChange={handleInfo}
                    placeholder="Your Address"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text bi bi-phone-fill"></span>
                  <input
                    name='phone'
                    type="text"
                    className="form-control"
                    aria-label="Address"
                    aria-describedby="basic-addon1"
                    value={info.phone}
                    onChange={handleInfo}
                    placeholder="Your Address"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text bi bi-envelope-fill"></span>
                  <input
                    name='email'
                    type="text"
                    className="form-control"
                    aria-label="Address"
                    aria-describedby="basic-addon1"
                    value={info.email}
                    onChange={handleInfo}
                    placeholder="Your Address"
                  />
                </div>

                <label htmlFor="portfolio">Portfolio info</label>
                <div className="input-group mb-3">
                  <span className="input-group-text bi bi-globe"></span>
                  <input
                    name='portfolio.text'
                    type="text"
                    className="form-control"
                    aria-label="Address"
                    aria-describedby="basic-addon1"
                    value={info.portfolio.text}
                    onChange={handleInfo}
                    placeholder="Text of your portfolio"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Link</span>
                  <input
                    name='portfolio.link'
                    type="text"
                    className="form-control"
                    aria-label="Address"
                    aria-describedby="basic-addon1"
                    value={info.portfolio.link}
                    onChange={handleInfo}
                    placeholder="(00) 00000.0000"
                  />
                </div>

              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  id="closeProfile"
                >Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default BasicInfo