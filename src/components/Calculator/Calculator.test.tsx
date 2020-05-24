import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import Calculator from '.';

describe('Calculator', () => {
    describe('Input system', () => {
        it('renders', () => { render(<Calculator />) });
        it('adds a digit', () => {
            const { getByTestId, getByText } = render(<Calculator />);
            const visor = getByTestId(/visor/);
            const button_one = getByText(/1/);
            expect(visor.innerHTML).toBe('0');
            act(() => {
                button_one.click();
            })
            expect(visor.innerHTML).toBe('1');
            act(() => {
                button_one.click();
            })
            expect(visor.innerHTML).toBe('11');
        })
        it('adds a space if new digit is a symbol', () => {
            const { getByTestId, getByText } = render(<Calculator />);
            const visor = getByTestId(/visor/);
            const button_one = getByText(/1/);
            const button_plus = getByText(/\+/);
            expect(visor.innerHTML).toBe('0');
            act(() => { button_one.click() });
            act(() => { button_plus.click() });
            act(() => { button_one.click() });
            act(() => { button_one.click() });
            expect(visor.innerHTML).toBe('1 + 11');
        })
        it('clear the numbers', () => {
            const { getByTestId, getByText } = render(<Calculator />);
            const visor = getByTestId(/visor/);
            const button_one = getByText(/1/);
            const button_clear = getByText(/c/);
            
            expect(visor.innerHTML).toBe('0');
            act(() => button_one.click())
            expect(visor.innerHTML).toBe('1');
            act(() => button_clear.click())
            expect(visor.innerHTML).toBe('0');
        })
    })
    describe('Calculation', () => {
        it('adds', () => {
            const { getByTestId, getByText } = render(<Calculator />);
            const visor = getByTestId(/visor/);
            const button_one = getByText(/1/);
            const button_plus = getByText(/\+/);
            const button_equals = getByText(/=/);

            act(() => button_one.click());
            act(() => button_plus.click());
            act(() => button_one.click());
            act(() => button_equals.click());

            expect(visor.innerHTML).toBe('2');
        })
        it('subtracts', () => {
            const { getByTestId, getByText } = render(<Calculator />);
            const visor = getByTestId(/visor/);
            const button_one = getByText(/1/);
            const button_minus = getByText(/-/);
            const button_equals = getByText(/=/);

            act(() => button_one.click());
            act(() => button_minus.click());
            act(() => button_one.click());
            act(() => button_equals.click());

            expect(visor.innerHTML).toBe('0');
        })
    })
})