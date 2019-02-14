import 'react-native';
import React from 'react';
import Home from '../src/Home';

import renderer from 'react-test-renderer';

it('function and state test',()=>{
    let HomeData = renderer.create(<Home />).getInstance();
    // HomeData.change(2)
    // expect(HomeData.state.data).toEqual(20);
    expect(HomeData.change(2)).toEqual(20)
})