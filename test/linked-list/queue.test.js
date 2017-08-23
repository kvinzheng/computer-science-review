'use strict';

const expect = require('chai').expect; // jshint ignore:line
let Queue = require('../../src/linked-list/queue');

describe('queue', () => {

  it('starts off empty', () => {
    const queue = new Queue();

    expect(queue.size()).to.eq(0);
    expect(queue.dequeue()).to.be.undefined; // jshint ignore:line
  });

  it('can enqueue and dequeue a single item', () => {
    const queue = new Queue();

    queue.enqueue('Hello');

    expect(queue.size()).to.eq(1);
    expect(queue.dequeue()).to.eq('Hello');

    expect(queue.dequeue()).to.be.undefined; // jshint ignore:line
    expect(queue.size()).to.eq(0);
  });

  it('can enqueue and dequeue multiple items', () => {
    const queue = new Queue();

    queue.enqueue('Hello');
    queue.enqueue('and');
    queue.enqueue('Goodbye');

    expect(queue.size()).to.eq(3);

    expect(queue.dequeue()).to.eq('Hello');
    expect(queue.dequeue()).to.eq('and');
    expect(queue.dequeue()).to.eq('Goodbye');

    expect(queue.dequeue()).to.be.undefined; // jshint ignore:line
    expect(queue.size()).to.eq(0);
  });
});
