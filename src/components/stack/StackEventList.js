import React from 'react';

const StackEventList = ({stackEventsList, stackId}) => {

    return(
        <div>
            {stackEventsList.map((event) => {
                if(event.content.stack.id === stackId)
                 return(<div className="detail-tab-content" key={event.id}>{event.type}</div>);
            })}
        </div>
    );
};

export default StackEventList;
