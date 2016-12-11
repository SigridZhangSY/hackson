import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const StackServices = ({stackDetail}) =>{
    const services = stackDetail.services;
    var keys = [];
    for (var property in services)
        keys.push(property);

    return(

        <div className="detail-tab-content">
<Table>
    <TableBody displayRowCheckbox={false} showRowHover={true}>
        <TableRow>
            <TableRowColumn>Service</TableRowColumn>
            <TableRowColumn>Name</TableRowColumn>
            <TableRowColumn>Port</TableRowColumn>
        </TableRow>
        {keys.map((key)=>(
            <TableRow key={key}>
                <TableRowColumn>{key}</TableRowColumn>
                <TableRowColumn>{services[key].name}</TableRowColumn>
                <TableRowColumn>{services[key].localhostPort}</TableRowColumn>
                </TableRow>
        ))}
    </TableBody>
            </Table>
        </div>
    );
};

export default StackServices;