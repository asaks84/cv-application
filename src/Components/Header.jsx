import cvLogo from './../assets/cv.png'
function Header() {

  return (
    <>
        <header className='hidden-print d-flex border-bottom w-100'>
          <img className='logo hidden-print' src={cvLogo} alt="CV Application" />
          <h1 className='title hidden-print'>CV Application</h1>
        </header>
    </>
  )
}
export default Header