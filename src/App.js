import './App.css';
import {Space} from "antd";
import AppFooter from './components/Footer';
import AppHeader from './components/Header';
import PageContent from './components/PageContent';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <Space className='MenuAndContent'>
        <SideMenu />
        <PageContent/>
      </Space>
      <AppFooter/>
      
    </div>
  );
}

export default App;
