import { useState, useCallback } from "react"

const isNumber = (char: string) => /[0-9]/.test(char);
const allNumber = (...chars: string[]): boolean => { 
    return chars
        .map(v => isNumber(v))
        .reduce((prev, curr) => prev && curr)
}
const resolveEquation = (givenOperands: string[]): string[] => {
    if (givenOperands.length === 0) return ['0'];
    if (givenOperands.length <= 2) return givenOperands;
    
    let operands = isNumber(givenOperands[0])
        ? ['+', ...givenOperands]
        : givenOperands;
    operands = operands.length % 2 === 0
        ? operands
        : operands.slice(-1);
    let operators = operands.filter(op => !isNumber(op));
    operands = operands.filter(op => isNumber(op));
    
    let acc = operands
                .map((op, i) => {
                    return operators[i] === '+'
                        ? Number(op)
                        : Number(-op)
                })
                .reduce((prev, curr) => prev + curr, 0)

    return [acc.toString()];
}

export const useAddDigit = () => {
    const [display, setDisplay] = useState<string[]>([]);
    const addDigit = useCallback((digit: string) => {
        let oldDigit: string = display.slice(-1).join();
        switch (digit) {
            case 'c':
                return setDisplay([]);
            case '=':
                return setDisplay(resolveEquation(display));
            default:
                if (allNumber(oldDigit, digit)) {
                    setDisplay(new Array<string>(...display.slice(0, -1), `${oldDigit}${digit}`));
                } else {
                    setDisplay(new Array<string>(...display, digit));
                }
        }

    }, [display]);
    const viewDigits = () => display.join(' ');

    return { viewDigits, addDigit };
}