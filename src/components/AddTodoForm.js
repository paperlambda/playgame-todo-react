import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom:15px;
`

const AddTodoForm = () => {
    return (
        <Wrapper>
          <form>
            <div>
              <input type="text"/>
              <button>Submit</button>
            </div>
          </form>
        </Wrapper>
    )
}

export default AddTodoForm;