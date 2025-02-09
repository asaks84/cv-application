function EditBtn({ specClass, onClick, modalName, icon, nameBtn }) {

  const iconClass = icon ? icon : 'bi-pencil-square';
  const basicClasses = 'opacity-25 bi fs-6 position-absolute pb-3 edit';
  const Classes = specClass ? `${specClass}  ${basicClasses} ${iconClass}` : `${basicClasses}  ${iconClass}`
  const btnName = nameBtn ? nameBtn : "";
  return (
    <>
      <i
        id={btnName}
        className={Classes}
        onClick={onClick}
        data-bs-toggle="modal"
        data-bs-target={modalName}>
      </i>
    </>

  );
}

export default EditBtn;