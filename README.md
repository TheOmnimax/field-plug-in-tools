# field-plug-in-tools

This is code you can add to field plug-ins so you can test them in a web browser before testing them on the SurveyCTO server.

## How to use

Simply add the [JavaScript code](/blob/master/tools/script_testing.js) to the top of your JavaScript script, and the [HTML tags](/blob/master/tools/template_testing.html) to the top of your HTML markdown. If you are using additional JavaScript files, add links to them as well:

    <script src="other_file.js" charset="UTF-8" defer></script>

When the setAnswer() function is called, then the developer console will say `Set answer to:`, followed by the answer the field was set to. When the goToNextField() function is called, then `Skipped to next field` will appear in the developer console.

Make sure you update the "fieldProperties" object with information related to your field plug-in. For example, if this is going to be used in a _text_ field, change the `FIELDTYPE` to 'text'. You can also add and remove properties that are and are not related to your field plug-in. Check out the [API](https://github.com/surveycto/field-plug-in-resources/blob/master/docs/api-reference.md) to see which field properties are available for each field type.