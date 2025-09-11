import css from "./AddPetForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoFemale } from "react-icons/io5";
import { IoMale } from "react-icons/io5";
import { PiGenderIntersexBold } from "react-icons/pi";
import { IoPawOutline } from "react-icons/io5";

export default function AddPetForm() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    avatar: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
  };
  return (
    <div className={css.petFormContainer}>
      <div className={css.addPetFormTitle}>
        <h1 className={css.petFormTitle}>Add my pet /</h1>
        <p className={css.petFormText}>Personal details</p>
      </div>
      <div className={css.iconsContainer}>
        <div className={`${css.iconWrapper} ${css.female}`}>
          <IoFemale className={`${css.icon} ${css.femaleIcon}`} />
        </div>
        <div className={`${css.iconWrapper} ${css.male}`}>
          <IoMale className={`${css.icon} ${css.maleIcon}`} />
        </div>
        <div className={`${css.iconWrapper} ${css.intersex}`}>
          <PiGenderIntersexBold className={`${css.icon} ${css.intersexIcon}`} />
        </div>
      </div>
      <div className={css.petAvatarContainer}>
        <IoPawOutline className={css.pawIcon} />
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          //  validationSchema={FeedbackSchema}
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
                    {/* <IoCloudUploadOutline className={css.uploadIcon} /> */}
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
    </div>
  );
}
