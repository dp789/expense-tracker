/* eslint-disable react/prop-types */
import { Card, Stack, Typography } from "@mui/material";

export default function CardComponent({ title, description }) {
  return (
    <Card
      sx={{
        p: 2,
      }}
    >
      <Typography variant="h5">{title}</Typography>
      {description ? (
        <Typography variant="h3">{description}</Typography>
      ) : (
        <Stack direction={"row"} gap={1}></Stack>
      )}
    </Card>
  );
}
