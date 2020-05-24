import React from 'react';

export interface IButtonProps {
    text: string;
    cb: any;
}

const buttonStyle: React.CSSProperties = {
    height: '60px',
    margin: '10px'
}

export default (props: IButtonProps) => <button style={buttonStyle} onClick={props.cb}>{props.text}</button>