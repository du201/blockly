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
let check = {"4": null, "A6": null, "A2": null};

Blockly.JavaScript['digital_write'] = function(block) {
  let low_high = block.getFieldValue('LOW_HIGH');
  let dropdown_pin = block.getFieldValue('PIN');

  let pinName = "";
  switch (dropdown_pin) {
    case "D4":
      pinName = "4";
      break;
    case "A6":
      pinName = "A6";
      break;
    case "A2":
      pinName = "A2";
      break;
  }

  var code = 'digitalWrite(' + check[pinName] + ', ' + low_high + ');\n';
  return code;
};

Blockly.JavaScript['connect_part_to_pin'] = function(block) {
  let dropdown_part = block.getFieldValue('PART');
  let dropdown_pin = block.getFieldValue('PIN');

  let varName = "";
  switch (dropdown_part) {
    case "LED":
      varName = "ledPin";
      break;
    case "LIGHT_SENSOR":
      varName = "lightSensorPin";
      break;
    case "SOUND_SENSOR":
      varName = "soundSensorPin";
      break;
  }

  let pinName = "";
  switch (dropdown_pin) {
    case "D4":
      pinName = "4";
      break;
    case "A6":
      pinName = "A6";
      break;
    case "A2":
      pinName = "A2";
      break;
  }
  
  check[pinName] = varName;

  var code = "int " + varName + " = " + pinName + ";\n";
  return code;
};

// Below are the original blocks
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


/**
 * 
 * The global variable check is used to sync function_pinmode with connect_part_pin 
 */
Blockly.JavaScript['function_pinmode'] = function(block) {
  // Comparison operator.
  let operator = block.getFieldValue('PIN_MODE');
  let dropdown_pin = block.getFieldValue('PIN');
  let pinName = "";
  switch (dropdown_pin) {
    case "D4":
      pinName = "4";
      break;
    case "A6":
      pinName = "A6";
      break;
    case "A2":
      pinName = "A2";
      break;
  }

  return 'pinMode(' + check[pinName] + ', ' + operator + ');\n';
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
  let delayTime = block.getFieldValue('DELAY_TIME');
  var code = "delay(" + parseFloat(delayTime) * 1000 + ");\n";
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

Blockly.JavaScript['setup_loop'] = function(block) {
  let connectCode = Blockly.JavaScript.statementToCode(block, 'CONNECT_CONTENT');
  let setupCode = Blockly.JavaScript.statementToCode(block, 'SETUP_CONTENT');
  let loopCode = Blockly.JavaScript.statementToCode(block, 'LOOP_CONTENT');
  return connectCode + "void setup() {\n" + setupCode + "  Serial.begin(9600);\n}\nvoid loop() {\n" + loopCode + "\n}";
};