import DataShower from "./components/dataShower";
const dataShower = require('./components/dataShower');
import React from 'react';
import 'jsdom-global/register';
import { mount, shallow, ShallowWrapper, configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import "babel-core/register";
import "babel-polyfill";


import fetchUsers from './services/users.service';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<DataShower />);
});

describe('<TableCell /> rendering', () => {
    it('should render one <TableCell>', () => {
        //expect(wrapper.find('.showId').text()).toEqual('Name')
        expect(wrapper.find('.showId').length).toEqual(4)
    });
});

describe('fetch users', () => {
    it('should return an array with status code 200', () => {
        //expect(wrapper.find('.showId').text()).toEqual('Name')
       (async() => {
        expect(await fetchUsers()).toBeInstanceOf(Array);
       })();
    });
});