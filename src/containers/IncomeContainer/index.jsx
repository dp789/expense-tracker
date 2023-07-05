/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { compose } from "redux";
import PropTypes from "prop-types";
import { injectSaga } from "redux-injectors";
import { injectIntl } from "react-intl";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Dialog, Stack, Typography, Box } from "@mui/material";

import FormInput from "../../components/FormInput/index";
import FormButton from "../../components/FormButton/index.jsx";

import IncomeContainerSaga from "./saga";
import { incomeContainerCreators } from "./reducer";

export function IncomeContainer({ dispatchAddIncome }) {
  const { control, handleSubmit } = useForm({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (payload, event) => {
    event.preventDefault();
    dispatchAddIncome(payload);
    handleClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            padding: "2rem",
          },
        }}
      >
        <Typography mb={2} variant="h4">
          Edit Income
        </Typography>
        <Box
          component="form"
          gap={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack gap={2}>
            <FormInput
              label="income"
              name="income"
              type={"text"}
              control={control}
            />
            <FormButton type="submit" text="Submit" control={control} />
          </Stack>
        </Box>
      </Dialog>
      <Button onClick={handleOpen} variant="outlined">
        Edit Monthly Income
      </Button>
    </>
  );
}

IncomeContainer.propTypes = {
  dispatchAddIncome: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch) {
  const { requestAddIncome } = incomeContainerCreators;
  return {
    dispatchAddIncome: (payload) => dispatch(requestAddIncome(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  injectIntl,
  injectSaga({ key: "IncomeContainer", saga: IncomeContainerSaga })
)(IncomeContainer);

export const HomeContainerTest = compose(injectIntl)(IncomeContainer);
