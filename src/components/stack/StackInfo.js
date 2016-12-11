import React from 'react';
import {Table, TableBody,TableRow, TableRowColumn} from 'material-ui/Table';

const StackInfo = ({stackDetail}) => {
    return (
        <div className="detail-tab-content">
            <Table>
                <TableBody displayRowCheckbox={false} showRowHover={true}>
                    <TableRow>
                        <TableRowColumn>Status</TableRowColumn>
                        <TableRowColumn>{stackDetail.status}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Type</TableRowColumn>
                        <TableRowColumn>{stackDetail.type}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Description</TableRowColumn>
                        <TableRowColumn>{stackDetail.description}</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default StackInfo;