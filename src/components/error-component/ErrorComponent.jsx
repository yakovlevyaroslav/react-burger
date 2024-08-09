import PropTypes from 'prop-types';

import errorComponentStyles from './errorComponent.module.css';

function ErrorComponent({ children }) {
  return (
    <div className={`${errorComponentStyles['error-message']}`}>
      {children}
    </div>
  );
}

ErrorComponent.propTypes = {
  children: PropTypes.any
}


export default ErrorComponent;