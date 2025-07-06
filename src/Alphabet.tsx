import React from 'react';

const { useState } = React;

export const ALPHABET = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

export default function AlphabetRender() {
    const [text, setText] = useState('');
    const [capsLockOn, setCapsLockOn] = useState(false);
    
    const alphabetHandler = (letter: string):void => {
        setText(prev => {
            if(capsLockOn) {
             return prev + letter.toUpperCase()
            } else {
             return prev + letter.toLowerCase()
        }
        })
    }

    const handlerCapsLock = () => {
        setCapsLockOn((prev) =>!prev)
        return capsLockOn
    }

    const handlerDeleteLetter = () => {
       setText(prev => prev.slice(0, -1))
    }

    const handlerClear = () => {
        setText('')
    }
    
    // TODO: handleAddLetter
    // TODO: handleCapsLockToggle
    // TODO: handleDeleteLetter
    // TODO: handleClear
    
    return (
        <>
            <div>
                {ALPHABET.map((letter) => (
                    <button onClick={() => alphabetHandler(letter)} key={letter}>
                        {capsLockOn ? letter.toUpperCase() : letter.toLowerCase()}
                    </button>
                ))}
            </div>
            <div>
                <button onClick={() => handlerDeleteLetter()} disabled={!text.length}>Delete</button>
                <button onClick={() => handlerClear()} disabled={!text.length}>Clear</button>
                <button onClick={() => handlerCapsLock()}>{capsLockOn ? 'Caps Lock ON' : 'Caps Lock OFF'}</button>
            </div>
            <h1>{text}</h1>
        </>
    );
}
