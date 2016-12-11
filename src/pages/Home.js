import React from 'react';

import Welcome from '../components/Welcome';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="">
                    <Welcome title="成为合作社的主人,把世界迎进您的身边。" text="懂得'共'精神,体验真正的合作精神"/>
                </div>
            </div>
        );
    }
}
