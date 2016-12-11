import React from 'react';
import {hashHistory, Link} from 'react-router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Paper} from 'material-ui';
import {EditorModeEdit} from 'material-ui/svg-icons';
import {ActionDelete, ActionDescription, ImageEdit} from 'material-ui/svg-icons';
import ClusterSearchFilter from '../../containers/ClusterSearchFilter'

const actionStyle = {
    float: 'right'
};

const cardStyle = {
    height: 110
};

const ClusterList = ({data, onDeleteClick}) => (
    <div className="listWrap">
        <ul className="list">
        {data.items.map((clusterInfo) => (
                <div className="item" key={clusterInfo.id}>
                    <Paper style={{padding: 20, marginBottom: 10, width: '100%'}}>
                        <div style={{float: 'left'}}>
                            <Link to={'clusters/' + clusterInfo.id}>
                                <p className="item-main-title">{clusterInfo.name}</p>
                            </Link>
                            <p className="item-content">{clusterInfo.type}</p>
                        </div>
                        <div style={{float: 'right'}}>
                            <EditorModeEdit onClick={() => {
                                hashHistory.push('clusters/' + clusterInfo.id + '/edit')
                            }}/>
                            <ActionDelete onClick={() => onDeleteClick(clusterInfo.id)}/>
                        </div>
                        <div className="selfClear"></div>
                    </Paper>
                </div>
            )
        )}
        </ul>
    </div>

);

export default ClusterList;