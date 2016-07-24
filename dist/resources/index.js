module.exports = {
    "validate.css": {
        "name": "validate.css",
        "body": ":host(.is-interacted.is-invalid) .input {\r\n  border-color: rgb(150, 30, 30);\r\n  background: rgb(255,210,210); }\r\n\r\n.invalid-message {\r\n  opacity: 0;\r\n  position: absolute;\r\n  width: 100%;\r\n  top: calc(100% + 10px);\r\n  text-align: center;\r\n  background-color: #ffe39a;\r\n  color: black;\r\n  font-size: 0.8em;\r\n  padding: 7px;\r\n  z-index: 1000;\r\n  border-radius: 3px;\r\n  border: 1px solid #ceb77d;\r\n  pointer-events: none;\r\n  transition: opacity 100ms; }\r\n\r\n:host(.is-focused.is-interacted.is-invalid) .invalid-message {\r\n  opacity: 1; }\r\n\r\n.invalid-message::before {\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  top: -20px;\r\n  left: calc(50% - 10px);\r\n  border: 10px solid transparent;\r\n  border-bottom-color: #ffe399; }"
    },
    "validate": {
        "name": "validate",
        "body": require('./validate/validate.js').default || require('./validate/validate.js'),
        "headers": {
            "needs": "[css]"
        }
    }
}