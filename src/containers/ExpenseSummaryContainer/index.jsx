/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { compose } from "redux";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { isThisMonth } from "date-fns";
import { Stack } from "@mui/material";

import CardComponent from "../../components/CardComponent/index";
import { selectExpenseSummary } from "../IncomeContainer/selector";
import { selectIncome } from "../HomeContainer/selector";

export function ExpenseSummaryContainer({ transactionsData, income }) {
  const [totalExpense, setTotalExpense] = useState(0);
  useEffect(() => {
    let totalAmount = 0;
    transactionsData.forEach((item) => {
      const givenDate = new Date(item.date);

      if (isThisMonth(givenDate)) {
        totalAmount += Number(item.amount);
      }
    });

    setTotalExpense(totalAmount);
  }, [transactionsData]);

  const totalSavings = income - totalExpense;
  return (
    <>
      <Stack direction={"row"} mt={2} gap={2} flexWrap={"wrap"}>
        <CardComponent title={"INCOME"} description={`₹ ${income}`} />
        <CardComponent title={"EXPENSES"} description={`₹ ${totalExpense}`} />
        <CardComponent title={"SAVINGS"} description={`₹ ${totalSavings}`} />
      </Stack>
    </>
  );
}

ExpenseSummaryContainer.propTypes = {
  data: PropTypes.object,
  transactionsData: PropTypes.array,
  income: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  data: selectExpenseSummary(),
  income: selectIncome(),
});

export function mapDispatchToProps() {}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, injectIntl)(ExpenseSummaryContainer);

export const HomeContainerTest = compose(injectIntl)(ExpenseSummaryContainer);
