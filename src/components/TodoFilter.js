import React from 'react';
import styled from 'styled-components';

import FilterLink from '../containers/FilterLink';
import { FilterOptions } from '../actions';

const Inline = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0px;
  justify-content: space-between;
`

const TodoFilter = () => {
    return (
        <div>
          <Inline>
            <li>Shows :</li>
            <li><FilterLink filter={FilterOptions.SHOW_ALL}>All</FilterLink></li>
            <li><FilterLink filter={FilterOptions.SHOW_ACTIVE}>Active</FilterLink></li>
            <li><FilterLink filter={FilterOptions.SHOW_COMPLETED}>Completed</FilterLink></li>
          </Inline>
        </div>
    )
}

export default TodoFilter;