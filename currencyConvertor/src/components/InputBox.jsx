function InputBox({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  selectedCurrency,
  onCurrencyChange,
  amountDisabled = false,
}) {
  return (
    <div className="bg-white p-4 rounded-xl flex gap-4 w-96 shadow-md">
      
      {/* Amount */}
      <div className="w-1/2">
        <label className="text-gray-500">{label}</label>
        <input
          type="number"
          className="w-full border p-2 rounded mt-1"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        />
      </div>

      {/* Currency */}
      <div className="w-1/2">
        <p className="text-gray-500">Currency</p>
        <select
          className="w-full border p-2 rounded mt-1"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
}

export default InputBox;