const once = require('utilise/once')
    , str = require('utilise/str')
    , style = require('@compone/style')
    , classed = require('@compone/class')
    , styles = require('./validate.css.js')
    , define = require('@compone/define') 

module.exports = Component => define(class extends classed(Component) {
  async render(node, state){
    await super.render(node, state)
    render(node, state)
  }
})

function render (node, state) { 
  style(node, styles)
  const { value = '', interacted, validation = {} } = state
      , { pattern = () => {}, message } = validation
      , o = once(node)

  o.on('blur.interacted', function(){
    if (this.state && this.state.focused) return
    o.draw(state.interacted = true)
  }).classed('is-interacted', interacted)
    .classed('is-invalid', !(state.valid = pattern.test 
      ? pattern.test(value) 
      : pattern.call(node, value)))

  o('.invalid-message', message)
    .text(str)
}
