function EditBtn({ specClass }) {

  const basicClasses = 'opacity-25 bi bi-pencil-square fs-6 position-absolute top-0 pb-3 end-0';
  const setClasses = specClass ? `${specClass}  ${basicClasses}` : basicClasses


  return (
    <>
      <i 
        className={setClasses}
        ></i>
    </>
  )
}

export default EditBtn