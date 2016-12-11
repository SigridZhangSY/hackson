import React from 'react';
import {Paper} from 'material-ui';
import {EditorModeEdit} from 'material-ui/svg-icons';
import {hashHistory, Link} from 'react-router';


const cardStyle = {
    margin: 20,
    height: 150
};

const actionStyle = {
    float: 'right'
}

const ApplicationList = ({data}) => {
    return (
        <div className="listWrap">
            <ul className="list">
                {data.items.map((application) => {
                    return (
                        <div className="item" key={application.id}>
                            <Paper style={{padding: 20, marginBottom: 10, width: '100%'}}>
                                <div style={{float: 'left'}}>
                                    <Link to={'apps/' + application.name}>
                                        <p className="item-main-title">{application.name}</p>
                                    </Link>
                                    <p className="item-content">Build by</p>
                                </div>
                                <div style={{float: 'right'}}>
                                    <EditorModeEdit onClick={() => {
                                        hashHistory.push('apps/' + application.name + '/edit')
                                    }}/>
                                </div>
                                <div className="selfClear"></div>
                            </Paper>
                        </div>
                    )
                })}
            </ul>
        </div>);
};

export default ApplicationList;