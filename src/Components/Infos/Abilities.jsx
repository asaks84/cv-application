import EditBtn from '../Elements/EditBtn'
import Lists from './Lists'

function Abilities(){

  return(
    <div className='position-relative'>
      <h2 className='mt-n2 fw-bold'>Skills</h2>
      <Lists />
      <EditBtn />
    </div>
  )
}

export default Abilities