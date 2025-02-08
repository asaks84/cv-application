import EditBtn from '../Elements/EditBtn'
import DataInfo from './DataInfo'

function Experiences({ title }){

  return (
    <div id='experience' className="position-relative">
      <h2 className='mt-n2 fw-bold'>{title}</h2>
      <EditBtn />

      <DataInfo 
        date={'Feb/2025 until now'}
        company={'Company Name'}
        position={'Position'}
        description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nobis quasi similique dicta ducimus provident modi doloremque! Eaque voluptatibus at beatae eveniet sequi deserunt in vel, facere ea non quibusdam?'}
      />
      <DataInfo 
        date={'Feb/2023 to Apr/2024'}
        company={'Company Name'}
        position={'Position'}
        description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nobis quasi similique dicta ducimus provident modi doloremque! Eaque voluptatibus at beatae eveniet sequi deserunt in vel, facere ea non quibusdam?'}
      />
      <DataInfo 
        date={'Feb/2025 until now'}
        company={'Company Name'}
        position={'Position'}
        description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nobis quasi similique dicta ducimus provident modi doloremque! Eaque voluptatibus at beatae eveniet sequi deserunt in vel, facere ea non quibusdam?'}
      />
    </div>
  )
}

export default Experiences