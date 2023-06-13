import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import Input from '../../Components/Input/Input';
import { Helmet } from 'react-helmet';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import { useMutation, useQuery } from '@apollo/client';
import { UpdateProfileMutation, UserProfileQuery } from '../../types/graphql';
import { USER_PROFILE } from '../../sharedQueries';
import { UPDATE_PROFILE } from './EditAccountQueries';
import PhotoInput from '../../Components/PhotoInput/PhotoInput';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { storageService } from '../../firebase';

const Container = styled.div``;

const ExtendedForm = styled.form`
    padding: 0px 40px;
`;

const ExtendedInput = styled(Input)`
    margin-bottom: 30px;
`;

interface UserInfo {
    firstName: string;
    lastName: string;
    email?: string | null;
    profilePhoto?: string | null;
    uploading: boolean;
}

const EditAccount: React.FC = () => {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        firstName: '',
        lastName: '',
        email: '',
        profilePhoto: '',
        uploading: false,
    });
    const [attachment, setAttachment] = useState('');
    const { data } = useQuery<UserProfileQuery>(USER_PROFILE);

    const [UpdateMyProfile] = useMutation<UpdateProfileMutation>(UPDATE_PROFILE, { refetchQueries: [USER_PROFILE] });

    useEffect(() => {
        updateField();
    }, [data]);

    const updateField = () => {
        if (data) {
            const {
                GetMyProfile: { user },
            } = data;
            if (user) {
                const { firstName, lastName, email, profilePhoto } = user;

                setUserInfo(prevState => ({
                    ...prevState,
                    firstName,
                    lastName,
                    email,
                    profilePhoto,
                }));
            }
        }
    };

    const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let attachmentUrl: string | null = null;
        if (attachment !== '') {
            const fileRef = ref(storageService, `${uuidv4()}`);
            const response = await uploadString(fileRef, attachment, 'data_url');
            attachmentUrl = await getDownloadURL(response.ref);
        }
        console.log(attachmentUrl);
        UpdateMyProfile({
            variables: {
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                email: userInfo.email,
                profilePhoto: attachmentUrl,
            },
        });
        setUserInfo(prevState => ({
            ...prevState,
            uploading: false,
        }));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value, files },
        } = event;
        if (files) {
            setUserInfo(prevState => ({
                ...prevState,
                uploading: true,
            }));
        }

        setUserInfo(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { files },
        } = event;
        if (files) {
            const theFile = files[0];
            const reader = new FileReader();
            reader.onloadend = finishedEvent => {
                console.log(finishedEvent);
                const { result } = finishedEvent.currentTarget as FileReader;
                setAttachment(result as string);
            };
            reader.readAsDataURL(theFile);
        }
    };

    return (
        <Container>
            <Helmet>
                <title>Edit Account | Number</title>
            </Helmet>
            <Header title={'Edit Account'} backTo={'/'} />
            <ExtendedForm onSubmit={HandleSubmit}>
                <PhotoInput uploading={userInfo.uploading} fileUrl={userInfo.profilePhoto} onChange={onFileChange} />
                <ExtendedInput
                    handleChange={handleChange}
                    type={'text'}
                    name={'firstName'}
                    value={userInfo.firstName}
                    placeholder={'First name'}
                />
                <ExtendedInput
                    handleChange={handleChange}
                    type={'text'}
                    name={'lastName'}
                    value={userInfo.lastName}
                    placeholder={'Last name'}
                />
                <ExtendedInput
                    handleChange={handleChange}
                    type={'email'}
                    name={'email'}
                    value={userInfo.email as string}
                    placeholder={'Email'}
                />
                <Button value={'update'} />
            </ExtendedForm>
            `
        </Container>
    );
};

export default EditAccount;
