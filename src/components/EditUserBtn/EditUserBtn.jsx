import css from './EditUserBtn.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { FiEdit2 } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import Modal from 'react-modal';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { fetchEditUser } from '../../fetchReq';
import {
    userDataAll,
    userDataID,
    userDataName,
    userDataEmail,
    userDataAvatar,
    userDataPhone,
    userDataToken,
    userDataNoticesViewed,
    userDataNoticesFavorites,
    userDataPets,
    userDataCreatedAt,
    userDataUpdatedAt,
    userDataClear,
} from '../../redux/userInfoSlice.js';

// обязательно для доступности
Modal.setAppElement('#root');

const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    email: Yup.string()
        .matches(
            /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
            'Must be a valid email!'
        )
        .required('Required'),

    avatar: Yup.string()
        .matches(
            /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
            'Must be a valid image URL!'
        )
        .required('Required'),

    phone: Yup.string()
        .matches(/^\+38\d{10}$/, 'Phone must be in format +380XXXXXXXXX')
        .required('Required'),
});

export default function EditUserBtn() {
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.userInfo.name);
    const userAvatar = useSelector((state) => state.userInfo.avatar);
    const userEmail = useSelector((state) => state.userInfo.email);
    const userPhone = useSelector((state) => state.userInfo.phone);
    const [isOpen, setIsOpen] = useState(false);

    const initialValues = {
        name: userName,
        email: userEmail,
        phone: userPhone,
        avatar: userAvatar,
    };

    const handleSubmit = (values, actions) => {
        console.log(values);

        const userEditFetch = async () => {
            try {
                const response = await fetchEditUser(
                    values,
                    localStorage.getItem('token')
                );
                //   console.log(response);
                if (response.status === 200) {
                    const res = response.data;
                    dispatch(userDataName(res.name));
                    dispatch(userDataEmail(res.email));
                    dispatch(userDataAvatar(res.avatar));
                    dispatch(userDataPhone(res.phone));
                    console.log('User information updated successfully');
                    toast.success('Profile updated successfully', {
                        position: 'top-center',
                    });
                    setIsOpen(false);
                    actions.resetForm();
                }
            } catch (error) {
                console.log(error);
                toast.error('Profile update failed', {
                    position: 'top-center',
                });
            }
        };
        userEditFetch();
    };

    return (
        <div className={css.editProfileContainer}>
            <div className={css.profileBtn}>
                {userName}
                <span>
                    <IoPersonSharp className={css.icon} />
                </span>
            </div>
            <button className={css.editBtn} onClick={() => setIsOpen(true)}>
                <span>
                    <FiEdit2 className={css.editPencil} />
                </span>
            </button>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                contentLabel="Пример модального окна"
                style={{
                    content: {
                        width: '335px',
                        height: '473px',
                        margin: 'auto',
                        padding: '40px 20px',
                        background: '#fff',
                        borderRadius: '30px',
                    },
                }}
            >
                <h2 className={css.modalTitle}>Edit information</h2>
                <div className={css.userAvatarContainer}>
                    <span className={css.userAvatar}>
                        {userAvatar ? (
                            <img
                                src={userAvatar}
                                alt="User avatar"
                                className={css.userAvatarPhoto}
                            />
                        ) : (
                            <IoPersonSharp className={css.avatarIcon} />
                        )}
                    </span>
                </div>
                <div className={css.containerBox}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={FeedbackSchema}
                    >
                        <Form>
                            <div className={css.formForm}>
                                <div className={css.avatarLinkButtonContainer}>
                                    <Field
                                        type="text"
                                        name="avatar"
                                        className={css.formStyleAvatar}
                                        placeholder="https://..."
                                    />
                                    <ErrorMessage
                                        name="avatar"
                                        component="div"
                                        className={css.errorText}
                                    />
                                    <div className={css.uploadContainer}>
                                        <p>Upload photo</p>
                                        <span>
                                            <IoCloudUploadOutline
                                                className={css.uploadIcon}
                                            />
                                        </span>
                                    </div>
                                </div>
                                <Field
                                    type="text"
                                    name="name"
                                    className={css.formStyle}
                                    placeholder="Name"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className={css.errorText}
                                />

                                <Field
                                    type="email"
                                    name="email"
                                    className={css.formStyle}
                                    placeholder="Email"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className={css.errorText}
                                />

                                <Field
                                    type="text"
                                    name="phone"
                                    className={css.formStyle}
                                    placeholder="Phone"
                                />
                                <ErrorMessage
                                    name="phone"
                                    component="div"
                                    className={css.errorText}
                                />
                            </div>
                            <button
                                type="submit"
                                className={css.profileEditBtn}
                            >
                                Go to profile
                            </button>
                        </Form>
                    </Formik>
                </div>
            </Modal>
        </div>
    );
}
