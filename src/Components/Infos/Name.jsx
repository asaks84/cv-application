import EditBtn from '../Elements/EditBtn'

function Name() {

  return (
    <div className="col-auto text-start fs-1 position-relative z-1">
      <h1 className="first m-0 display-5 fw-bold">Name</h1>
      <h1 className="last m-0 display-5 fw-bold text-nowrap">Last Name</h1>
      <EditBtn />
    </div>
  )
}

export default Name