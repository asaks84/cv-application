import EditBtn from '../Elements/EditBtn';

function Lists({ specClass, item, openEditModal }) {



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
              modalName={"#addItemModal"}  // Passando corretamente o modalName
              onClick={() => openEditModal(content)}  // Abre o modal e configura o item
            />
          </li>
        ))}

      </ul>

    </>
  )
}

export default Lists