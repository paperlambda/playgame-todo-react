import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkWrapper = styled.a`
  text-decoration: ${props => props.active ? 'none' : 'underline'};
  color: ${props => props.active ? 'black':'blue'};
  cursor:pointer;

`

const Link = ({handleClick, children, active}) => {
    return (
        <LinkWrapper active={active} onClick={handleClick}>{children}</LinkWrapper>
    )
}

Link.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default Link;