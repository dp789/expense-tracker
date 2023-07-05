/* eslint-disable react/prop-types */
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Box,
  Chip,
  FormHelperText,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { useController, useForm } from "react-hook-form";
import CancelIcon from "@mui/icons-material/Cancel";
import _without from "lodash/without";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

function getStyles(name, items, theme) {
  return {
    fontWeight:
      items.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const CategoryComponent = ({
  name,
  items,
  rules,
  label,
  control,
  ...props
}) => {
  const theme = useTheme();
  const {
    field,
    formState: {
      errors: { [name]: errorObject },
    },
  } = useController({
    name,
    control,
    rules,
  });
  const { register } = useForm();
  const handleDelete = (e, value) => {
    e.preventDefault();
    field.onChange(_without(field.value, value));
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
      <Select
        fullWidth
        labelId="demo-mutiple-chip-checkbox-label"
        id="demo-mutiple-chip-checkbox"
        multiple
        defaultValue={[]}
        {...register("chipValue")}
        input={<OutlinedInput id="select-multiple-chip" label={label} />}
        renderValue={(items) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {items.map((item, key) => (
              <Chip
                clickable
                deleteIcon={
                  <CancelIcon
                    onMouseDown={(event) => event.stopPropagation()}
                  />
                }
                key={key}
                label={item}
                onDelete={(e) => handleDelete(e, item)}
              />
            ))}
          </Box>
        )}
        error={!!errorObject}
        MenuProps={MenuProps}
        {...props}
        {...field}
      >
        {items.map((item) => {
          return (
            <MenuItem
              key={item}
              value={item}
              style={getStyles(name, items, theme)}
            >
              {item}
            </MenuItem>
          );
        })}
      </Select>
      {!!errorObject && (
        <FormHelperText
          sx={(theme) => ({
            color: theme.buildd.error,
            position: "absolute",
            bottom: -25,
            left: 5,
          })}
        >
          {errorObject.message}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default CategoryComponent;
