import React from 'react';

export interface IVisorProps {
    value?: string
}

const visorStyle: React.CSSProperties = {
    margin: '10px',
    textAlign: 'right',
    fontSize: '3em',
    backgroundColor: '#333',
    color: '#ddd',
    padding: '10px',
    borderRadius: '5px'
}

export default (props: IVisorProps) => <div style={visorStyle} data-testid='visor' id='visor'>{props.value || '0'}</div>;