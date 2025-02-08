function EditBtn({ specClass, onClick, modalName, icon }) {

  const iconClass = icon ? icon : 'bi-pencil-square';
  const basicClasses = 'opacity-25 bi fs-6 position-absolute pb-3 edit';
  const Classes = specClass ? `${specClass}  ${basicClasses} ${iconClass}` : `${basicClasses}  ${iconClass}`

  return (
    <>
      <i
        className={Classes}
        onClick={onClick}
        data-bs-toggle="modal"
        data-bs-target={modalName}>
      </i>
    </>

  );
}

export default EditBtn;