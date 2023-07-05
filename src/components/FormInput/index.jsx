/* eslint-disable react/prop-types */
/**
 *
 * FormInput
 *
 */

import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

const FormInput = ({ name, label, type, props, control }) => {
  const { field } = useController({
    name,
    control,
  });
  return (
    <TextField
      fullWidth
      required
      sx={{ mb: "1rem" }}
      id={`${label}-input`}
      label={label}
      variant="outlined"
      name={name}
      type={type}
      {...props}
      {...field}
    />
  );
};

export default FormInput;
