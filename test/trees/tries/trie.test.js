const expect = require('chai').expect; // jshint ignore:line
var Trie = require('../../../src/trees/tries/trie.js');

describe('Trie', function() {
  it('can be initialized', function() {
    var t = new Trie();
  });

  describe('with a trie', function() {
    var t;

    beforeEach(function() {
      t = new Trie();
    });

    describe('.learn', function() {
      it('learns a word character by character', function() {
        t.learn('be');
        var b = t.characters.b;
        // console.log('what is t value', t);
        expect(b).to.exist; // jshint ignore:line
        expect(b.isWord).to.not.exist; // jshint ignore:line
        var e = b.characters.e;
        expect(e).to.exist; // jshint ignore:line
        expect(e.isWord).to.exist; // jshint ignore:line
        expect(e.characters).to.deep.equal({});
      });

      it('learns an extension', function() {
        t.learn('be');
        t.learn('begin');
        var e = t.characters.b.characters.e;
        expect(e.isWord).to.exist; // jshint ignore:line
        var n = e.characters.g.characters.i.characters.n;
        expect(n.isWord).to.exist; // jshint ignore:line
      });

      it('learns a prefix', function() {
        t.learn('begin');
        t.learn('be');
        var e = t.characters.b.characters.e;
        expect(e.isWord).to.exist; // jshint ignore:line
        var n = e.characters.g.characters.i.characters.n;
        expect(n.isWord).to.exist; // jshint ignore:line
      });
    });

    describe('.find', function() {
      it('returns to.existy for a nonexistent string', function() {
        expect(t.find('nope')).to.not.exist; // jshint ignore:line
      });

      it('returns the right node for a prefix', function() {
        t.learn('begin');
        expect(t.find('b')).to.deep.equal(t.characters.b);
      });

      it('returns the last node for a prefix', function() {
        // Thanks to Nikki Anderson and Stephanie Daffara
        t.learn('begin');
        t.learn('began');
        var ending = t.characters.b.characters.e.characters.g;
        expect(t.find('beg')).to.deep.equal(ending);
      });
    });

    describe('.getWords', function() {
      it('gets a child word', function() {
        t.learn('beast');
        expect(t.getWords()).to.deep.equal(['beast']);
      });

      it('gets multiple child words', function() {
        t.learn('begin');
        t.learn('beginner');
        expect(t.getWords()
          ).to.deep.equal(['begin', 'beginner']);
      });

      xit('gets its own node if it is a word', function() {
        t.learn('a');
        expect(t.characters.a.getWords()).to.deep.equal(['a']);
      });

      it('returns an empty array if there are no words', function() {
        expect(t.getWords()).to.deep.equal([]);
      });

      it('returns multiple children on different branches', function() {
        // Thanks to Stu Stein.
        t.learn('begin');
        t.learn('best');
        expect(t.getWords()
          ).to.deep.equal(['begin', 'best']);
      });
    });

    describe('.autoComplete', function() {
      beforeEach(function() {
        t.learn('be');
        t.learn('begin');
        t.learn('beginner');
        t.learn('beast');
      });

      it('can recover multiple completions for a prefix', function() {
        expect(t.autoComplete('beg')).to.deep.equal(['begin', 'beginner']);
      });

      it('can recover a single completion', function() {
        expect(t.autoComplete('bea')).to.deep.equal(['beast']);
      });

      it('can recover a completion for the whole word', function() {
        expect(t.autoComplete('beast')).to.deep.equal(['beast']);
      });

      it('can recover many completions', function() {
        expect(t.autoComplete('be')).to.deep.equal(['be', 'begin', 'beginner', 'beast']);
      });
      it('returns an empty array when there are no completions', function() {
        expect(t.autoComplete('a')).to.deep.equal([]);
      });
    });

  });

});
