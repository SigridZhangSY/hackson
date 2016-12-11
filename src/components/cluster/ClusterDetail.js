import React from 'react';
import {hashHistory} from 'react-router';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import {EditorModeEdit, ActionDelete} from 'material-ui/svg-icons';

const ClusterDetail = ({cluster, onDeleteClick}) => (
    <Paper className="detail paper" zDepth={1}>
        <Table key={cluster.id}>
            <TableBody displayRowCheckbox={false} showRowHover={true}>
                <TableRow>
                    <TableRowColumn>Name:</TableRowColumn>
                    <TableRowColumn>{cluster.name}</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Type:</TableRowColumn>
                    <TableRowColumn>{cluster.type}</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Uri:</TableRowColumn>
                    <TableRowColumn>{cluster.uri}</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
        <div style={{marginTop: 200, marginLeft: 810}}>
            <EditorModeEdit style={{marginRight:20}} onClick={() => {
                hashHistory.push('clusters/' + cluster.id + '/edit')
            }}/>
            <ActionDelete onClick={() => onDeleteClick(cluster.id)}/>
        </div>
    </Paper>
);

export default ClusterDetail;
