import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Profile from '../components/Profile';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});