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

export default function SubmitButton({ text, size, ...props }) {
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
}

SubmitButton.defaultProps = {
  loading: false,
  size: "large",
};
