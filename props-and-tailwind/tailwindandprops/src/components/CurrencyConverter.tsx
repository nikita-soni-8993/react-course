import { useState } from "react";
import InputBox from "./InputBox";
import CurrencyValues from "../Hooks/CurrencyValues";

const CurrencyConverter = () => {

    const [from, setFrom] = useState<any>("inr");
    const [to, setTo] = useState<any>("usd");
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencies:any = CurrencyValues(from);
    const currencyOptions = Object.keys(currencies);
    const currencyValue = () =>{
        setConvertedAmount(amount * currencies[to] )
    }
    const swap =()=>{
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    }
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           currencyValue()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label={from}
                                amount={amount}
                                currencyOptions={currencyOptions}
                                selectCurency={from}
                                onCurrencyChange={(currency:any) => setFrom(currency)}
                                onAmountChange={(amount:any)=> setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md  text-white px-2 py-0.5" style={{backgroundColor: "blue"}}
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label={to}
                                amount={convertedAmount}
                                currencyOptions={currencyOptions}
                                selectCurency={to}
                                onCurrencyChange={(currency:any) => setTo(currency)}
                                onAmountChange={(amount:any)=> setConvertedAmount(amount)}
                            />
                        </div>
                        <button type="submit" className="w-full text-white px-4 py-3 rounded-lg" style={{backgroundColor: "blue"}}>
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default CurrencyConverter;