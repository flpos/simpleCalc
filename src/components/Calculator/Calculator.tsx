import React from 'react';
import Visor from '../Visor';
import Button from '../Button';
import { useAddDigit } from './hooks';

const mainStyle: React.CSSProperties = {
    margin: '20px auto',
    width: '600px'
}
const digitsContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto'
}

export default () => {
    const calculatorDigits = '789+456-123c0='.split('');
    const { addDigit, viewDigits } = useAddDigit();
    return (<main style={mainStyle}>
        <Visor value={viewDigits()} />
        <div style={digitsContainerStyle}>
            {calculatorDigits.map((digit: string) => <Button key={`digit${digit}`} text={digit} cb={() => { addDigit(digit) }} />)}
        </div>
    </main>)
}