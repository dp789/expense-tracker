/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { Box, Stack, Typography, Dialog, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
import { injectSaga } from "redux-injectors";
import { format } from "date-fns";
import { compose } from "redux";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import FormComponents from "../../components/FormComponent";
import Layout from "../../components/Layout";
import { selectTransactionsList } from "../HomeContainer/selector";
import { translate } from "../../components/IntlGlobalProvider";

import transactionSaga from "./saga";
import { TransactionsCreators } from "./recducer";
import { generateUuid } from "../../utils/index";

const Transactions = ({
  data,
  dispatchGetTransactions,
  dispatchAddExpenses,
  dipatchDeleteTransaction,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatchGetTransactions();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    handleClickOpen();
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

  const DeleteTransactions = (id) => {
    const handleDeleteTransaction = () => {
      dipatchDeleteTransaction(id);
    };

    return (
      <IconButton size="small">
        <DeleteIcon
          fontSize="small"
          color="primary"
          onClick={handleDeleteTransaction}
        />
      </IconButton>
    );
  };
  const EditTransaction = () => {
    return (
      <>
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
            {translate("edit_transactions_heading")}
          </Typography>
          <FormComponents handleClose={handleClose} onSubmit={onSubmit} />
        </Dialog>
        <IconButton size="small" onClick={handleEdit}>
          <EditIcon fontSize="small" color="primary" />
        </IconButton>
      </>
    );
  };

  const columns = [
    { field: "amount", headerName: "Amount", width: 100 },
    { field: "Description", headerName: "Description", width: 200 },
    { field: "categories", headerName: "Category", width: 150 },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      renderCell: (params) => (
        <Typography>
          {format(new Date(params.row.date), "MMMM d, yyyy")}
        </Typography>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <>
          <Stack direction={"row"} alignItems="center">
            <EditTransaction form={params.row} />
            <DeleteTransactions id={params.row.id} />
          </Stack>
        </>
      ),
    },
  ];

  return (
    <Layout>
      <Box mt={2}>
        <Typography color={"primary"} variant="h4" mb={1}>
          {translate("transactions_page_heading")}
        </Typography>
        <DataGrid
          getRowId={(row) => row?.id}
          rows={data ?? []}
          columns={columns}
        />
      </Box>
    </Layout>
  );
};

Transactions.propTypes = {
  data: PropTypes.array,
  dipatchDeleteTransaction: PropTypes.func,
  dispatchGetTransactions: PropTypes.func,
  dispatchAddExpenses: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: selectTransactionsList(),
});

export function mapDispatchToProps(dispatch) {
  const {
    requestDeleteTransaction,
    requestGetTransactions,
    requestAddExpenses,
  } = TransactionsCreators;

  return {
    dispatchGetTransactions: () => dispatch(requestGetTransactions()),
    dispatchAddExpenses: (payload) => dispatch(requestAddExpenses(payload)),
    dipatchDeleteTransaction: (id) => dispatch(requestDeleteTransaction(id)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  injectIntl,
  injectSaga({ key: "Transactions", saga: transactionSaga })
)(Transactions);

export const TransactionsTest = compose(injectIntl)(Transactions);
