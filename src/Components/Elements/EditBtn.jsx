function EditBtn({ specClass, onClick, modalName }) {

  const basicClasses = 'opacity-25 bi bi-pencil-square fs-6 position-absolute pb-3 edit';
  const Classes = specClass ? `${specClass}  ${basicClasses}` : basicClasses

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