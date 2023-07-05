/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

export default function ButtonComponent({ onClick, text }) {
  return (
    <Button onClick={onClick} variant="outlined">
      {text}
    </Button>
  );
}
