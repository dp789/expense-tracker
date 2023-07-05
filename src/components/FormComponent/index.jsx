/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";

import FormInput from "../FormInput/index";
import CategoryComponent from "../CategoryComponent/index";
import SubmitButton from "../SubmitButton/index";
import { categories } from "./categoryItem";

const FormComponents = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm({});
  return (
    <Box
      component="form"
      gap={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      edit={true}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        label="Amount"
        name="amount"
        type={"number"}
        control={control}
      />
      <FormInput
        label="Description"
        name="Description"
        type={"text"}
        control={control}
      />
      <FormInput name="date" type={"date"} control={control} />
      <CategoryComponent
        name="categories"
        items={categories}
        label="Categories"
        control={control}
      />
      <SubmitButton type="submit" text="Create Expense" control={control} />
    </Box>
  );
};
export default FormComponents;
