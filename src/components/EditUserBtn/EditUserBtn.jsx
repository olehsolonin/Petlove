import css from "./EditUserBtn.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import Modal from "react-modal";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoCloudUploadOutline } from "react-icons/io5";

// обязательно для доступности
Modal.setAppElement("#root");

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string()
    .min(3, "Too short")
    .max(256, "Too long")
    .required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
});

export default function EditUserBtn() {
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
    actions.resetForm();
  };

  return (
    <div className={css.editProfileContainer}>
      <button className={css.profileBtn}>
        {userName}
        <span>
          <IoPersonSharp className={css.icon} />
        </span>
      </button>
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
            width: "335px",
            height: "473px",
            margin: "auto",
            padding: "40px 20px",
            background: "#fff",
            borderRadius: "30px",
          },
        }}
      >
        <h2 className={css.modalTitle}>Edit information</h2>
        <div className={css.userAvatarContainer}>
          <span className={css.userAvatar}>
            {userAvatar ? (
              userAvatar
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
                      <IoCloudUploadOutline className={css.uploadIcon} />
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
              <button type="submit" className={css.profileEditBtn}>
                Go to profile
              </button>
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>
  );
}
