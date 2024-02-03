import React, { useEffect, useState } from 'react'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import videoPath from './assets/pathVideo';

const { Header, Content, Footer, Sider } = Layout;
const items = [

    VideoCameraOutlined,
    VideoCameraOutlined,
    VideoCameraOutlined,
    VideoCameraOutlined,
    VideoCameraOutlined,
    VideoCameraOutlined,
    VideoCameraOutlined,
    VideoCameraOutlined,
    VideoCameraOutlined,
    VideoCameraOutlined,
    VideoCameraOutlined,
    VideoCameraOutlined,
    VideoCameraOutlined,

].map((icon, index) => {
    console.log(({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: `ویدیو ${index + 1}`,

    }))
    return (
        {
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `ویدیو ${index + 1}`,

        }
    )
}
);
const Video = () => {

    const [videoStep, setVideoStep] = useState(1)

    const test = (e) => {
        console.log(e.key)
        setVideoStep(e.key)
    }

    useEffect(() => {
        console.log(videoStep)
        console.log(videoPath)
    } , [videoStep])

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} onClick={test} />
            </Sider>
            <Layout
                style={{
                    marginLeft: 200,
                }}
            >
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />


                <Content
                    style={{
                        margin: '24px 16px 0',
                        overflow: 'initial',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >

                        <video src={videoPath[videoStep]} controls width={600} height={300}>
                       
                        </video>

                    </div>
                </Content>


                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >

                   
                    آموزش ری اکت کوِری قسمت
                   &nbsp;
                    {videoStep}

                </Footer>
            </Layout>
        </Layout>
    );
};
export default Video;