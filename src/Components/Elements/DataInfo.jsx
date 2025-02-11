import EditBtn from './EditBtn'

function DataInfo({ list, openModal, removeItem, modalName }) {

  return (
    <>
      {list.map((content) => (
        <div key={content.id} className="position-relative mt-1">
          <p className="date mb-0">{content.startDate} - {content.endDate ? content.endDate : 'present'}</p>
          <h4 className='fw-bold mb-0'><span className='position'>{content.position} /</span> {content.company}</h4>
          <p className="desciption text-black">{content.desc}</p>
          <EditBtn 
            specClass={'start-n1'}
            modalName={modalName}
            onClick={() => openModal(content)}
          />
          <EditBtn
            color={'text-danger'}
            icon={'bi-trash'}
            specClass={'start-n2'}
            onClick={() => removeItem(content.id) }
          />
        </div>
      ))}

      
    </>
  )
}

export default DataInfo