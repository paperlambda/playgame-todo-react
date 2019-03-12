import React from 'react';
import styled from 'styled-components';

const DetailWrapper = styled.div`
    border: 1px solid #cccccc;
    border-radius: 4px;
    padding: 8px 12px;
    margin-left:15px;
    width: 250px;
    height: auto;
`

const DetailTitle = styled.h4`
    margin-top:4px;
`

const TodoDetail = ({todo}) => {
    let templateDetail;
    if(todo){
        templateDetail = (
            <DetailWrapper>
                <DetailTitle>{todo.title}</DetailTitle>
                <p>Status : {todo.completed ? 'Completed': 'Active'}</p>
            </DetailWrapper>
        )
    } else {
        templateDetail = (<div></div>)
    }
    return (
        templateDetail
    )
}

export default TodoDetail