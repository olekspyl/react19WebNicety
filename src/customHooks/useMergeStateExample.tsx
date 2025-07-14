// import { Button, ChapterWrapper, PropsTable, Toolbar } from 'components';
import { FormField } from './FormField';
import { useFieldState } from './useFieldState';
import { useMergedState } from './useMergedState';

type Person = {
    firstName: string;
    lastName: string;
    age: number | null;
    address: {
        city: string;
        street: string;
        house: number | null;
    };
};

const INITIAL_STATE: Person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 21,
    address: {
        city: 'New York',
        street: 'Broadway',
        house: 44,
    },
};

function validatePositiveNumber(stringValue: string): number | null {
    if (!stringValue) {
        return null;
    }
    // do not allow negative numbers
    return Math.max(parseInt(stringValue), 0);
}

// сут філд стейт має викликати функцію валідейт

export function UseMergedStateExample() {
    const [data, setData] = useMergedState<Person>(INITIAL_STATE);
    const [fieldValue, setFieldValue] = useFieldState<Person>(INITIAL_STATE)
console.log(INITIAL_STATE)

    return (
            <form>
                <FormField
                    name="firstName"
                    label="First name"
                    value={data.firstName}
                    onChange={(firstName) => {
                    setData({ firstName });
                    setFieldValue({firstName});
                }}                />
                <FormField
                    name="lastName"
                    label="Last name"
                    value={data.lastName}
                    onChange={(lastName) => setData({ lastName })}
                />
                <FormField
                    name="age"
                    label="Age"
                    value={data.age}
                    onChange={(age) => setData({ age: validatePositiveNumber(age) })}
                    type="number"
                />
                <FormField
                    name="city"
                    label="City"
                    value={data.address.city}
                    onChange={(city) => setData({ address: { city } })}
                />
                <FormField
                    name="street"
                    label="Street"
                    value={data.address.street}
                    onChange={(street) => setData({ address: { street } })}
                />
                <FormField
                    name="house"
                    label="House"
                    value={data.address.house}
                    onChange={(house) =>
                        setData({ address: { house: validatePositiveNumber(house) } })
                    }
                    type="number"
                />
            </form>
    );
}
