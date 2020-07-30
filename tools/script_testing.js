// Put this at the top of your script when testing in a web browser
class Choice {
  constructor (value, index, label, selected, image) {
    this.CHOICE_INDEX = index
    this.CHOICE_VALUE = String(value)
    this.CHOICE_LABEL = label
    if (selected) {
      this.CHOICE_SELECTED = true
    } else {
      this.CHOICE_SELECTED = false
    }
    this.CHOICE_IMAGE = image
  }
}

var fieldProperties = {
  CHOICES: [
    new Choice(0, 0, 'Choice 1'),
    new Choice(1, 1, 'Choice 2'),
    new Choice(2, 2, 'Choice 3')
  ],
  METADATA: '',
  LABEL: 'This is a label',
  HINT: 'This is a hint',
  PARAMETERS: [
    {
      key: 'parameter1',
      value: '1'
    },
    {
      key: 'parameter2',
      value: '2'
    }
  ],
  FIELDTYPE: 'select_multiple',
  APPEARANCE: '',
  LANGUAGE: 'english'
}

function setAnswer (ans) {
  console.log('Set answer to: ' + ans)
}

function setMetaData (string) {
  fieldProperties.METADATA = string
}

function getMetaData () {
  return fieldProperties.METADATA
}

function getPluginParameter (param) {
  const parameters = fieldProperties.PARAMETERS
  if (parameters != null) {
    for (const p of fieldProperties.PARAMETERS) {
      const key = p.key
      if (key == param) {
        return p.value
      } // End IF
    } // End FOR
  } // End IF
}

function goToNextField () {
  console.log('Skipped to next field')
}

// setFocus() // Use this if your script includes a setFocus() function
// document.body.classList.add('android-collect') //
// Above for testing only */
