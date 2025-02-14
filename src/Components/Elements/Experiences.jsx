import { useEffect, useState } from 'react';
import EditBtn from './EditBtn'
import DataInfo from './DataInfo'
import { populateStorage } from '../../assets/storage';
import elementData from './experiencesData.json'

const cleanState = {
  startDate: '',
  endDate: '',
  company: '',
  position: '',
  desc: '',
}

function Experiences({ title, data }) {

  const shortTitle = title.split(' ')[0].toLowerCase();
  const closeBtn = `closeModalExp-${shortTitle}`;
  const editModalID = `editExpModal-${shortTitle}`;
  const areFieldsValid = (item) => item.startDate.trim() !== '' && item.company.trim() !== '' && item.position.trim() !== ''


  const [exp, setExp] = useState(data ? data : []);
  const [newExp, setNewExp] = useState({
    startDate: "",
    endDate: "",
    company: "",
    position: "",
    desc: "",
  });
  const [editExpID, setEditExpID] = useState(null);
  
  useEffect(() => {
    populateStorage(shortTitle, exp);
  },[exp, shortTitle])

  const addItem = () => {
    if (areFieldsValid(newExp)) {
      setExp((prev) => [
        ...prev, {
          id: crypto.randomUUID(),
          startDate: newExp.startDate,
          endDate: newExp.endDate,
          company: newExp.company,
          position: newExp.position,
          desc: newExp.desc,
        }]);
      setNewExp(cleanState);
    }
  }

  const openModalExp = (item) => {
    setEditExpID(item.id);
    setNewExp(item);
  }

  const updateExp = () => {
    if (areFieldsValid(newExp)) {
      setExp(exp.map((item) =>
        item.id === editExpID ? {
          ...item,
          startDate: newExp.startDate,
          endDate: newExp.endDate,
          company: newExp.company,
          position: newExp.position,
          desc: newExp.desc,
        } : item
      ))
      setNewExp(cleanState);
    }
    document.getElementById(closeBtn).click(); // Close Modal
    setEditExpID(null);
  }

  const removeExp = (id) => {
    setExp(exp.filter(item => item.id !== id));
  };


  return (
    <>
      <div id='experience' className="position-relative">
        <h2 className='mt-n2 fw-bold'>{title}</h2>
        <EditBtn
          icon='bi-plus-square'
          modalName={`#${editModalID}`}
        />

        <DataInfo
          list={exp}
          openModal={openModalExp}
          modalName={`#${editModalID}`}
          removeItem={removeExp}
        />
      </div>

      {/* Modal Bootstrap */}
      <div className="modal fade" id={editModalID} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{editExpID ? "Edit Item" : "Add New"}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className="d-flex flex-row">
                <div className="col-6">
                  <div className="input-group">
                    <span className="input-group-text">Start Date</span>
                    <input
                      type="text"
                      className="form-control"
                      value={newExp.startDate}
                      onChange={(e) => setNewExp({ ...newExp, startDate: e.target.value })}
                      placeholder="(dd/mm/yy)"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group justify-content-center">
                    <span className="input-group-text">End Date</span>
                    <input
                      type="text"
                      className="form-control"
                      value={newExp.endDate}
                      onChange={(e) => setNewExp({ ...newExp, endDate: e.target.value })}
                      placeholder="(dd/mm/yy)"
                    />
                    <div className="form-text fs-smaller text-center mt-0 mb-2" id="basic-addon4"><span style={{ color: "red" }}>*</span>Leave it in blank if still here</div>
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  {elementData[shortTitle].labelCompany}
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Company"
                  aria-describedby="basic-addon1"
                  value={newExp.company}
                  onChange={(e) => setNewExp({ ...newExp, company: e.target.value })}
                  placeholder={elementData[shortTitle].placeholderCompany}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">{elementData[shortTitle].labelPosition}</span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Position"
                  aria-describedby="basic-addon1"
                  value={newExp.position}
                  onChange={(e) => setNewExp({ ...newExp, position: e.target.value })}
                  placeholder=""
                />
              </div>

              <div className="input-group mb-3">
                <textarea
                  id="floatingTextarea"
                  style={{ height: '200px' }}
                  type="text"
                  className="form-control"
                  aria-label="Description"
                  aria-describedby="basic-addon1"
                  value={newExp.desc}
                  onChange={(e) => setNewExp({ ...newExp, desc: e.target.value })}
                  placeholder="Write a description here"
                />
              </div>

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                id={closeBtn}
              // onClick={resetInput}
              >Close</button>
              <button
                type="button"
                className={`btn ${editExpID ? 'btn-warning' : 'btn-primary'}`}
                onClick={editExpID ? updateExp : addItem}
              >
                {editExpID ? "Edit" : "Add"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experiences