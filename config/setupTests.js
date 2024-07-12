// src/setupTests.js
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'fake-indexeddb/auto';

Enzyme.configure({ adapter: new Adapter() });