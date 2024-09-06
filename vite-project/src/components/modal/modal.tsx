import { useState, useRef, useEffect } from 'react';
import "./modal.css"
interface ModalProps {
  onClose: () => void;
  onSave: (expense: { name: string; amount: number; category: string; date: string }) => void;
}
function Modal({ onClose, onSave }: ModalProps) {
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.showModal();
    }
    return () => {
      if (dialog) {
        dialog.close();
      }
    };
  }, []);

  const handleSave = () => {
    onSave({ name, amount: parseFloat(amount), category, date }); // Guardar los datos
    onClose(); // Cerrar el modal
  };

  return (
    <div id='modaldiv'>
      <dialog ref={dialogRef} id="modal">
        <h2>New expense</h2>
        <div id="line"><p>.</p></div>
        <label htmlFor="Add expense">Add expense name</label>
        <input
          name="Add expense"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="Add number">Amount</label>
        <input
          name="Add number"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label htmlFor="modalcategories">Select category</label>
        <select
          name="modalcategories"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">--Select--</option>
          <option value="Savings">Savings</option>
          <option value="Food">Food</option>
          <option value="House">House</option>
          <option value="MiscellaneousExpenses">Miscellaneous Expenses</option>
          <option value="Leisure">Leisure</option>
          <option value="Health">Health</option>
          <option value="Subscriptions">Subscriptions</option>
        </select>
        <label htmlFor="date">Expense date</label>
        <input
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button id="save" onClick={handleSave}>Save</button> 
      </dialog>
    </div>
  );
}

export default Modal;
