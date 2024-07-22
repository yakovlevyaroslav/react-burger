import React from 'react';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';

import appHeaderStyles from './appHeader.module.css';

class AppHeader extends React.Component {
  render() {
    return (
      <header className={`${appHeaderStyles.header} pt-4 pb-4 mt-10 mb-10`}>
        <div className={`${appHeaderStyles['header-link']} ${appHeaderStyles['header-link__active']} pl-5 pr-5 ml-2`}>
          <BurgerIcon />
          <p className='pl-2'>
            Конструктор
          </p>
        </div>
        <div className={`${appHeaderStyles['header-link']} pl-5 pr-5`}>
          <ListIcon />
          <p className='pl-2'>
            Лента заказов
          </p>
        </div>
        <i className={appHeaderStyles['header-logo']}>
        <Logo />
        </i>
        <div className={`${appHeaderStyles['header-link']} pl-5 pr-5`}>
          <ProfileIcon />
          <p className='pl-2'>
            Личный кабинет
          </p>
        </div>
      </header>
    );
  }
}

export default AppHeader;