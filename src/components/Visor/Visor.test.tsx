import React from 'react'
import { render } from '@testing-library/react'
import Visor from '.'
import { IVisorProps } from './Visor'

describe('Visor', () => {
    it('renders', () => {
        render(<Visor />);
    })
    it('display provided values', () => {
        const testedValue = '1'
        const props: IVisorProps = {
            value: testedValue
        }
        const { getByText } = render(<Visor {...props} />);
        const element = getByText(new RegExp(testedValue));
        expect(element).toBeInTheDocument();
    })
    it('display zero if no value is provided', () => {
        const { getByText } = render(<Visor />);
        const element = getByText(/0/);
        expect(element).toBeInTheDocument();
    })
})