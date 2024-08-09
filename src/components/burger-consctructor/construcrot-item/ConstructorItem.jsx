import { useDrag, useDrop } from 'react-dnd';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import burgerConstructorStyles from '../burgerConstructor.module.css';
import { moveItem, removeIngredient } from '../../../services/burger/actions';
import { useDispatch, useSelector } from 'react-redux';

function ConstructorItem({ id, index, data }) {
  const dispatch = useDispatch();
  const burger = useSelector(state => state.burger.burger)
  const buns = burger.filter(data => data.type === 'bun');

  const [{isDragging}, refDrag] = useDrag({
    type: 'item',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dragDrop] = useDrop({
    accept: 'item',
    hover: (item) => {
      if (item.index !== index) {
        dispatch(moveItem(item.index, index));
        item.index = index;
      }
    },
  });

  return (
    <li
      ref={(node) => refDrag(dragDrop(node))}
      className={ isDragging ? 
        `${burgerConstructorStyles['burger-constructor_item']}` :
        `${burgerConstructorStyles['burger-constructor_item']} ${burgerConstructorStyles['burger-constructor_item--dragging']}`}

      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <DragIcon />
      <ConstructorElement
        text={data.name}
        price={data.price}
        thumbnail={data.image}
        handleClose={
          buns.length > 0 ?
          () => dispatch(removeIngredient(index + 1)) :
          () => dispatch(removeIngredient(index))
        }
      />
    </li>
  );
}

ConstructorItem.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
};

export default ConstructorItem;
