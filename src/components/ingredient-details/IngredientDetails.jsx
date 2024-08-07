import ingredientDetailsStyles from  './ingredientDetails.module.css';

import { useSelector } from 'react-redux';

function IngredientDetails() {
  const ingredient = useSelector(state => state.ingredient.ingredient)

  return (
    <div className={`${ingredientDetailsStyles['ingedient-details']}`}>
      <img className={`${ingredientDetailsStyles['ingedient-details_image']} mb-4`} src={ingredient[0].image} alt={ingredient[0].name} />
        <p className={`mb-4 text text_type_main-medium`}>
          {ingredient[0].name}
        </p>
        <ul className={`${ingredientDetailsStyles['ingedient-details_list']} mb-5`}>
          <li className={`${ingredientDetailsStyles['ingedient-details_list-item']} text text_type_main mr-5`}>
            <p className={`mb-3`}>
              Калории,ккал
            </p>
            <span className={`text text_type_digits-default`}>
              {ingredient[0].calories}
            </span>
          </li>
          <li className={`${ingredientDetailsStyles['ingedient-details_list-item']} text text_type_main mr-5`}>
            <p className={`mb-3`}>
              Белки, г
            </p>
            <span className={`text text_type_digits-default`}>
              {ingredient[0].proteins}
            </span>
          </li>
          <li className={`${ingredientDetailsStyles['ingedient-details_list-item']} text text_type_main mr-5`}>
            <p className={`mb-3`}>
              Жиры, г
            </p>
            <span className={`text text_type_digits-default`}>
              {ingredient[0].fat}
            </span>
          </li>
          <li className={`${ingredientDetailsStyles['ingedient-details_list-item']} text text_type_main`}>
            <p className={`mb-3`}>
              Углеводы, г
            </p>
            <span className={`text text_type_digits-default`}>
              {ingredient[0].carbohydrates}
            </span>
          </li>
        </ul>
    </div>
  )
}

export default IngredientDetails;