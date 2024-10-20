import styles from './index.module.scss'
const Project = ()=>{
    return(
        <div className={styles.root}>
            <div className='centerbody'>
                <ul className="project1">
                    <li className='pro1Name'>
                        <h1>项目名称:长理星球<i></i></h1>
                    </li>
                    <li className='pro1Introduce'>
                        <h1>项目介绍:</h1>
                        <ol>
                            <p>长理星球是一款为长沙理工大学开发的社区交流App。该应用以提供学生互动和互助为核心，通过社区讨论和答疑等功能促进校内学生间的交流。
                                除此之外，应用内还包含多种工具辅助功能，如成绩查询、课表定制等。同时，平台设有奖励机制，鼓励用户积极发言与互动，增强社区活跃度。
                                项目的目标是为长沙理工大学的学生提供一个便捷、开放且互助的线上交流平台。
                                本项目基于原有的服创项目“新苗同学”进行修改和优化，进一步提升了功能性和用户体验。
                            </p>
                        </ol>
                    </li>
                    <li className='pro1Context'>
                        <h1>功能特色:</h1>
                        <ul>
                            <li>
                                <h2>按学习与生活需求划分:</h2>
                                <ul>
                                    <li><h4>1.学习交流群</h4></li>
                                    <ol><p>例如“期末考试备考群”、“考研交流群”、“四六级备考群”等，针对不同学科和考试的讨论群组，帮助学生进行学习交流与复习备考。</p></ol>
                                    <ol><p><strong>信息区</strong>：群聊</p></ol>
                                    <ol><p><strong>公告区</strong>：发布学习计划、考试提醒、复习建议等。</p></ol>
                                    <ol><p><strong>帖子区</strong>：学生可以发帖讨论课程内容、分享学习心得、寻求帮助。</p></ol>
                                    <ol><p><strong>分享区</strong>：用户可上传或分享学习资料、笔记、考题等资源。</p></ol>
                                    <li><h4>2.生活服务群</h4></li>
                                    <ol>例如“校园生活群”、“二手交易群”、“找室友群”等，帮助学生在生活方面互助交流，为校园生活提供便利。</ol>
                                    <ol><p><strong>信息区</strong>：群聊</p></ol>
                                    <ol><p><strong>公告区</strong>：发布重要生活信息、交易规则等。</p></ol>
                                    <ol><p><strong>帖子区</strong>：学生可以发帖求购物品、寻找租房室友、分享校园生活的建议或疑问。</p></ol>
                                    <ol><p><strong>分享区</strong>：发布或分享生活服务信息，如校内活动、二手交易物品等。</p></ol>
                                </ul>
                            </li>
                            <li>
                                <h2>按功能/工具需求划分:</h2>
                                <ul>
                                    <li><h4>1.工具交流群</h4></li>
                                    <ol><p>与App中提供的工具相关的讨论群组，如“校内资源共享”、“活动发布”等，方便学生了解和使用各种平台功能。</p></ol>
                                    <ol><p><strong>信息区</strong>：群聊</p></ol>
                                    <ol><p><strong>公告区</strong>：发布工具更新通知、使用规则等。</p></ol>
                                    <ol><p><strong>帖子区</strong>：用户可以提出工具使用问题、分享经验或建议。</p></ol>
                                    <ol><p><strong>分享区</strong>：分享资源链接、工具使用小技巧等。</p></ol>
                                    <li><h4>2.问题反馈群</h4></li>
                                    <ol>用户反馈App使用过程中遇到的问题，如功能建议区、技术支持群，帮助平台改善用户体验。</ol>
                                    <ol><p><strong>信息区</strong>：群聊</p></ol>
                                    <ol><p><strong>公告区</strong>：发布维护通知、平台更新预告等。</p></ol>
                                    <ol><p><strong>帖子区</strong>：用户可以反馈问题、提交功能建议或讨论平台优化方向。</p></ol>
                                    <ol><p><strong>分享区</strong>：分享问题解决方案或相关参考资料。</p></ol>
                                </ul>
                            </li>
                            <li>
                                <h2>按兴趣或活动类型划分:</h2>
                                <ul>
                                    <li><h4>1.社团与俱乐部讨论区</h4></li>
                                    <ol><p>为学校内各类社团、学生组织、兴趣小组设立专属讨论群，如“篮球俱乐部”、“音乐社团”、“摄影爱好者”等。</p></ol>
                                    <ol><p><strong>信息区</strong>：群聊</p></ol>
                                    <ol><p><strong>公告区</strong>：发布活动通知、社团招新等重要公告。</p></ol>
                                    <ol><p><strong>帖子区</strong>：成员可以讨论活动内容、提出建议或分享经验。</p></ol>
                                    <ol><p><strong>分享区</strong>：分享社团活动照片、视频或其他资源。</p></ol>
                                    <li><h4>2.比赛与项目小组讨论区</h4></li>
                                    <ol>针对学术比赛或项目设立的讨论群，如“数学建模比赛”、“创新创业比赛”等，帮助同学们参与并讨论赛事内容。</ol>
                                    <ol><p><strong>信息区</strong>：群聊</p></ol>
                                    <ol><p><strong>公告区</strong>：发布赛事重要时间节点或项目进展等公告。</p></ol>
                                    <ol><p><strong>帖子区</strong>：参与者可以发帖讨论比赛技巧、分享参赛经验或寻求团队合作。</p></ol>
                                    <ol><p><strong>分享区</strong>：共享比赛资料、项目进展或参考资源。</p></ol>
                                </ul>
                            </li>
                           
                            
                        </ul>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Project;