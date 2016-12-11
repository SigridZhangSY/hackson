import React from 'react';
import {Link} from 'react-router';

const Stack = ({stack, selectStackClick}) => (
    <li>
        <div className="stack info">
            <p className="stack-name">{stack.name}</p>
            <p className="stack-describe">{stack.description}</p>
            <p className="stack-owner">Build by jksun</p>
        </div>
        <Link to="/apps/new" onClick={() => selectStackClick(stack)}>
            <div className="stack instantiate">
                <img src={require('../../icon/instantiate.png')}/>
                <p> instantiate</p>
            </div>
        </Link>
        <div className="selfClear"></div>
    </li>
);

export default Stack;
