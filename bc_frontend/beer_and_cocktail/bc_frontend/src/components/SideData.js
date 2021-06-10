
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const SideData = [
  {
    title: 'Beer',
    path: '/beer',
    icon: <IoIcons.IoIosBeer />,
    cName: 'sidebar-text'
  },
  {
    title: 'Cocktails',
    path: '/cocktails',
    icon: <FaIcons.FaCocktail />,
    cName: 'sidebar-text'
  },
  {
    title: 'Favorites',
    path: '/favorites',
    icon: <GiIcons.GiGlassHeart />,
    cName: 'sidebar-text'
  }

]  