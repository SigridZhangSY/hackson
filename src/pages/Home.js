import React from 'react';

import Welcome from '../components/Welcome';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="">
                    <Welcome line1="成为合作社的主人," line2="把世界迎进您的身边。" text="带热爱生活，懂得“共”精神的您体验真正的多元性创造流通环境，在共同生活里创造对未来的共同欲望。"/>
                </div>
            </div>
        );
    }
}
