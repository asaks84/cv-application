function EditBtn({ specClass, onClick, modalName, icon, nameBtn, color }) {

  const iconClass = icon ? icon : 'bi-pencil-square';
  const basicClasses = `opacity-25 bi fs-6 position-absolute pb-3 edit ${color ? color : ''}`;
  const Classes = specClass ? `${specClass}  ${basicClasses} ${iconClass}` : `${basicClasses} ${iconClass}`
  
  const conditionalProps = {}
  if(nameBtn) { conditionalProps.id = nameBtn; }
  if(modalName) {
    conditionalProps['data-bs-toggle'] = 'modal'
    conditionalProps['data-bs-target'] = modalName
  }

  return (
    <>
      <i
        className={Classes}
        onClick={onClick}
        {...conditionalProps}
        >
      </i>
    </>

  );
}

export default EditBtn;