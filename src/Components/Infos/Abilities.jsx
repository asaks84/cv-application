import { useState } from 'react';
import EditBtn from '../Elements/EditBtn'
import Lists from './Lists'

function Abilities({ title, listStyle }) {

  const [item, setItem] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editItemId, setEditItemId] = useState(null);

  const addItem = () => {
    
    if (newItem.trim() !== '') {
      setItem([...item, { id: crypto.randomUUID(), text: newItem }]) // add newItem into a copy of the item array
      setNewItem('');
    }
  }

  const openEditModal = (item) => {
    setEditItemId(item.id); // Define o ID do item a ser editado
    setNewItem(item.text);  // Preenche o input com o texto do item
  };

  const resetInput = () => {
    setNewItem('');
    setEditItemId(null);
  };

  const updateItem = () => {
    if (newItem.trim() !== '') {
      setItem(item.map((item) =>
        item.id === editItemId ? { ...item, text: newItem } : item
      ));
      setNewItem('');
      setEditItemId(null);
      document.getElementById('closeModalBtn').click(); // Fecha o modal
    }
  };

  return (
    <>
    <div className='position-relative'>
      <h2 className='mt-n2 fw-bold'>{title}</h2>
      <Lists specClass={listStyle} item={item} openEditModal={openEditModal} />
      <EditBtn
        modalName={"#addItemModal"}  // Passando corretamente o modalName
        onClick={() => openEditModal()}  // Abre o modal e configura o item
      />
    </div>

    {/* Modal Bootstrap */}
    <div className="modal fade" id="addItemModal" tabIndex="-1" aria-hidden="true">
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
                id="closeModalBtn"
                onClick={resetInput}
                >Close</button>
              <button
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