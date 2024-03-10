import { useGlobalState } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0);

  return (
    <>
      <h1>Balance</h1>
      <h2>${total}</h2>
    </>
  );
};
