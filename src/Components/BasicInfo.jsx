function BasicInfo() {

  return (
    <div className="col basicInfo d-flex flex-row justify-content-end align-items-stretch position-relative">
            <ul className='list-unstyled d-flex flex-column gap-2 text-end pt-3'>
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
            <i className='opacity-50 bi bi-plus-square-dotted fs-6 position-absolute top-0 pb-3 end-0'></i>
          </div>
  )
}

export default BasicInfo