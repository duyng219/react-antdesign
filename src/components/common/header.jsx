import React from 'react'
import { Menu } from 'antd';

const AppHeader = () => {
    return (
        <div className='container-fluid'>
            <div className="header">
                <div className="logo">
                    <a href="index.html" className="ds-logo">
                        <span>D</span>Duy Nguyen
                    </a>
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key={'home'}>Home</Menu.Item>
                    <Menu.Item key={'about'}>About</Menu.Item>
                    <Menu.Item key={'features'}>Features</Menu.Item>
                    <Menu.Item key={'howitworks'}>How it works</Menu.Item>
                    <Menu.Item key={'faq'}>FAQ</Menu.Item>
                    <Menu.Item key={'pricing'}>Pricing</Menu.Item>
                    <Menu.Item key={'contact'}>Contact</Menu.Item>
                </Menu>
            </div>
        </div>
    )
}

export default AppHeader