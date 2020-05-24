import React from 'react';

export interface IVisorProps {
    value?: string
}

export default (props: IVisorProps) => <div data-testid="visor">{props.value || '0'}</div>;