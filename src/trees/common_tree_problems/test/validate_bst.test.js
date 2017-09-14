const {expect} = require('chai');
const isValidBST = require('../validate_bst.js');



describe("validate bst", function() {

 let simpleNode = {value: 10, left: {value: 1, left: null, right: null}, right: {value: 2, left: null, right: null}};


  it("this is a validate bst ", function() {
    expect(isValidBST(simpleNode)).to.equal(true);
  });
});
