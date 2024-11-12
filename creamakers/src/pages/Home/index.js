import LogoCircle from "../../components/LogoCircle";
import styles from "./index.module.scss";
import { useState, useEffect } from "react";
const Home = () => {
    //存储页面所需元素距离顶部的位置
    const [scrollPositions, setScrollPositions] = useState({});
    // 存储rightSidebar的滑动位置
    const [rightSidebarPosition, setRightSidebarPosition] = useState(0);
    //页面初始时获取到所需元素的位置
    useEffect(() => {
        const headings = ["组织名称", "组织特色", "我们的代表产品"];
        const positions = {};
        headings.forEach((heading) => {
            const element = document.getElementById(heading);
            if (element) {
                positions[heading] = element.offsetTop;
            }
        });
        setScrollPositions(positions);

        // 设置rightSidebar的顶部位置
        const rightSidebar = document.querySelector(".rightSidebar");
        console.log(rightSidebar.offsetTop);
        if (rightSidebar) {
            setRightSidebarPosition(rightSidebar.offsetTop);
        }
    }, []);
    //决定右侧栏是否高亮
    const [active, setActive] = useState(0);
    //存储右侧栏内的值
    const textArr = [
        { id: 1, text: "组织名称" },
        { id: 2, text: "组织特色" },
        { id: 3, text: "我们的代表产品" },
        { id: 4, text: "回到顶部" },
    ];
    //处理点击高亮
    const clickActive = (id, text) => {
        setActive(id);
        let position = scrollPositions[text];
        if (text === "回到顶部") {
            position = 1;
        }
        if (position) {
            window.scrollTo({
                top: position,
                behavior: "smooth",
            });
            // 找到rightSidebar元素
            const rightSidebar = document.querySelector(".rightSidebar");
            if (rightSidebar) {
                // 计算rightSidebar应该滑动的目标位置
                const targetScrollPosition = position - rightSidebarPosition > 0 ? position - rightSidebarPosition : 0;
                // 使用transform属性来滑动rightSidebar
                console.log(targetScrollPosition);
                rightSidebar.style.transform = `translateY(${targetScrollPosition}px)`;
                rightSidebar.style.transition = "transform 0.3s ease-in-out"; // 平滑过渡效果
            }
        }
    };

    const logo = require("../../assets/teamlogo.png");
    const avatars = [
        require("../../assets/team-people/325.jpg"),
        require("../../assets/team-people/AlrginCypress.jpg"),
        require("../../assets/team-people/Dcelysiz.png"),
        require("../../assets/team-people/Hayaizo.jpg"),
        require("../../assets/team-people/isryds.jpg"),
        require("../../assets/team-people/MedivhTirisfal.jpg"),
        require("../../assets/team-people/Sakuranori.jpg"),
        require("../../assets/team-people/Sylvia.jpg"),
        require("../../assets/team-people/Xiayu.jpg"),
        require("../../assets/team-people/yuxialuozi.png"),
    ];

    return (
        <div className={styles.root}>
            <div className="bigbox">
                <LogoCircle logo={logo} avatars={avatars} />
                <div className="context">
                    <h1 id="组织名称">组织名称</h1>
                    <hr />
                    <p>
                        CreaMaker是由长沙理工大学计算机学院的学生自主创建的组织，旨在通过创新项目和实践活动，激发人的创造力和技术动手能力。在这个组织中，我们不仅会进行技术学习，还会开发有趣且实用的项目，致力于将创意转化为实际的产品和服务。我们的成员热衷于通过技术与创新解决问题，共同成长。
                    </p>
                    <h1 id="组织特色">组织特色</h1>
                    <hr />
                    <ul>
                        <li>
                            <p>
                                <strong>1.创意驱动</strong>
                                ：CreaMaker欢迎所有富有创意的想法，无论是软件、硬件，还是跨学科项目，我们都为创新者提供自由发展的空间。
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>2.实践为主</strong>：我们秉承“边做边学”的理念，所有成员都可以通过实际项目提升自己的技术和项目管理能力。{" "}
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>3.协作与共享</strong>：组织内部注重团队合作与资源共享，成员们通过互动与协作，激发更多灵感，推动项目进展。{" "}
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>4.开放与包容</strong>：CreaMaker鼓励多样化的背景和思维方式，欢迎来自不同领域的人才，共同参与项目开发。
                            </p>
                        </li>
                    </ul>
                    <h1 id="我们的代表产品">我们的代表产品</h1>
                    <hr />
                    <h3>长理星球</h3>
                    <p>
                        长理星球是一款由CreaMaker为长沙理工大学开发的社区交流App，专为校内学生提供互动与互助的平台。
                        该应用的核心功能是通过社区讨论、答疑等方式，促进学生之间的交流与合作，帮助解决学习和生活中的问题。
                        除了社交功能外，长理星球还集成了多种实用工具，如:
                    </p>
                    <ul>
                        <li>
                            <p>
                                <strong>1.成绩查询</strong>：学生们可以在App内查看学期成绩
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>2.课表定制</strong>：用户可以根据个人课表定制学习计划,方便日程管理
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>3.学习资料分享</strong>：提供一个让学生分享笔记,复习资料,作业答案的平台
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="rightSidebar">
                    <ul>
                        {textArr.map((item) => {
                            return (
                                <li key={item.id} className={item.id === active ? "active" : ""} onClick={() => clickActive(item.id, item.text)}>
                                    {item.text}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
