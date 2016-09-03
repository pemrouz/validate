export default function validate(node, { value = '', validation }) { 
  const { pattern, message, interacted } = validation
      , o = once(node)

  o.on('blur.interacted', (d, i, el, e) => {
    if (d && d.focused) return
    o.draw(validation.interacted = true)
  })
    .classed('is-interacted', interacted)
    .classed('is-invalid', !(validation.valid = pattern.test 
      ? pattern.test(value) 
      : pattern.call(node, value)))

  o('.invalid-message', message)
    .text(str)
}
