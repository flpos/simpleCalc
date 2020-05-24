import React from 'react';
import { render } from '@testing-library/react';
import Button, { IButtonProps } from '.';
import { act } from 'react-dom/test-utils';

describe('Button', () => {
    it('renders', () => {
        const props: IButtonProps = {
            text: '1',
            cb: () => ({})
        };

        const { getByText } = render(<Button {...props} />);
        const element = getByText(new RegExp(props.text));
        expect(element).toBeInTheDocument();
    })
    it('calls the provided callback', () => {
        const props: IButtonProps = {
            text: '1',
            cb: () => ({})
        };
        spyOn(props, 'cb');
        const { getByText } = render(<Button {...props} />);
        const element = getByText(new RegExp(props.text));
        act(() => {
            element.click();
        });
        expect(props.cb).toBeCalled();
    })
})