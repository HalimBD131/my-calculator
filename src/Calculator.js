import React, { useState } from "react";

export default function Calculator() {
  const [sbp, setSbp] = useState(0);
  const [alt, setAlt] = useState(0);
  const [meldNa, setMeldNa] = useState(0);
  const [result, setResult] = useState(null);

  function calculate() {
    const expValue = Math.exp(-3.779 - (0.015 * sbp) + (0.006 * alt) + (0.148 * meldNa));
    const probability = expValue / (1 + expValue);
    setResult(probability < 0.5 ? "live" : "expire");
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Calculator to predict in-hospital mortality in patients with cirrhosis admitted with acute upper gastrointestinal bleeding</h1>
      <h2 className="text-xl font-bold mb-4">Probability Calculator</h2>
      <div className="mb-2">
        <label className="block">
  Systolic blood pressure at admission:
  <span className="block text-xs italic text-gray-500 mt-1">
    Measured in mmHg
  </span>
</label>
        <input type="number" value={sbp} onChange={(e) => setSbp(Number(e.target.value))} className="border p-2 w-full" />
      </div>
      <div className="mb-2">
        <label className="block">ALT at admission:</label>
        <input type="number" value={alt} onChange={(e) => setAlt(Number(e.target.value))} className="border p-2 w-full" />
      </div>
      <div className="mb-2">
        <label className="block">MELD-Na at admission:</label>
        <input type="number" value={meldNa} onChange={(e) => setMeldNa(Number(e.target.value))} className="border p-2 w-full" />
      </div>
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {result !== null && <p className="mt-4 text-lg">Patient is most likely to: {result}</p>}
      <p className="mt-6 text-sm text-gray-600">Reference: Bou Daher et al. 2025</p>
    </div>
  );
}
