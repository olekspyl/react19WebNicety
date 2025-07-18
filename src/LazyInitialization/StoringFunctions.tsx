import type { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
type Setter = Dispatch<SetStateAction<number>>;

const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;

const buildOnChange = (setter: Setter): ChangeEventHandler<HTMLInputElement> => {
    return (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setter(value ? parseFloat(value) : 0);
    };
};

export function StoringFunctions() {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);
    const [sign, setSign] = useState<string>('➕');

    const obj = {
'➕': add,
'➖': subtract,
'➗': divide,
'✖️': multiply
    }

    const buildClickHandler = ( fnSign: string) => {
        return () => {
            setSign(fnSign);
        };
    };

    return (<>
   
                <button onClick={buildClickHandler('➕')}>Add</button>
                <button onClick={buildClickHandler('➖')}>Subtract</button>
                <button onClick={buildClickHandler('➗')}>Divide</button>
                <button onClick={buildClickHandler('✖️')}>Multiply</button>
   
                <input type="number" value={a} onChange={buildOnChange(setA)} />
                <div style={{ minWidth: 10, textAlign: 'center' }}>{sign}</div>
                <input type="number" value={b} onChange={buildOnChange(setB)} />
                <span> = {obj[sign](a, b)}</span>
</>
    );
}
