import react from "react";
import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

export const TransactionForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useGlobalState();

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount, // colocando el sign mas delante de la variable se convierte de string a number
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter a Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          step={0.01}
          placeholder="00.00"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Add Transaction</button>
      </form>
    </div>
  );
};
