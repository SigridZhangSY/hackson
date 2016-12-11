import React from 'react'
import {connect} from 'react-redux';
import SearchBar from '../components/SearchBar'
import {search} from '../actions/search'

class ClusterSearchFilter extends React.Component {
    handleOnChange(event) {
        this.props.searchClusters(event.target.value);
    }

    render() {
        return <SearchBar onChange={this.handleOnChange.bind(this)}/>
    }
}


const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => ({
    searchClusters: (searchContent) => {
        dispatch(search(searchContent))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ClusterSearchFilter);