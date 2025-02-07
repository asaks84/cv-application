import EditBtn from '../Elements/EditBtn'

function JobInfo(){

  return (
    <div className="position-relative mt-1">
        <p className="date mb-0">Feb/2025 until now</p>
        <h4 className='fw-bold mb-0'><span className='position'>Position /</span> Company Name</h4>
        <p className="desciption text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nobis quasi similique dicta ducimus provident modi doloremque! Eaque voluptatibus at beatae eveniet sequi deserunt in vel, facere ea non quibusdam?</p>
        <EditBtn specClass={'start-n1'}/>
      </div>
  )
}

export default JobInfo