import { Link } from 'react-router-dom';
import './index.scss';
import withProviders from './providers';
import Routing from './router';
import { Layout } from 'antd';

const { Header, Content } = Layout;

const App: React.FC = () => (
  <Layout>
    <Header>
      <Link to="/">Home</Link>
    </Header>
    <Content style={{
      padding: "0 10px",
      margin: "0 auto",
    }}>
      <Routing />
    </Content>
  </Layout>
);

export default withProviders(App) as React.FC;
