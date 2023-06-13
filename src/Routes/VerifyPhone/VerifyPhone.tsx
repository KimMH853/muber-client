import React, { useEffect, useState } from 'react';
import VerifyPhonePresenter from './VerifyPhonePresenter';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { VERIFY_PHONE } from './VerifyPhoneQueries';
import { VerifyPhoneMutation } from '../../types/graphql';
import { toast } from 'react-toastify';
import { isLoggedInVar } from '../../apollo';

const VerifyPhone: React.FC = () => {
    const [verifyKey, setVerifyKey] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (location.state) {
            setPhoneNumber(location.state.phoneNumber);
        }
    }, [location.state]);

    const [verifyPhone] = useMutation<VerifyPhoneMutation>(VERIFY_PHONE, {
        onCompleted(data) {
            const { CompletePhoneVerification } = data;
            if (CompletePhoneVerification.token) {
                localStorage.setItem('token', CompletePhoneVerification.token);
                isLoggedInVar(true);
                navigate('/');
            } else {
                toast.error(CompletePhoneVerification.error);
            }
        },
    });
    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        const value = event.target.value;
        setVerifyKey(value);
    };

    const onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault();
        verifyPhone({ variables: { phoneNumber: phoneNumber, key: verifyKey } });
    };

    return <VerifyPhonePresenter onInputChange={onInputChange} verifyKey={verifyKey} onSubmit={onSubmit} />;
};

export default VerifyPhone;
