import EditBtn from '../Elements/EditBtn';

function Lists({ specClass, item, openEditModal, modalName, removeItem }) {



  const basicClasses = 'grid-list mt-0';
  const Classes = specClass ? `${specClass}  ${basicClasses}` : basicClasses;

  return (
    <>
      <ul className={Classes}>

        {item.map((content) => (
          <li key={content.id} className='position-relative'>
            {content.text}

            <EditBtn
              specClass="start-n2"
              modalName={modalName}  // Passando corretamente o modalName
              onClick={() => openEditModal(content)}  // Abre o modal e configura o item
            />
             <EditBtn
             color={'text-danger'}
            icon={'bi-trash'}
            specClass={'start-n3'}
            onClick={() => removeItem(content.id) }
          />
          </li>
        ))}

      </ul>

    </>
  )
}

export default Lists