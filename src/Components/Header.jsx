import cvLogo from './../assets/cv.png'
function Header() {

  return (
    <>
      <header className='hidden-print d-flex border-bottom w-100'>
        <div className="hidden-print col-8 d-flex">
          <img className='logo hidden-print' src={cvLogo} alt="CV Application" />
          <h1 className='title hidden-print'>CV Application</h1>
        </div>
        <div className="col-4 d-flex justify-content-right align-items-center hidden-print">
          <button className="hidden-print btn btn-light mt-3 ms-auto" onClick={() => window.print()}>
            <i className="hidden-print bi bi-printer"></i>
          </button>
        </div>
      </header>
    </>
  )
}
export default Header