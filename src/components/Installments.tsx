import React from 'react';
import './installments.css';

function Installments(props: any) {
  function calculateInstallments(capital: number, tax: number, months: number) {
    let installments: any = [];
    let totalAmount = capital;
    let amountSaved = 0;

    for (let i = 1; i < months + 1; i++) {
      let taxAmount = totalAmount * (tax / 100);
      amountSaved += taxAmount;
      totalAmount += taxAmount;
      let taxPercentage = totalAmount / capital - 1;

      installments.push({
        month: i,
        amountSaved: amountSaved,
        totalAmount: totalAmount,
        taxPercentage: taxPercentage,
      });
    }
    return installments;
  }

  let installments = calculateInstallments(
    props.capital,
    props.tax,
    props.months
  );

  function formatCurrency(number: any) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(number);
  }

  function formatPercentage(number: any) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  }

  return (
    <div className="container">
      {installments.map((installment: any) => (
        <div key={installment.month} className="installment">
          <div>
            <strong>{installment.month}</strong>
          </div>
          <div className={props.tax > 0 ? 'amount' : 'amount negative'}>
            <strong>{formatCurrency(installment.totalAmount)}</strong> <br />
            <strong>
              {props.tax > 0 ? '+' : ''}
              {formatCurrency(installment.amountSaved)}
            </strong>
            <br />
            {formatPercentage(installment.taxPercentage)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Installments;
