import cvLogo from './../assets/cv.png'
function Header() {

  return (
    <>
        <header className='d-flex border-bottom w-100'>
          <img className='logo' src={cvLogo} alt="CV Application" />
          <h1 className='title'>CV Application</h1>
        </header>
    </>
  )
}
export default Header