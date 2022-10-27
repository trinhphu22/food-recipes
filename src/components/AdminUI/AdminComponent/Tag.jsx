import React from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customStyles = {
  control: (base) => ({
    ...base,
    background: "#f7f7f7",
    border: "1px solid #ccc",
  }),
};

const Tag = () => {
  const [selectedOption, setSelectedOption] = React.useState([options[0]]);

  console.log(" selectedOption", selectedOption);

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isMulti={true}
        isSearchable={true}
        placeholder="Select tags"
        theme={(theme) => ({
          ...theme,
          borderRadius: "10px",
          colors: {
            ...theme.colors,
            primary: "#eee",
          },
        })}
        styles={customStyles}
      />
    </div>
  );
};

export default Tag;
