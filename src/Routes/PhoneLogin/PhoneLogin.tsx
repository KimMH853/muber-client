import React, { useState } from 'react';
import PhoneLoginPresenter from './PhoneLoginPresenter';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { PHONE_SIGN_IN } from './PhoneQueries';
import { StartPhoneVerificationMutation } from '../../types/graphql';
import { useNavigate } from 'react-router-dom';

const PhoneLogin: React.FC = () => {
    const [countryCode, setCountryCode] = useState('+82');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const [StartPhoneVerification] = useMutation<StartPhoneVerificationMutation>(PHONE_SIGN_IN, {
        onCompleted(data) {
            const { StartPhoneVerification } = data;
            console.log(StartPhoneVerification);
            if (StartPhoneVerification.ok) {
                navigate('/verify-phone', {
                    state: { phoneNumber },
                });
            } else {
                toast.error(StartPhoneVerification.error);
            }
        },
    });

    const onInputChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = event => {
        const {
            target: { name, value },
        } = event;

        if (name === 'countryCode') {
            setCountryCode(value);
        } else if (name === 'phoneNumber') {
            setPhoneNumber(value);
        }
    };

    const onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault();

        const isValid = /^\+[1-9]{1}[0-9]{12}$/.test(`${countryCode}${phoneNumber}`);

        if (isValid) {
            StartPhoneVerification({ variables: { phoneNumber: phoneNumber } });
        } else {
            toast.error('Please write a valid phone number');
        }
    };

    return (
        <PhoneLoginPresenter
            countryCode={countryCode}
            phoneNumber={phoneNumber}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
        />
    );
};

export default PhoneLogin;
