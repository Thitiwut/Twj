import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('App SnapShot', () => {
 const snap = renderer.create(<App />).toJSON();
 console.log(snap)
 expect(snap).toMatchSnapshot()
});
