import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

const Wrapper = styled.div`
    margin-bottom:15px;
`

let AddTodoForm = ({dispatch}) => {
    let input;

    const handleSubmit = (e) => {
      e.preventDefault();

      if(!input.value.trim) return;
      
      dispatch(addTodo(input.value))
      input.value = '';
    }

    return (
        <Wrapper>
          <form onSubmit={e => handleSubmit(e)}>
            <div>
              <input type="text" ref={node => {
                input = node
              }}/>
              <button type="submit">Submit</button>
            </div>
          </form>
        </Wrapper>
    )
}

AddTodoForm = connect()(AddTodoForm)

export default AddTodoForm;