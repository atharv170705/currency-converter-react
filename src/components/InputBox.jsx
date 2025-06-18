import React, {useId} from 'react'

function Inputbox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
    toFixed = false
}) {
    // to check if method is available or not onAmountChange && onAmountChange(Number(e.target.value))
    const id = useId();
    if(toFixed) {
        amount = amount.toFixed(2);
    }
  return (
    <div className = {`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className ='w-1/2'>
            <label htmlFor={id} className ='text-black/40 mb-2 inline-block'>{label}</label>
            <input 
                id={id}
                type = "text"
                className ='outline-none w-full bg-transparent py-1.5'
                placeholder='Amount'
                disabled = {amountDisabled}
                value = {amount}
                onChange = {(e) => (onAmountChange && onAmountChange(Number(e.target.value)))}

            />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>Curreny Type</p>
            <select
                className='rounded-lg p-1 bg-gray-300 cursor-pointer outline-none'
                value={selectedCurrency}
                disabled = {currencyDisabled}
                onChange={(e) => (onCurrencyChange && onCurrencyChange(e.target.value))}
            >
                {currencyOptions.map((curr) => (
                    <option key={curr} value={curr}>{curr}</option>
                ))}
            </select>
        </div>
    </div>
  )
}
 
export default Inputbox;