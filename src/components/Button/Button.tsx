import React from 'react';

export interface IButtonProps {
    text: string;
    cb: any;
}

export default (props: IButtonProps) => <button onClick={props.cb}>{props.text}</button>