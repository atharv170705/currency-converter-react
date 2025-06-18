import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import Inputbox from './components/InputBox';

function App() {
  
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  console.log(options);

  const swap = () => {
    const tempFrom = from;
    const tempTo = to;
    const tempAmount = amount;
    const tempConverted = convertedAmount;

    setFrom(tempTo)
    setTo(tempFrom)
    setConvertedAmount(tempAmount)
    setAmount(tempConverted)
  }

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(4))
  }

  return (
    <div className='w-full min-h-screen flex flex-wrap justify-center items-center custom'>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5
         backdrop-blur-sm bg-white/30'>
          <form
           onSubmit={(e) => {
            e.preventDefault();
            convert();
           }}>
              <div className='w-full mb-2'>
                <Inputbox
                  label= 'From'
                  amount={amount}
                  onAmountChange={(amount) => setAmount(amount)}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  currencyOptions = {options}
                  selectedCurrency= {from}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button
                  onClick={swap}
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-border-2
                   border-white rounded-md bg-blue-600 text-white px-3 py-1'
                >Swap</button>
              </div>
              <div className='w-full mb-2'>
                <Inputbox
                  label= 'To'
                  amount={convertedAmount}
                  // onAmountChange={(amount) => setAmount(amount)}
                  onCurrencyChange={(currency) => setTo(currency)}
                  currencyOptions = {options}
                  selectedCurrency= {to}
                  amountDisabled = {true}
                />
              </div>
              <button
               type='submit'
               className='w-full bg-blue-border-2
                border-white rounded-lg bg-blue-600 text-white px-3 py-2'
               >Convert from {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
