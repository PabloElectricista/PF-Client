import { Table } from "react-bootstrap";

function BestTables({ title, model }) {

    return <>
        <h3>{title} {model}</h3>
        <Table>
            <thead>
                <th>#</th>
                <th>{model}</th>
                <th>data</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>{model}1</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>{model}2</td>
                    <td>400</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>{model}3</td>
                    <td>300</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>{model}4</td>
                    <td>200</td>
                </tr>
            </tbody>
        </Table>
    </>
}

export default BestTables;