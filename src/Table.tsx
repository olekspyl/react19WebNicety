const nums = new Array(9).fill(0).map((_val, index) => index + 1);

export default function Table(): React.JSX.Element {

return (
       <table>
        <thead>
            <tr>
                <th data-testid="empty-header"></th>
        {nums.map((item, index) => 
            <th data-testid={`col-header-${item}`} 
            key={index}>{item}</th>
        )}
            </tr>
        </thead>
        <tbody>
            {nums.map((item1, row) => 
            <tr key={row}>
                <th data-testid={`row-header-${item1}`} >{item1}</th>
                {nums.map((item2, col) => 
                    <td data-testid={`cell-${item1}-${item2}`} key={col}>{item1*item2}</td>
                 )}
            </tr>
        )}
        </tbody>
       </table> 
)}
 