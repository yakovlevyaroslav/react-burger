import burgerIngredientsStyles from './burgerIngredients.module.css'
import appStyles from '../app/app.module.css'

import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import IngredientItem from './ingredient-item/IngredientItem'
import Tabs from './tabs/Tabs'

function BurgerIngredients({ openModal }) {
  const [current, setCurrent] = useState('buns')

  const ingredients = useSelector(state => state.ingredients.ingredients)

  const containerRef = useRef(null)
  const bunsRef = useRef(null)
  const saucesRef = useRef(null)
  const mainsRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top
      const bunsTop = bunsRef.current.getBoundingClientRect().top - containerTop
      const saucesTop = saucesRef.current.getBoundingClientRect().top - containerTop
      const mainsTop = mainsRef.current.getBoundingClientRect().top - containerTop

      const offset = 100

      if (bunsTop < offset && saucesTop >= offset) {
        setCurrent('buns')
      } else if (saucesTop < offset && mainsTop >= offset) {
        setCurrent('sauces')
      } else if (mainsTop < offset) {
        setCurrent('mains')
      }
    }

    const container = containerRef.current
    container.addEventListener('scroll', handleScroll)
    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const buns = ingredients
  .filter(data => data.type === 'bun')
  .map(data => <IngredientItem key={data._id} data={data} openModal={openModal} />);

  const sauces = ingredients
    .filter(data => data.type === 'sauce')
    .map(data => <IngredientItem key={data._id} data={data} openModal={openModal} />);

  const mains = ingredients
    .filter(data => data.type === 'main')
    .map(data => <IngredientItem key={data._id} data={data} openModal={openModal} />);

  return (
    <div className={`${appStyles['main-block']} mr-10`}>
      <h1 className={`text text_type_main-large mt-10 mb-5`}>Соберите бургер</h1>
      <Tabs current={current} setCurrent={setCurrent} />

      <div ref={containerRef} className={`${burgerIngredientsStyles['burger-ingredients']} ${burgerIngredientsStyles['burger-ingredients__scroll']} mt-10`}>
        
        <div ref={bunsRef} className={`${burgerIngredientsStyles['burger-ingredients_wrapper']}`}>
          <p className='text text_type_main-medium'>Булки</p>
          <ul className={`${burgerIngredientsStyles['burger-ingredients_list']}`}>{buns}</ul>
        </div>

        <div ref={saucesRef} className={`${burgerIngredientsStyles['burger-ingredients_wrapper']}`}>
          <p className='text text_type_main-medium'>Соусы</p>
          <ul className={`${burgerIngredientsStyles['burger-ingredients']}`}>{sauces}</ul>
        </div>


        <div ref={mainsRef} className={`${burgerIngredientsStyles['burger-ingredients_wrapper']}`}>
          <p className='text text_type_main-medium'>Начинки</p>
          <ul className={`${burgerIngredientsStyles['burger-ingredients']}`}>{mains}</ul>
        </div>
      </div>
    </div>
  )
}

BurgerIngredients.propTypes = {
  openModal: PropTypes.func.isRequired
}

export default BurgerIngredients
