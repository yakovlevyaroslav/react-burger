import burgerIngredientsStyles from '../burgerIngredients.module.css'

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

function Tabs({ current, setCurrent }) {
  return (
    <div className={`${burgerIngredientsStyles['burger-ingredients_tabs']}`}>
      <Tab value="buns" active={current === 'buns'} onClick={() => setCurrent('buns')}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === 'sauces'} onClick={() => setCurrent('sauces')}>
        Соусы
      </Tab>
      <Tab value="mains" active={current === 'mains'} onClick={() => setCurrent('mains')}>
        Начинки
      </Tab>
    </div>
  )
}

Tabs.propTypes = {
  current: PropTypes.string.isRequired,
  setCurrent: PropTypes.func.isRequired
}; 

export default Tabs;