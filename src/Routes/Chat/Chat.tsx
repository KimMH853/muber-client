import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { USER_PROFILE } from '../../sharedQueries';
import { GetChatQuery, UserProfileQuery } from '../../types/graphql';
import { GET_CHAT, SEND_MESSAGE, SUBSCRIBE_TO_MESSAGES } from './ChatQueries';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import Message from '../../Components/Message/Message';
import Input from '../../Components/Input/Input';

const Container = styled.div`
    height: 80vh;
    overflow: scroll;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const InputCont = styled.div`
    padding: 0 20px;
`;

const Chat = () => {
    const [messageText, setMessageText] = useState('');

    const { chatId } = useParams();
    const { data: userData } = useQuery<UserProfileQuery>(USER_PROFILE);
    const { data: chatData, subscribeToMore } = useQuery<GetChatQuery>(GET_CHAT, {
        variables: { chatId: parseInt(chatId!) },
    });

    useEffect(() => {
        const unsubscribe = subscribeToMore(subscribeOptions);
        return () => unsubscribe();
    }, [subscribeToMore]);

    const subscribeOptions = {
        document: SUBSCRIBE_TO_MESSAGES,
        updateQuery: (prev: any, { subscriptionData }: any) => {
            if (!subscriptionData.data) {
                return prev;
            }
            const newObject = Object.assign({}, prev, {
                GetChat: {
                    ...prev.GetChat,
                    chat: {
                        ...prev.GetChat.chat,
                        messages: [...prev.GetChat.chat.messages, subscriptionData.data.MessageSubscription],
                    },
                },
            });
            return newObject;
        },
    };

    const [SendChatMessage] = useMutation(SEND_MESSAGE, { refetchQueries: [GET_CHAT] });

    const user = userData?.GetMyProfile.user;
    const chat = chatData?.GetChat?.chat;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = event;
        setMessageText(value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        SendChatMessage({ variables: { chatId: parseInt(chatId!), text: messageText } });
        setMessageText('');
    };

    return (
        <Container>
            {chat && user && (
                <React.Fragment>
                    {chat.messages &&
                        chat.messages.map(message => {
                            if (message) {
                                return (
                                    <Message key={message.id} text={message.text} mine={user.id === message.userId} />
                                );
                            }
                            return null;
                        })}
                </React.Fragment>
            )}
            <InputCont>
                <form onSubmit={handleSubmit}>
                    <Input
                        value={messageText}
                        placeholder={'Type your message'}
                        handleChange={handleChange}
                        name={'message'}
                    />
                </form>
            </InputCont>
        </Container>
    );
};

export default Chat;
