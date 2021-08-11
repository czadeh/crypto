import React from 'react';
import InputNumber from 'react-input-number';

const InputMenu = ({ children, onClick }, props) => {

    return (
        <>
            <label>{props.selection} selected</label>
            <select value={props.selection} onChange={props.dropSelect}>
            <option value={1}>BTC</option>
            <option value={2}>ETH</option>
            </select>
            <label>Input quantity {props.quantity}</label>
            <InputNumber min={0} step={1} value={props.quantity} onChange={props.setQuantity} className='bg-red-400 h-20 w-20'/>
            <label>Input price {props.price}</label>
            <InputNumber min={0} step={1} value={props.price} onChange={props.setPrice} className='bg-red-400 h-20 w-20'/>
        </>
    );
}

export default InputMenu;