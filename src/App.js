import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';

import AppHeader from './components/common/header';
// import AppFooter from './components/common/footer';
import AppHome from './views/home';

import { Layout } from 'antd';
const { Header, Content, } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        <AppHome/>
      </Content>
      {/* <Footer>
        <AppFooter/>  
      </Footer>       */}
    </Layout>
  );
}

export default App;