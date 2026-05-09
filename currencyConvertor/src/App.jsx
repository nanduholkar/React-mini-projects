import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);

  const convert = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${from}`
      );
      const data = await res.json();

      const rate = data.rates[to];
      setConvertedAmount((amount * rate).toFixed(2));
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    convert();
  }, [from, to, amount]);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">
      <h1 className="text-3xl font-bold">Currency Converter 💱</h1>

      <InputBox
        label="From"
        amount={amount}
        onAmountChange={setAmount}
        currencyOptions={["USD", "INR", "EUR", "GBP"]}
        selectedCurrency={from}
        onCurrencyChange={setFrom}
      />

      <button
        onClick={swap}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Swap 🔄
      </button>

      <InputBox
        label="To"
        amount={convertedAmount}
        currencyOptions={["USD", "INR", "EUR", "GBP"]}
        selectedCurrency={to}
        amountDisabled
        onCurrencyChange={setTo}
      />

      {loading && <p>Loading conversion...</p>}
    </div>
  );
}

export default App;