module.exports = `
:host(.is-interacted.is-invalid) .textfield {
  border-color: rgb(150, 30, 30);
  background: rgb(255,210,210); }

.invalid-message {
  opacity: 0;
  position: absolute;
  width: 100%;
  top: calc(100% + 10px);
  text-align: center;
  background-color: #ffe39a;
  color: black;
  font-size: 0.8em;
  padding: 7px;
  z-index: 1000;
  border-radius: 3px;
  border: 1px solid #ceb77d;
  pointer-events: none;
  transition: opacity 100ms; }

:host(.is-focused.is-interacted.is-invalid) .invalid-message {
  opacity: 1; }

.invalid-message::before {
  content: '';
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  top: -20px;
  left: calc(50% - 10px);
  border: 10px solid transparent;
  border-bottom-color: #ffe399; }
`