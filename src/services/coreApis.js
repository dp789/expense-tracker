import { getDoc, updateDoc } from "firebase/firestore";
import { expensesDoc, transactionDoc } from "./firebase";

export const getExpenses = async () => {
  const docSnap = await getDoc(expensesDoc);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return data;
  }
};

export const editIncomeApi = async (newIncome) => {
  const docSnap = await getDoc(expensesDoc);
  if (docSnap.exists()) {
    const data = docSnap.data();
    console.log({ data });
    const updatedDoc = {
      ...data,
      income: newIncome,
    };

    await updateDoc(expensesDoc, updatedDoc);
  }
};

export const getTransactionsApi = async () => {
  const docSnap = await getDoc(transactionDoc);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return data;
  }
};

export const addTransactionApi = async (payload) => {
  const docSnap = await getDoc(transactionDoc);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const newList = [...data.transactions, payload];
    await updateDoc(transactionDoc, {
      transactions: newList,
    });
  }
};

export const editTransactionApi = async (payload) => {
  const { id } = payload;
  const docSnap = await getDoc(transactionDoc);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const updatedList = data.transactions.map((item) => {
      if (item.id === id) {
        //replace existing object with the new updated payload
        item = payload;
        return item;
      } else {
        return item;
      }
    });

    await updateDoc(transactionDoc, {
      transactions: updatedList,
    });
  }
};

export const deleteTransactionApi = async (id) => {
  const docSnap = await getDoc(transactionDoc);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const updatedList = data.transactions.filter((item) => {
      return item.id !== id;
    });
    await updateDoc(transactionDoc, {
      transactions: updatedList,
    });
  }
};
