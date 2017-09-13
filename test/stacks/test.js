'use strict';

var expect = require('chai').expect;

const {
  checkParens,
  validate,
  finalText,
  finalText2
} = require('../../src/stacks/problems');

describe('#checkParens', () => {
  it('Returns true for correct nesting', () => {
    expect(checkParens('')).to.be.equal(true);
    expect(checkParens('()')).to.be.equal(true);
    expect(checkParens('(Hello)')).to.be.equal(true);
    expect(checkParens('()()')).to.be.equal(true);
  });

  it('Returns false for incorrect nesting', () => {
    expect(checkParens('(')).to.be.equal(false);
    expect(checkParens(')(')).to.be.equal(false);
    expect(checkParens('(adfa(dvb)')).to.be.equal(false);
  });
});

describe('#validate', () => {
  it('Returns true for correct nesting', () => {
    expect(validate('')).to.be.equal(true);
    expect(validate('{ [ ] ( ) }')).to.be.equal(true);
  });

  it('Returns false for incorrect nesting', () => {
    expect(validate('{ [ ( ] ) }')).to.be.equal(false);
    expect(validate('}')).to.be.equal(false);
    expect(validate('{ [ }')).to.be.equal(false);
  });
});

describe('#finalText', () => {
  it('Returns correct string for correct set of commands', () => {
    expect(finalText([])).to.be.equal('');

    expect(finalText([
      { command: 'write', text: 'Hello' },
      { command: 'write', text: 'World' }
    ])).to.be.equal('HelloWorld');

    expect(finalText([
      { command: 'write', text: 'Hello' },
      { command: 'write', text: 'World' },
      { command: 'undo' }
    ])).to.be.equal('Hello');
  });

  it('Throws an error for too many undos', () => {
    expect(() => {
      finalText([
        { command: 'write', text: 'Hello' },
        { command: 'write', text: 'World' },
        { command: 'undo' },
        { command: 'undo' },
        { command: 'undo' }
      ]);
    }).to.throw(Error);
  });
});

describe('#finalText2', () => {
  it('Satisifies the original tests', () => {
    expect(finalText2([])).to.be.equal('');
    expect(finalText2([
      { command: 'write', text: 'Hello' },
      { command: 'write', text: 'World' }
    ])).to.be.equal('HelloWorld');

    expect(finalText2([
      { command: 'write', text: 'Hello' },
      { command: 'write', text: 'World' },
      { command: 'undo' }
    ])).to.be.equal('Hello');

    expect(() => {
      finalText2([
        { command: 'write', text: 'Hello' },
        { command: 'write', text: 'World' },
        { command: 'undo' },
        { command: 'undo' },
        { command: 'undo' }
      ]);
    }).to.throw(Error);
  });

  it('Returns correct string for correct set of commands', () => {
    expect(finalText2([
      { command: 'write', text: 'Hello' },
      { command: 'write', text: 'World' },
      { command: 'undo' },
      { command: 'redo' }
    ])).to.be.equal('HelloWorld');

    expect(finalText2([
      { command: 'write', text: 'Hello' },
      { command: 'write', text: 'World' },
      { command: 'undo' },
      { command: 'redo' },
      { command: 'undo' }
    ])).to.be.equal('Hello');
  });

  it('Throws an error for too many redos', () => {
    expect(() => {
      finalText2([
        { command: 'write', text: 'Hello' },
        { command: 'write', text: 'World' },
        { command: 'undo' },
        { command: 'redo' },
        { command: 'redo' }
      ]);
    }).to.throw(Error);
  });
});
