import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setFilter } from '../actions'

const Inline = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0px;
  justify-content: space-between;
`

const FilterOptions = () => {
    return (
        <div>
          <Inline>
            <li>Shows :</li>
            <li><a>All</a></li>
            <li><a>Active</a></li>
            <li><a>Completed</a></li>
          </Inline>
        </div>
    )
}

export default FilterOptions;