import EditBtn from './EditBtn'

function Name() {

  return (
    <div className="col-auto name text-start fs-1 position-relative">
      <p className="first m-0 display-4 fw-bold">Name</p>
      <p className="last m-0 display-4 fw-bold text-nowrap">Last Name</p>
      <EditBtn />
    </div>
  )
}

export default Name