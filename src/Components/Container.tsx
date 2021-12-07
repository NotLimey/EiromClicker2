import React from 'react';
import CSS from 'csstype';
import '@Scss/layout.scss';

interface ContainerProps {
    children: React.ReactNode;
    style?: CSS.Properties
}

const Container : React.FC<ContainerProps> = (props : ContainerProps) => {
    return (
        <div style={props.style} className="nl-ui-container">
            {props.children}
        </div>
    );
}

export default Container;