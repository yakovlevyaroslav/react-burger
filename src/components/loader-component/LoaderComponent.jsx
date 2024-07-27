import loaderComponentStyles from './loaderComponent.module.css';

function LoaderComponent() {
  return (
    <div className={`${loaderComponentStyles['loader-message']}`}>
      Идет загрузка...
    </div>
  );
}

export default LoaderComponent;