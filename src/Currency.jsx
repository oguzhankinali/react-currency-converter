import React, { useState } from 'react'
import { RiArrowLeftRightFill } from "react-icons/ri";
import axios from 'axios';
import './css/currency.css';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_S6Q1U93a9EXqOnYgqskEI5r4rIH2Y9luhvaQutA2"

function Currency() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {
        if (!amount || amount <= 0) return;

        if (fromCurrency === toCurrency) {
            setResult(Number(amount).toFixed(2));
            return;
        }

        try {
            const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
            const rate = response.data.data[toCurrency];

            if (rate) {
                const calculatedResult = (rate * amount).toFixed(2);
                setResult(calculatedResult);
            }
        } catch (error) {
            console.error("Döviz kuru alınırken bir hata oluştu:", error);
            alert("Veri çekilemedi, lütfen daha sonra tekrar deneyin.");
        }
    }

    return (
        <div className="currency-div">
            <h1 className="currency-title">DÖVİZ KURU ÇEVİRİCİSİ</h1>

            <form onSubmit={(e) => {
                e.preventDefault();
                exchange();
            }}>
                <div className="inputs-row">
                    <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="amountInput"
                        type="number"
                        placeholder='Miktar Giriniz'
                        step="any"
                    />

                    <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="TRY">TRY</option>
                        <option value="CHF">CHF</option>
                        <option value="GBP">GBP</option>
                        <option value="CAD">CAD</option>
                    </select>

                    <RiArrowLeftRightFill
                        onClick={() => {
                            const temp = fromCurrency;
                            setFromCurrency(toCurrency);
                            setToCurrency(temp);
                        }}
                        className="exchange-icon"
                        style={{
                            fontSize: '24px',
                            margin: '0 10px',
                            verticalAlign: 'middle',
                            cursor: 'pointer'
                        }}
                    />

                    <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="TRY">TRY</option>
                        <option value="CHF">CHF</option>
                        <option value="GBP">GBP</option>
                        <option value="CAD">CAD</option>
                    </select>

                    <input
                        value={result}
                        readOnly
                        className="resultInput"
                        type="number"
                    />
                </div>

                <div className="button-row">
                    <button type="submit">Çevir</button>
                </div>
            </form>
        </div>
    )
}

export default Currency;