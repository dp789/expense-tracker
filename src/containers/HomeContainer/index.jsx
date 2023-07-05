/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { compose } from "redux";
import PropTypes from "prop-types";
import { injectSaga } from "redux-injectors";
import { injectIntl } from "react-intl";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Dialog, Stack, Typography } from "@mui/material";

import Layout from "../../components/Layout/index";
import ButtonComponent from "../../components/ButtonComponent/index";
import IncomeContainer from "../IncomeContainer/index";
import ExpenseSummaryContainer from "../ExpenseSummaryContainer/index";
import TableComponent from "../../components/TableComponent/index";
import FormComponents from "../../components/FormComponent/index";

import { generateUuid } from "../../utils/index";
import HomeContainerSaga from "./saga";
import { homeContainerCreators } from "./reducer";
import { selectTransactionsList } from "./selector";

export function HomeContainer({
  dispatchAddExpenses,
  dispatchGetTransactions,
  transactionsData,
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatchGetTransactions();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    const payload = {
      id: generateUuid(),
      ...data,
    };
    dispatchAddExpenses(payload);
    dispatchGetTransactions();
    handleClose();
  };

  return (
    <Layout>
      <Dialog
        open={open}
        sx={{
          "& .MuiPaper-root": {
            padding: "2rem",
            width: "400px",
          },
        }}
        onClose={handleClose}
      >
        <Typography variant="h5" mb={2}>
          Add Expense
        </Typography>
        <FormComponents onSubmit={onSubmit} />
      </Dialog>
      <Stack direction="row" gap={2}>
        <ButtonComponent onClick={() => setOpen(true)} text="Add Expenses" />
        <IncomeContainer />
      </Stack>
      <ExpenseSummaryContainer transactionsData={transactionsData} />
      <TableComponent transactionsData={transactionsData} />
    </Layout>
  );
}

HomeContainer.propTypes = {
  dispatchAddExpenses: PropTypes.func,
  dispatchGetTransactions: PropTypes.func,
  transactionsData: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  transactionsData: selectTransactionsList(),
});

export function mapDispatchToProps(dispatch) {
  const { requestAddExpenses, requestGetTransactions } = homeContainerCreators;
  return {
    dispatchAddExpenses: (payload) => dispatch(requestAddExpenses(payload)),
    dispatchGetTransactions: () => dispatch(requestGetTransactions()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  injectIntl,
  injectSaga({ key: "HomeContainer", saga: HomeContainerSaga })
)(HomeContainer);

export const HomeContainerTest = compose(injectIntl)(HomeContainer);
