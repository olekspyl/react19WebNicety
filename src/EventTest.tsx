import React from 'react';

export default function EventTest() {
    const [left, setLeft] = React.useState(0);
    const [top, setTop] = React.useState(0);
    
    const style = {
        position: 'absolute',
        left: `${left + 10}%`,
        top: `${top + 10}%`,
    };
    
    const clickHandler = () => {

        setLeft(Math.ceil(Math.random()*80))
        setTop(Math.ceil(Math.random()*80))
    }
    
    return <button onClick={clickHandler} style={style}>Click me</button>;
}
