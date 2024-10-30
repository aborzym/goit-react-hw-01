import css from "./TransactionHistory.module.css";

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
const TransactionHistory = ({ items }) => {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead>
          <tr className={css.headRow}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={css.tableBody}>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td className={css.typeColumn}>
                  {capitalizeFirstLetter(item.type)}
                </td>
                <td className={css.remainingColumns}>{item.amount}</td>
                <td className={css.remainingColumns}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
