import React from 'react';
import AddInfoLink from './AddInfoLink';

import welcomeFirst from '../img/welcome-first.png';
import welcomeSecond from '../img/welcome-second.png';
import welcomeThird from '../img/welcome-third.png';

import '../stylesheets/addInfoLinks.scss';

class AddInfoLinks extends React.Component {
    render() {
        return (
            <div className="addInfoLinks">
                <h1 className="addInfoLinkTitle">{this.props.title}</h1>
                <AddInfoLink pic={welcomeFirst} title="你的名字?" paragraph="请填写你的发起机构名称,发起与机构持续时间。" link="填写个人信息"/>
                <AddInfoLink pic={welcomeSecond} title="你在做什么?" paragraph="请填写机构的业务范围。" link="填写业务范围"/>
                <AddInfoLink id="lastAddInfoLink" pic={welcomeThird} title="你的状况?" paragraph="请填写机构的注册资金,运行资金状况。" link="填写资金状况"/>
            </div>
        )
    }
}

export default AddInfoLinks;