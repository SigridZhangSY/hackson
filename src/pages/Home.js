import React from 'react';

import Welcome from '../components/Welcome';
import Reasons from '../components/Reasons';

var REASONS = [
    {title: "找到心中精神", description: "合作运动的基础是共同需求，用集体的方式解决个体的困境，盈余最终回归集体。"},
    {title: "发现共同的朋友", description: "依靠集体的力量，我们能选择有益于当地经济和环境的供应商，基于爱好者的讨论举办自己的文化活动，为真正的多元性创造流通环境。在共同生活里创造对未来的共同欲望。"},
    {title: "引领先进的技术", description: "基于平台合作主义的思考，合作松希望连结已经成为组织的单位而非个人劳动者，在组织间创立协作基础，解决组织面临的基本技术问题，以及未来沟通合作的介面与其技术之想像。"}
];

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="">
                    <Welcome title="成为合作社的主人,把世界迎进您的身边。" text="懂得'共'精神,体验真正的合作精神"/>
                    <Reasons reasons={REASONS}  />
                </div>
            </div>
        );
    }
}
