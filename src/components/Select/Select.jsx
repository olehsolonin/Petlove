import Select from "react-select";
import { useField, useFormikContext } from "formik";
import { useSelector } from "react-redux";
import { useState } from "react";

const LocationSelect = ({ name }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const [inputValue, setInputValue] = useState("");

  const locations = useSelector((state) => state.notices.locations);

  const uniqueCities = Array.from(
    new Map(locations.map((loc) => [loc.cityEn, loc])).values()
  );

  const options = uniqueCities.map((loc) => ({
    value: loc.cityEn,
    label: `${loc.cityEn}, ${loc.stateEn} oblast`,
  }));

  const selectedOption =
    options.find((opt) => opt.value === field.value) || null;

  return (
    <div>
      <Select
        name={name}
        options={options}
        placeholder="Оберіть місто або селище"
        onChange={(selected) => {
          setFieldValue(name, selected?.value || "");
          setInputValue(""); // очищаем input после выбора
        }}
        isClearable
        isSearchable
        value={selectedOption}
        inputValue={inputValue}
        onInputChange={(value) => setInputValue(value)}
        menuIsOpen={inputValue.length > 0} // меню открывается только при вводе
        filterOption={(option, inputValue) =>
          option.label.toLowerCase().includes(inputValue.toLowerCase())
        }
        styles={{
          control: (base) => ({
            ...base,
            borderRadius: "30px",
            padding: "6px 12px",
            borderColor: meta.touched && meta.error ? "red" : base.borderColor,
          }),
        }}
      />
      {meta.touched && meta.error && (
        <div style={{ color: "red", fontSize: "0.8rem" }}>{meta.error}</div>
      )}
    </div>
  );
};

export default LocationSelect;
