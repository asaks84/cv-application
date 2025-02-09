import EditBtn from '../Elements/EditBtn'

function DataInfo({ list, openModal }) {

  

  return (
    <>
      {list.map((content) => (
        <div key={content.id} className="position-relative mt-1">
          <p className="date mb-0">{content.startDate} - {content.endDate ? content.endDate : 'present'}</p>
          <h4 className='fw-bold mb-0'><span className='position'>{content.position} /</span> {content.company}</h4>
          <p className="desciption text-black">{content.desc}</p>
          <EditBtn 
            specClass={'start-n1'}
            modalName={'#editExpModal'}
            onClick={() => openModal(content)}
          />
        </div>
      ))}

      
    </>
  )
}

export default DataInfo