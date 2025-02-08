import EditBtn from '../Elements/EditBtn'

function DataInfo({ date, company, position, description }) {

  return (
    <div className="position-relative mt-1">
      <p className="date mb-0">{date}</p>
      <h4 className='fw-bold mb-0'><span className='position'>{position} /</span> {company}</h4>
      <p className="desciption text-black">{description}</p>
      <EditBtn specClass={'start-n1'} />
    </div>
  )
}

export default DataInfo