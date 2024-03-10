import { Balance } from "./components/Balance.jsx";
import { Header } from "./components/Header.jsx";
import { TransactionForm } from "./components/transactions/TransactionForm.jsx";
import { Transactionslist } from "./components/transactions/Transactionslist.jsx";
import { GlobalProvider } from "./context/GlobalState.jsx";
import { IncomeExpenses } from "./components/IncomeExpense.jsx";
function App() {
  return (
    <>
      <GlobalProvider>
        <div>
        <Header/>
        <IncomeExpenses/>
        <Balance/>
        <TransactionForm/>
        <Transactionslist/>
        </div>
      </GlobalProvider>
    </>
  );
}
export default App;
