'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validate;
function validate(_ref) {
  var _ref$value = _ref.value;
  var value = _ref$value === undefined ? '' : _ref$value;
  var validation = _ref.validation;
  var pattern = validation.pattern;
  var message = validation.message;
  var interacted = validation.interacted;
  var o = once(this);

  o.on('blur.interacted', function (d) {
    return o.draw(validation.interacted = true);
  }).classed('is-interacted', interacted).classed('is-invalid', !(validation.valid = pattern.test ? pattern.test(value) : pattern.call(this, value)));
  console.log("validation.valid", validation.valid);
  console.log("pattern.test", pattern.test);
  console.log("value", value);
  console.log("pattern.test(value) ", pattern.test(value));
  o('.invalid-message', message).text(str);
}