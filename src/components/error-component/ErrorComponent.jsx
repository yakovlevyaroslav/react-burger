import errorComponentStyles from './errorComponent.module.css';

function ErrorComponent({children}) {
  return (
    <div className={`${errorComponentStyles['error-message']}`}>
      {children}
    </div>
  );
}

export default ErrorComponent;