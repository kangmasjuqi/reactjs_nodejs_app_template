
import React from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';

const TableElement = () => {

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    {Array.from({ length: 12 }).map((_, index) => (
                    <th key={index}>Table heading</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
                <tr>
                    <td>2</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
                <tr>
                    <td>3</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
                </tbody>
            </Table>
            <table class="table align-middle">
            <thead>
                <tr>
                <th scope="col" class="w-25">Heading 1</th>
                <th scope="col" class="w-25">Heading 2</th>
                <th scope="col" class="w-25">Heading 3</th>
                <th scope="col" class="w-25">Heading 4</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
                </tr>
                <tr class="align-bottom">
                <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
                <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
                <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
                <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
                </tr>
                <tr>
                <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                <td class="align-top">This cell is aligned to the top.</td>
                <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
                </tr>
            </tbody>
            </table>
        </>
      );
    
}

export default TableElement;
