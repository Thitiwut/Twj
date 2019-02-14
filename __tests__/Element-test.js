import 'react-native';
import React from 'react';
import Register from '../src/Register';
import renderer from 'react-test-renderer';

let isElementExist =  function(tree,element){
    console.warn(tree.children)

    const result = tree.children.filter((node)=>{
        console.log(node)
       return node.props && node.props.testID == element;
    })

    return result.length > 0;
    
    // let result = undefined;
    // for(node in tree.children){
    //     if(tree.children.[node].props.testID == element){
    //         result = true
    //     }
    // }
    // return result
}

it('find Element',()=>{
    let tree = renderer.create(<Register />).toJSON();

    expect(isElementExist(tree,'username')).toBe(true);
    // expect(isElementExist(tree,'username')).toBeDefined();
})