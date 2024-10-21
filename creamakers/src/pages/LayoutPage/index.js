import React from 'react';
import 'antd/dist/reset.css';
import './index.scss';
import {
    HomeOutlined,
    ProfileOutlined,
    PhoneOutlined,
    SnippetsOutlined,
  } from '@ant-design/icons'
import { useEffect } from 'react';
import {Outlet,useNavigate} from'react-router-dom'
import { Layout, Menu, theme } from 'antd';
const { Content, Sider } = Layout;

const items = [
    { key: '1',icon: <HomeOutlined />,label: '主页',path:'/home'},
    { key: '2',icon: <ProfileOutlined />,label: '项目',path:'/project'},
    { key: '3',icon: <SnippetsOutlined />,label: '资料',path:'/information'},
    { key: '4',icon: <PhoneOutlined />,label: '联系我们',path:'/contentus'},
]
const LayoutPage = ()=>{
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate();
    //页面初始化时候默认跳转主页
    useEffect(()=>{
        navigate('/home')
    },[navigate])
    //菜单栏路由跳转
    const handleClick = (e) => {
        navigate(items[e.key - 1].path)
    };


    return(
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                width={200}
            >
                <div className="demo-logo-vertical" />
                <Menu mode="inline" defaultSelectedKeys={['1']} items={items.map(item => item)} onClick={handleClick}/>
                <div style={{fontSize:12,position:'absolute',left:44,bottom:30}}>备案信息：湘A123456</div>
            </Sider>
            <Layout>
                <Content
                style={{
                    margin: '5px 5px 0 5px',
                }}
                >
                <div
                    style={{
                    padding: 24,
                    minHeight: 1260,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet/>
                </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutPage;