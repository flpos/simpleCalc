import React from 'react';
import Visor from '../Visor';
import Button from '../Button';
import { useAddDigit } from './hooks';

export default () => {
    const calculatorDigits = '789+456-123c0='.split('');
    const { addDigit, viewDigits } = useAddDigit();
    return (<>
        <Visor value={viewDigits()} />
        {calculatorDigits.map((digit: string) => <Button key={`digit${digit}`} text={digit} cb={() => { addDigit(digit) }} />)}
    </>)
}