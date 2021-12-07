import React from "react";

interface ButtonGroupProperties {
    variant?: 'outlined' | 'text';
    children?: React.ReactNode
}

const ButtonGroup : React.FC<ButtonGroupProperties> = (props : ButtonGroupProperties) => {
    return (
        <div className="nl-ui-btn-group">
            {props.children}
        </div>
    );
}

export default ButtonGroup;