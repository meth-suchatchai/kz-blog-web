import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

export default Reactotron.configure({
  name: 'Kuroshibaz Web',
  port: 9090,
  host: 'localhost',
  environment: process.env.NODE_ENV,
})
  .use(reactotronRedux())
  .connect();
