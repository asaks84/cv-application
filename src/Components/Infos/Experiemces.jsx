import EditBtn from '../Elements/EditBtn'
import JobInfo from './JobInfo'

function Experiences(){

  return (
    <div id='experience' className="position-relative">
      <h2 className='mt-n2 fw-bold'>Professional Experiences</h2>
      <EditBtn />

      <JobInfo />
      <JobInfo />
      <JobInfo />
    </div>
  )
}

export default Experiences