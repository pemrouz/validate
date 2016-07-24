'use strict';

require('utilise');

require('browserenv');

var _tap = require('tap');

var _tap2 = _interopRequireDefault(_tap);

var _cssscope = require('cssscope');

var _cssscope2 = _interopRequireDefault(_cssscope);

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = window.getComputedStyle,
    o = once(document.body)('.container', 1, null, ':first-child');

once(document.head)('style', 1).html((0, _cssscope2.default)(file(__dirname + '/validate.css'), 'validate'));

_tap2.default.test('basic output', function (t) {
  t.plan(3);

  var div = document.createElement('div'),
      state = {
    validation: {
      pattern: /.+/,
      message: 'required'
    }
  };

  _validate2.default.call(div, state);

  t.equal(state.validation.valid, false, 'sets state.valid');
  t.equal(div.className, 'is-invalid', 'sets is-invalid');
  t.equal(div.innerHTML, '<div class="invalid-message">required</div>', 'sets message');

  o.html('');
});