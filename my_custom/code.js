// Blockly.JavaScript['variables_get_bear'] = function(block) {
//   console.log(block);
//   // console.log(Blockly.Workspace.getAllVariables());
//   return "bear get";
// };

// Blockly.JavaScript['variables_set_bear'] = function(block) {
//   console.log(block);
//   // console.log(Blockly.Workspace.getAllVariables());
//   return "bear set";
// };
Blockly.JavaScript['function_serial_println'] = function(block) {
  // Comparison operator.
  let value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return 'Serial.println(' + value + ');\n';
};

Blockly.JavaScript['function_analog_read'] = function(block) {
  // Comparison operator.
  let pinNum = Blockly.JavaScript.valueToCode(block, 'PIN_NUM', Blockly.JavaScript.ORDER_ATOMIC);
  return ['analogRead(' + pinNum + ')', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['port_lightsensor'] = function(block) {
  return ['A6', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['port_soundsensor'] = function(block) {
  return ['A2', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['function_digitalwrite'] = function(block) {
  // Comparison operator.
  var operator = block.getFieldValue('VOLTAGE');
  let pinNum = Blockly.JavaScript.valueToCode(block, 'PIN_NUM', Blockly.JavaScript.ORDER_ATOMIC);
  return 'digitalWrite(' + pinNum + ', ' + operator + ');\n';
};

Blockly.JavaScript['function_pinmode'] = function(block) {
  // Comparison operator.
  var operator = block.getFieldValue('PIN_MODE');
  let pinNum = Blockly.JavaScript.valueToCode(block, 'PIN_NUM', Blockly.JavaScript.ORDER_ATOMIC);
  return 'pinMode(' + pinNum + ', ' + operator + ');\n';
};

Blockly.JavaScript['variables_get_int'] = function(block) {
  // Variable getter.
  var code = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['variables_set_int'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  return varName + ' = ' + argument0 + ';\n';
};

Blockly.JavaScript['variables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  return varName + ' = ' + argument0 + ';\n';
};

Blockly.JavaScript['function_delay'] = function(block) {
  let valueInput = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "delay(" + valueInput + ");\n";
  return code;
};

Blockly.JavaScript['function_loop'] = function(block) {
  let contentCode = Blockly.JavaScript.statementToCode(block, 'CONTENT');
  return "void loop() {\n" + contentCode + "}\n";
};

Blockly.JavaScript['function_setup'] = function(block) {
  let contentCode = Blockly.JavaScript.statementToCode(block, 'CONTENT');
  return "void setup() {\n" + contentCode + "  Serial.begin(9600);\n}\n";
};