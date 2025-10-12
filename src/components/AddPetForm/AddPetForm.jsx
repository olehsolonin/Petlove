import css from "./AddPetForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoFemale } from "react-icons/io5";
import { IoMale } from "react-icons/io5";
import { PiGenderIntersexBold } from "react-icons/pi";
import { IoPawOutline } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from "react-icons/ci";
import { useEffect } from "react";

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
      <div className={css.addPetFormContainer}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          //  validationSchema={FeedbackSchema}
        >
          <Form className={css.formikForm}>
            <div className={css.formForm}>
              <div className={css.avatarLinkButtonContainer}>
                <Field
                  type="text"
                  name="avatar"
                  className={css.formStyleAvatar}
                  placeholder="Enter URL"
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
                name="title"
                className={css.formStyle}
                placeholder="Title"
              />
              <ErrorMessage
                name="title"
                component="div"
                className={css.errorText}
              />

              <Field
                type="text"
                name="name"
                className={css.formStyle}
                placeholder="Pet’s Name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className={css.errorText}
              />

              <div className={css.typeAndBirthdayContainer}>
                <div className={css.calendarContainer}>
                  <Field name="birthday">
                    {({ field, form }) => (
                      <DatePicker
                        {...field}
                        selected={field.value ? new Date(field.value) : null}
                        onChange={(date) =>
                          form.setFieldValue(field.name, date)
                        }
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Birthday"
                        className={css.calendarPicker}
                        //   isClearable
                      />
                    )}
                  </Field>
                  <CiCalendar className={css.calendarIcon} />
                </div>
                <ErrorMessage
                  name="birthday"
                  component="div"
                  className={css.errorText}
                />
                <Field
                  type="text"
                  name="species"
                  className={css.formStyleType}
                  placeholder="Type of pet"
                />
                <ErrorMessage
                  name="species"
                  component="div"
                  className={css.errorText}
                />
              </div>
            </div>
            <button type="submit" className={css.profileEditBtn}>
              Go to profileeee
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
