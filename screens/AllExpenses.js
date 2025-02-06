import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { fetchExpenses } from "../util/http";

function AllExpenses() {
    const expensesCtx = useContext(ExpensesContext);

      useEffect(() => {
        async function getExpenses() {
            const expenses = await fetchExpenses();
            expensesCtx.setExpenses(expenses);
        }
    
        getExpenses();
      }, [])
    
    return <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" fallbackText={"No expenses found."} />
}

export default AllExpenses;