import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import '../stylesheets/indexPage.scss'

class IndexView extends React.Component {
    render() {
        return (
            <div className="index-wrapper">
                <Sidebar/>
                <div className="main-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default IndexView