import React from 'react';
import {connect} from 'react-redux';

import StackEventList from '../../components/stack/StackEventList';
import {getStackEvents} from '../../actions/event';


class VisibleStackEventList extends React.Component{
    componentWillMount() {
        this.props.loadEvents();
    }

    render(){
      return(
          <div>
              <StackEventList {...this.props}/>
          </div>
      );
  }
};

const mapStateToProps = (state) => {
    return {
        stackEventsList: state.events.eventList
    };
};

const mapDispatchToProps = (dispatch) => ({
    loadEvents: () => {
        dispatch(getStackEvents())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibleStackEventList);

