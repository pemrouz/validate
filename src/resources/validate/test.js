import 'utilise'
import 'browserenv'
import t from 'tap'
import scope from 'cssscope'
import validate from './validate'

const style = window.getComputedStyle
    , o = once(document.body)('.container', 1, null, ':first-child')

once(document.head)
  ('style', 1)
    .html(scope(file(__dirname + '/validate.css'), 'validate'))

t.test('basic output', t => {
  t.plan(3)

  const div = document.createElement('div')
      , state = {
          validation: {
            pattern: /.+/
          , message: 'required'
          }
        }

  validate(div, state)

  t.equal(state.validation.valid, false, 'sets state.valid')
  t.equal(div.className, 'is-invalid', 'sets is-invalid')
  t.equal(div.innerHTML, '<div class="invalid-message">required</div>', 'sets message')

  o.html('')
})