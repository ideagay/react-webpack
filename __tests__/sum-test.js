/**
 * Created by hyb on 16/8/29.
 */
/** @jsx React.DOM */
var React=require('react-addons');
var TestUtils=React.TestUtils;
var helloWorld=require('../app/sum');
jest.unmock('../app/sum');
describe('TestHelloWorld', () => {
    describe('renderToDocument',() =>{
        it('test hello world', () => {
            TestUtils.renderIntoDocument(<helloWorld/>);
        });
    })
});