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
import { fetchSpecies, fetchAddPet } from "../../fetchReq.js";
import { useSelector, useDispatch } from "react-redux";
import { addSpecies } from "../../redux/noticesSlice.js";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeedbackSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),

  name: Yup.string().required("Pet’s name is required"),

  imgURL: Yup.string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/i,
      "Must be a valid image URL (png, jpg, jpeg, gif, bmp, webp)"
    )
    .required("Image URL is required"),

  species: Yup.string().required("Species is required"),

  birthday: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Date must be in format YYYY-MM-DD")
    .required("Birthday is required"),

  sex: Yup.string().required("Sex is required"),
});

export default function AddPetForm() {
  const navigate = useNavigate();
  const speciesOptions = useSelector((state) => state.notices.species);
  const dispatch = useDispatch();
  useEffect(() => {
    const getSpecies = async () => {
      try {
        const res = await fetchSpecies();
        dispatch(addSpecies(res));
      } catch (error) {
        console.error("Помилка завантаження:", error);
      }
    };
    getSpecies();
  }, [dispatch]);

  const initialValues = {
    name: "",
    imgURL: "",
    sex: "",
    title: "",
    birthday: null,
    species: "",
  };

  const handleSubmit = (values, actions) => {
    const currentToken = window.localStorage.getItem("token");
    console.log(values);
    const addNewPet = async () => {
      try {
        const response = await fetchAddPet(values, currentToken);
        console.log("Pet added successfully:", response);
        navigate("/profile", { replace: true });
      } catch (error) {
        console.error("Error adding pet:", error);
        toast.error("Error adding pet", { position: "top-center" });
      }
    };
    addNewPet();
  };

  const handleBackClick = () => {
    navigate("/profile", { replace: true });
  };

  return (
    <div className={css.petFormContainer}>
      <div className={css.addPetFormTitle}>
        <h1 className={css.petFormTitle}>Add my pet /</h1>
        <p className={css.petFormText}>Personal details</p>
      </div>

      <div className={css.addPetFormContainer}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
        >
          <Form className={css.formikForm}>
            <div className={css.iconsContainer}>
              <label className={`${css.iconWrapper} ${css.female}`}>
                <Field type="radio" name="sex" value="female" hidden />
                <IoFemale className={`${css.icon} ${css.femaleIcon}`} />
              </label>
              <label className={`${css.iconWrapper} ${css.male}`}>
                <Field type="radio" name="sex" value="male" hidden />
                <IoMale className={`${css.icon} ${css.maleIcon}`} />
              </label>
              <label className={`${css.iconWrapper} ${css.intersex}`}>
                <Field type="radio" name="sex" value="intersex" hidden />
                <PiGenderIntersexBold
                  className={`${css.icon} ${css.intersexIcon}`}
                />
              </label>
            </div>
            <div className={css.petAvatarContainer}>
              <IoPawOutline className={css.pawIcon} />
            </div>
            <div className={css.formForm}>
              <div className={css.avatarLinkButtonContainer}>
                <Field
                  type="text"
                  name="imgURL"
                  className={css.formStyleAvatar}
                  placeholder="Enter URL"
                />
                <ErrorMessage
                  name="imgURL"
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
                        onChange={(date) => {
                          const formattedDate = date
                            ? date.toISOString().split("T")[0] // "YYYY-MM-DD"
                            : "";
                          form.setFieldValue(field.name, formattedDate);
                        }}
                        dateFormat="yyyy/MM/dd"
                        placeholderText="Birthday"
                        className={css.calendarPicker}
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
                <div className={css.speciesSelectContainer}>
                  <Field as="select" name="species" className={css.typeSelects}>
                    <option value="" disabled hidden>
                      By type
                    </option>
                    <option value="all">Type of pet</option>
                    {speciesOptions.map((species) => (
                      <option key={species} value={species}>
                        {species}
                      </option>
                    ))}
                  </Field>
                </div>
                <ErrorMessage
                  name="species"
                  component="div"
                  className={css.errorText}
                />
              </div>
            </div>
            <div className={css.buttonMenuContainer}>
              <button
                type="button"
                className={css.backButton}
                onClick={handleBackClick}
              >
                Back
              </button>
              <button type="submit" className={css.submitButton}>
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
}
