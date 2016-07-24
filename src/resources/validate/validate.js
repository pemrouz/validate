export default function validate({ value = '', validation }) { 
  const { pattern, message, interacted } = validation
      , o = once(this)

  o.on('blur.interacted', d => o.draw(validation.interacted = true))
    .classed('is-interacted', interacted)
    .classed('is-invalid', !(validation.valid = pattern.test 
      ? pattern.test(value) 
      : pattern.call(this, value)))

  o('.invalid-message', message)
    .text(str)
}
