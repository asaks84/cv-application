import cvLogo from './../assets/cv.png'
function Header() {

  return (
    <header>
      <img className='logo' src={cvLogo} alt="CV Application" />
      <h1 className='title'>CV Application</h1>
    </header>
  )
}
export default Header