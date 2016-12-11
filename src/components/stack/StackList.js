import React from 'react';
import {hashHistory, Link} from 'react-router';
import {Paper} from 'material-ui';
import {ActionLaunch} from 'material-ui/svg-icons';
import '../../stylesheets/list.scss';

const StackList = ({data, selectStackClick}) => {
    return (
        <div className="listWrap">
        <ul className="list">
        {data.items.map((stack) => {
                    return (
                        <div className="item" key={stack.id}>
                            <Paper style={{padding: 20, marginBottom:10, width:'100%'}}>
                                <div style={{float:'left'}}>
                                <Link to={'stacks/' + stack.id}>
                                    <p className="item-main-title">{stack.name}</p>
                                </Link>
                                <p className="item-content">{stack.description}</p>
                                    </div>
                                <div style={{float:'right'}}>
                                <ActionLaunch onClick={() => {
                                    selectStackClick(stack);
                                    hashHistory.push('apps/new');
                                }}/>
                                </div>
                                <div className="selfClear"></div>
                            </Paper>
                        </div>
                    )
            }
        )}
    </ul>
        </div>);
};

export default StackList;
