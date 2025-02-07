import EditBtn from '../Elements/EditBtn'

function BasicInfo() {

  return (
    <div className="col basicInfo d-flex flex-row justify-content-end align-items-stretch position-relative p-0">
      <ul className='list-unstyled d-flex flex-column gap-0 text-end pt-3'>
        <li>
          Address
          <i className='bi bi-house-fill'> </i>
        </li>
        <li>
          Phone
          <i className='bi bi-phone-fill'> </i>
        </li>
        <li>
          E-mail
          <i className='bi bi-envelope-fill'> </i>
        </li>
        <li>
          Portfolio
          <i className='bi bi-globe'></i>
        </li>
      </ul>
      <EditBtn />
    </div>
  )
}

export default BasicInfo