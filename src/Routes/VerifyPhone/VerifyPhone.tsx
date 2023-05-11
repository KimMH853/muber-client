import React, { useEffect, useState } from 'react';
import VerifyPhonePresenter from './VerifyPhonePresenter';
import { useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { VERIFY_PHONE } from './VerifyPhoneQueries';
import { VerifyPhoneMutation } from '../../types/graphql';
import { toast } from 'react-toastify';

interface IState {
    verifyKey: string;
    phoneNumber: string;
  }
  


const VerifyPhone: React.FC<IState> = () => {
    const [verifyKey, setVerifyKey] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const location = useLocation();

    useEffect(()=>{
        if(location.state) {
            setPhoneNumber(location.state.phoneNumber);
        }
    },[location.state])
    
    const[verifyPhone] = useMutation<VerifyPhoneMutation>(VERIFY_PHONE, {
        onCompleted(data) {
            const {CompletePhoneVerification} = data;
            console.log(data)
            if(CompletePhoneVerification.ok) {
                toast.success("됐다")
            }else {
                toast.error(CompletePhoneVerification.error)
            }
        }
    })
    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>{

        console.log(event);
        const value = event.target.value;
        setVerifyKey(value);
    }

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(event)
        verifyPhone({ variables: { phoneNumber: phoneNumber, key: verifyKey } });
    }

    return (
        <VerifyPhonePresenter onInputChange={onInputChange} verifyKey={verifyKey} onSubmit={onSubmit} />
    );
};

export default VerifyPhone;