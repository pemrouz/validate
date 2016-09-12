'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validate;
function validate(node, _ref) {
  var _ref$value = _ref.value;
  var value = _ref$value === undefined ? '' : _ref$value;
  var validation = _ref.validation;
  var pattern = validation.pattern;
  var message = validation.message;
  var interacted = validation.interacted;
  var o = once(node);

  o.on('blur.interacted', function (d, i, el, e) {
    if (d && d.focused) return;
    o.draw(validation.interacted = true);
  }).classed('is-interacted', interacted).classed('is-invalid', !(validation.valid = pattern.test ? pattern.test(value) : pattern.call(node, value)));

  o('.invalid-message', message).text(str);
}