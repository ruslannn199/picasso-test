import './index.scss';
import withProviders from './providers';
import Routing from './router';

const AppWrapper = () => (
  <Routing />
);

const App = withProviders(AppWrapper);

export default App;
