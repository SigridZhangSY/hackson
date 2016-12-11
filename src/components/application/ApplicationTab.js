import React from 'react';
import '../../stylesheets/indexContent.scss'
import '../../stylesheets/application.scss'


const ApplicationTab = ({children}) => (
    <div className="application-tab">
        {children}
    </div>
);

export default ApplicationTab;