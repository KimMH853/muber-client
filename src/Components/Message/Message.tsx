import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div<IProps>`
    background-color: ${props => (props.mine ? '#3498db' : '#7f8c8d')};
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    align-self: ${props => (props.mine ? 'flex-end' : 'flex-start')};
    border-bottom-right-radius: ${props => (props.mine ? '0px' : '20px')};
    border-bottom-left-radius: ${props => (!props.mine ? '0px' : '20px')};
    margin-bottom: 10px;
`;

interface IProps {
    text?: string;
    mine: boolean;
}

const Message: React.FC<IProps> = ({ text, mine }) => {
    return <Container mine={mine}>{text}</Container>;
};

export default Message;
