/* eslint-disable react/prop-types */
/**
 *
 * FormButton
 *
 */

import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../../themes/index";

const StyledButton = styled(Button)(() => ({
  height: "3rem",
  width: "100%",
  color: "black",
  "&:hover": {
    backgroundColor: `${colors.primary110}`,
  },
}));

const FormButton = ({ text, size, ...props }) => {
  return (
    <StyledButton
      sx={{ mb: "1rem" }}
      variant="contained"
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

FormButton.defaultProps = {
  loading: false,
  size: "large",
};

export default FormButton;
