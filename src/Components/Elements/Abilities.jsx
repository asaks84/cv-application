import {  useEffect, useState } from 'react';
import EditBtn from './EditBtn'
import Lists from './Lists'
import {populateStorage} from './../../assets/storage'

function Abilities({ title, listStyle, data }) {

  const [item, setItem] = useState(data ? data : []);
  const [newItem, setNewItem] = useState('');
  const [editItemId, setEditItemId] = useState(null);

  useEffect(() => {
    populateStorage(title === 'Skills' ? 'skills' : 'languages', item);
  }, [item, title]);

  const addItem = () => {

    if (newItem.trim() !== '') {
      setItem([...item, { id: crypto.randomUUID(), text: newItem }]) // add newItem into a copy of the item array
      setNewItem('');
    }

    populateStorage(title === 'Skills' ? 'skills' : 'languages', item);
  }

  const openEditModal = (item) => {
    if(item.id !== '') {
      setEditItemId(item.id); 
      setNewItem(item.text);  
    }
  };

  const resetInput = () => {
    setNewItem('');
    setEditItemId(null);
  };

  const updateItem = () => {
    if (newItem.trim() !== '') {
      setItem(item.map((elem) =>
        elem.id === editItemId ? { ...elem, text: newItem } : elem
      ));
      setNewItem('');
      setEditItemId(null);
      document.getElementById(`closeModalBtn-${title.split(" ")[0]}`).click();
      populateStorage(title === 'Skills' ? 'skills' : 'languages', item);
    }
  };

  const removeItem = (id) => {
    setItem(item.filter(item => item.id !== id));
    populateStorage(title === 'Skills' ? 'skills' : 'languages', item);
  };

  return (
    <>
      <div className='position-relative'>
        <h2 className='mt-n2 fw-bold'>{title}</h2>
        <Lists 
          specClass={listStyle}
          item={item}
          openEditModal={openEditModal}
          modalName={`#addItemModal-${[title.split(' ')[0]]}`}
          removeItem={removeItem}
        />
        <EditBtn
          icon='bi-plus-square'
          modalName={`#addItemModal-${[title.split(' ')[0]]}`}  // Passando corretamente o modalName
        />
      </div>

      {/* Modal Bootstrap */}
      <div className="modal fade" id={`addItemModal-${[title.split(' ')[0]]}`} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{editItemId ? "Edit Item" : "Add New Item"}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <input
                type="text"
                className="form-control"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Digite o item"
              />

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                id={`closeModalBtn-${title.split(" ")[0]}`}
                onClick={resetInput}
              >Close</button>
              <button
                id={`editBtn--${title.split(" ")[0]}`}
                type="button"
                className={`btn ${editItemId ? 'btn-warning' : 'btn-primary'}`}
                onClick={editItemId ? updateItem : addItem}
              >
                {editItemId ? "Edit" : "Add"}
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Abilities