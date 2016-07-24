# `validate`

[![image](https://img.shields.io/badge/component-vanilla-green.svg?style=flat-square)](https://github.com/pemrouz/vanilla/#vanilla)

Validates a component. Sets `is-invalid` when invoked, `is-interacted` on blur and an error message.

### [Usage](https://github.com/pemrouz/vanilla/#using)

### API

**`validation = { pattern, message }`**

* `pattern` is either a regex or function that will be invoked on the value of the component.
* `message` is the error messge that will be displayed if the element is invalid, interacted and focused.