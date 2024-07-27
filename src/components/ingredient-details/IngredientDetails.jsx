import PropTypes from 'prop-types';

import ingredientDetailsStyles from  './ingredientDetails.module.css';

function ingredientDetails({propIngredient}) {
  return (
    <div className={`${ingredientDetailsStyles['ingedient-details']}`}>
      <img className={`${ingredientDetailsStyles['ingedient-details_image']} mb-4`} src={propIngredient.image} alt={propIngredient.name} />
      <p className={`mb-4 text text_type_main-medium`}>
        {propIngredient.name}
      </p>
      <ul className={`${ingredientDetailsStyles['ingedient-details_list']} mb-5`}>
        <li className={`${ingredientDetailsStyles['ingedient-details_list-item']} text text_type_main mr-5`}>
          <p className={`mb-3`}>
            Калории,ккал
          </p>
          <span className={`text text_type_digits-default`}>
            {propIngredient.calories}
          </span>
        </li>
        <li className={`${ingredientDetailsStyles['ingedient-details_list-item']} text text_type_main mr-5`}>
          <p className={`mb-3`}>
            Белки, г
          </p>
          <span className={`text text_type_digits-default`}>
            {propIngredient.proteins}
          </span>
        </li>
        <li className={`${ingredientDetailsStyles['ingedient-details_list-item']} text text_type_main mr-5`}>
          <p className={`mb-3`}>
            Жиры, г
          </p>
          <span className={`text text_type_digits-default`}>
            {propIngredient.fat}
          </span>
        </li>
        <li className={`${ingredientDetailsStyles['ingedient-details_list-item']} text text_type_main`}>
          <p className={`mb-3`}>
            Углеводы, г
          </p>
          <span className={`text text_type_digits-default`}>
            {propIngredient.carbohydrates}
          </span>
        </li>
      </ul>
    </div>
  )
}

ingredientDetails.propTypes = {
  propIngredients: PropTypes.array
}; 

export default ingredientDetails;