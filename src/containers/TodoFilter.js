import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setFilter, FilterOptions } from '../actions'

const Inline = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0px;
  justify-content: space-between;
`
const Link = styled.a`
  text-decoration: underline;
  color: blue;
  cursor:pointer;
`

let FilterLink = ({handleClick}) => {
    return (
        <div>
          <Inline>
            <li>Shows :</li>
            <li><Link onClick={() => handleClick(FilterOptions.SHOW_ALL) }>All</Link></li>
            <li><Link onClick={() => handleClick(FilterOptions.SHOW_ACTIVE) }>Active</Link></li>
            <li><Link onClick={() => handleClick(FilterOptions.SHOW_COMPLETED) }>Completed</Link></li>
          </Inline>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
  handleClick: filter => dispatch(setFilter(filter))
})

FilterLink = connect(null, mapDispatchToProps)(FilterLink)

export default FilterLink;