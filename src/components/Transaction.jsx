import React,{useContext} from "react";
import {GlobalContext} from '../context/GlobalState'

const Transaction = ({text,amount,ids}) => {
    const sign = amount < 0 ? '-' : '+';

    const {deleteTransaction} = useContext(GlobalContext)

  return (
    <>
      <li className={sign === '-' ? 'minus' : 'plus'}>
        {text}
        <span>{sign}${Math.abs(amount)}</span>
        <button className="delete-btn" onClick={()=>deleteTransaction(ids)}>X</button>
      </li>
    </>
  );
};

export default Transaction;
