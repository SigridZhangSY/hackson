import React from 'react'
import {Link} from 'react-router';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {TextField} from 'redux-form-material-ui'

const SearchBar = ({onChange}) => (
    <Toolbar>
        <ToolbarGroup firstChild={true}>
            <TextField hintText="Search" onChange={onChange} />
        </ToolbarGroup>
        <ToolbarGroup>
            <ToolbarSeparator />
            <Link to="/clusters/new"><img src={require('../icon/add.png')} /></Link>
        </ToolbarGroup>
    </Toolbar>
);

export default SearchBar;