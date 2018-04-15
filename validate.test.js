const { test } = require('tap')
    , { spawn } = require('spawn-client')
    
test('should set control validation classes', spawn(async () => {
  const validate = await require('./')
      , Control = validate(() => {})
      , control = new Control()

  await document.body.appendChild(control).ready

  control.state = {
    validation: {
      pattern: /.+/
    , message: 'required'
    }
  }
  await control.render()
  
  same(control, `
    <anon-1 stylesheet="865677760" class="is-invalid">
      <div class="invalid-message">required</div>
    </anon-1>
  `)
  same(control.state.valid, false)

  control.emit('blur')
  await control.pending

  same(control.state.interacted, true)
  same(control.className.includes('is-invalid'), true)
  same(control.className.includes('is-interacted'), true)
}))