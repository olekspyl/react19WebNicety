import { renderValues } from "renderValue";


export function DataTypes() {
    return (
<>        <h3>Let's check how React renders different data types</h3>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {renderValues.map(({ type, valueString, value }, index) => (
                        <tr key={index}>
                            <td>
                                <b>{type}</b>
                            </td>
                            <td>
                                <code>{valueString}</code>
                            </td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
