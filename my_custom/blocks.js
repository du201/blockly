Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "digital_write",
    "message0": "(digital write) %1 set pin %2 to output %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "PIN",
        "options": [
          [
            "D4",
            "D4"
          ],
          [
            "A6",
            "A6"
          ],
          [
            "A2",
            "A2"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "LOW_HIGH",
        "options": [
          [
            "low",
            "LOW"
          ],
          [
            "high",
            "HIGH"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
  ,{
    "type": "connect_part_to_pin",
    "message0": "connect %1 to pin %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "PART",
        "options": [
          [
            "LED",
            "LED"
          ],
          [
            "Light Sensor",
            "LIGHT_SENSOR"
          ],
          [
            "Sound Sensor",
            "SOUND_SENSOR"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "PIN",
        "options": [
          [
            "D4",
            "D4"
          ],
          [
            "A6",
            "A6"
          ],
          [
            "A2",
            "A2"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },






 // Blocks for Bear variable.
//  {
//     "type": "variables_get_bear",
//     "message0": "%1",
//     "args0": [
//       {
//         "type": "field_variable",
//         "name": "VAR",
//         "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
//         "variableTypes": ["bear"],    // Specifies what types to put in the dropdown
//         "defaultType": "bear"
//       }
//     ],
//     "output": "bear",    // Returns a value of "Panda"
//     "style": "variable_blocks",
//     "helpUrl": "%{BKY_VARIABLES_GET_HELPURL}",
//     "tooltip": "%{BKY_VARIABLES_GET_TOOLTIP}",
//     "extensions": ["contextMenu_variableSetterGetter"]
//   },

//   {
//     "type": "variables_set_bear",
//     "message0": "%{BKY_VARIABLES_SET}",
//     "args0": [
//       {
//         "type": "field_variable",
//         "name": "VAR",
//         "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
//         "variableTypes": ["bear"],
//         "defaultType": "bear"
//       },
//       {
//         "type": "input_value",
//         "name": "VALUE",
//         "check": "bear"    // Checks that the input value is of type "Panda"
//       }
//     ],
//     "previousStatement": null,
//     "nextStatement": null,
//     "style": "variable_blocks",
//     "tooltip": "%{BKY_VARIABLES_SET_TOOLTIP}",
//     "helpUrl": "%{BKY_VARIABLES_SET_HELPURL}",
//     "extensions": ["contextMenu_variableSetterGetter"]
//   },
  {
    "type": "function_serial_println",
    "lastDummyAlign0": "CENTRE",
    "message0": "Display %1 on Serial Port",
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "int",
        "align": "CENTRE"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "function_analog_read",
    "message0": "Analog Value from Port %1",
    "args0": [
      {
        "type": "input_value",
        "name": "PIN_NUM",
        "check": "int",
        "align": "CENTRE"
      }
    ],
    "inputsInline": true,
    "output": "int",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "port_lightsensor",
    "message0": "Light Sensor Port Number",
    "inputsInline": false,
    "output": "int",
    "tooltip": "",
    "helpUrl": "http://www.example.com/"
  },
  {
    "type": "port_soundsensor",
    "message0": "Sound Sensor Port Number",
    "inputsInline": false,
    "output": "int",
    "tooltip": "",
    "helpUrl": "http://www.example.com/"
  },
  // Block for digitalWrite function
  {
    "type": "function_digitalwrite",
    "message0": "set pin %1 as digitally %2",
    "args0": [
      {
        "type": "input_value",
        "name": "PIN_NUM",
        "check": "int",
        "align": "CENTRE"
      },
      {
        "type": "field_dropdown",
        "name": "VOLTAGE",
        "options": [
          [
            "high",
            "HIGH"
          ],
          [
            "low",
            "LOW"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },

 // Block for pinMode function
 {
  "type": "function_pinmode",
  "message0": "set pin %1 %2 to %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PIN",
      "options": [
        [
          "D4",
          "D4"
        ],
        [
          "A6",
          "A6"
        ],
        [
          "A2",
          "A2"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "PIN_MODE",
      "options": [
        [
          "output",
          "OUTPUT"
        ],
        [
          "input",
          "INPUT"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
 // Blocks for Panda variable.
 {
    "type": "variables_get_int",
    "message0": "%1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
        "variableTypes": ["int"],    // Specifies what types to put in the dropdown
        "defaultType": "int"
      }
    ],
    "output": "int",    // Returns a value of "int"
    "style": "variable_blocks",
    "helpUrl": "%{BKY_VARIABLES_GET_HELPURL}",
    "tooltip": "%{BKY_VARIABLES_GET_TOOLTIP}",
    "extensions": ["contextMenu_variableSetterGetter"]
  },

  {
    "type": "variables_set_int",
    "message0": "%{BKY_VARIABLES_SET}",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
        "variableTypes": ["int"],
        "defaultType": "int"
      },
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "int"    // Checks that the input value is of type "int"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "style": "variable_blocks",
    "tooltip": "%{BKY_VARIABLES_SET_TOOLTIP}",
    "helpUrl": "%{BKY_VARIABLES_SET_HELPURL}",
    "extensions": ["contextMenu_variableSetterGetter"]
  },

  // Block for numeric value.
  {
    "type": "math_number",
    "message0": "%1",
    "args0": [{
      "type": "field_number",
      "name": "NUM",
      "value": 0
    }],
    "output": "int",
    "helpUrl": "%{BKY_MATH_NUMBER_HELPURL}",
    "style": "math_blocks",
    "tooltip": "%{BKY_MATH_NUMBER_TOOLTIP}",
    "extensions": ["parent_tooltip_when_inline"]
  },

  {
    "type": "variables_get",
    "message0": "%1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"
      }
    ],
    "output": null, // The output can be any type
    "style": "variable_blocks",
    "helpUrl": "%{BKY_VARIABLES_GET_HELPURL}",
    "tooltip": "%{BKY_VARIABLES_GET_TOOLTIP}",
    "extensions": ["contextMenu_variableSetterGetter"]
  },
  // Block for variable setter.
  {
    "type": "variables_set",
    "message0": "%{BKY_VARIABLES_SET}",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"
      },
      {
        "type": "input_value", // The input can be any type
        "name": "VALUE"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "style": "variable_blocks",
    "tooltip": "%{BKY_VARIABLES_SET_TOOLTIP}",
    "helpUrl": "%{BKY_VARIABLES_SET_HELPURL}",
    "extensions": ["contextMenu_variableSetterGetter"]
  },
  {
    "type": "setup_loop",
    "message0": "connect %1 %2 setup %3 %4 loop %5 %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "CONNECT_CONTENT"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "SETUP_CONTENT"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "LOOP_CONTENT"
      }
    ],
    "inputsInline": false,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  // Loop function
  {
    "type": "function_loop",
    "message0": "loop %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "CONTENT"
      }
    ],
    "inputsInline": false,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  // Delay function
  {
    "type": "function_delay",
    "message0": "delay %1 second(s)",
    "args0": [
      {
        "type": "field_number",
        "name": "DELAY_TIME",
        "value": 0,
        "min": 0.1,
        "max": 10
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  // Setup function
  {
    "type": "function_setup",
    "message0": "setup %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "CONTENT"
      }
    ],
    "inputsInline": false,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  // Block for boolean data type: true and false.
  {
    "type": "logic_boolean",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "BOOL",
        "options": [
          ["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"],
          ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"]
        ]
      }
    ],
    "output": "Boolean",
    "style": "logic_blocks",
    "tooltip": "%{BKY_LOGIC_BOOLEAN_TOOLTIP}",
    "helpUrl": "%{BKY_LOGIC_BOOLEAN_HELPURL}"
  },
  // Block for if/elseif/else condition.
  {
    "type": "controls_if",
    "message0": "%{BKY_CONTROLS_IF_MSG_IF} %1",
    "args0": [
      {
        "type": "input_value",
        "name": "IF0",
        "check": "Boolean"
      }
    ],
    "message1": "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    "args1": [
      {
        "type": "input_statement",
        "name": "DO0"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "style": "logic_blocks",
    "helpUrl": "%{BKY_CONTROLS_IF_HELPURL}",
    "mutator": "controls_if_mutator",
    "extensions": ["controls_if_tooltip"]
  },
  // If/else block that does not use a mutator.
  {
    "type": "controls_ifelse",
    "message0": "%{BKY_CONTROLS_IF_MSG_IF} %1",
    "args0": [
      {
        "type": "input_value",
        "name": "IF0",
        "check": "Boolean"
      }
    ],
    "message1": "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    "args1": [
      {
        "type": "input_statement",
        "name": "DO0"
      }
    ],
    "message2": "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
    "args2": [
      {
        "type": "input_statement",
        "name": "ELSE"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "style": "logic_blocks",
    "tooltip": "%{BKYCONTROLS_IF_TOOLTIP_2}",
    "helpUrl": "%{BKY_CONTROLS_IF_HELPURL}",
    "extensions": ["controls_if_tooltip"]
  },
  // Block for comparison operator.
  {
    "type": "logic_compare",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "A"
      },
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          ["=", "EQ"],
          ["\u2260", "NEQ"],
          ["\u200F<", "LT"],
          ["\u200F\u2264", "LTE"],
          ["\u200F>", "GT"],
          ["\u200F\u2265", "GTE"]
        ]
      },
      {
        "type": "input_value",
        "name": "B"
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "style": "logic_blocks",
    "helpUrl": "%{BKY_LOGIC_COMPARE_HELPURL}",
    "extensions": ["logic_compare", "logic_op_tooltip"]
  },
  // Block for logical operations: 'and', 'or'.
  {
    "type": "logic_operation",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "A",
        "check": "Boolean"
      },
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          ["%{BKY_LOGIC_OPERATION_AND}", "AND"],
          ["%{BKY_LOGIC_OPERATION_OR}", "OR"]
        ]
      },
      {
        "type": "input_value",
        "name": "B",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "style": "logic_blocks",
    "helpUrl": "%{BKY_LOGIC_OPERATION_HELPURL}",
    "extensions": ["logic_op_tooltip"]
  },
  // Block for negation.
  {
    "type": "logic_negate",
    "message0": "%{BKY_LOGIC_NEGATE_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "BOOL",
        "check": "Boolean"
      }
    ],
    "output": "Boolean",
    "style": "logic_blocks",
    "tooltip": "%{BKY_LOGIC_NEGATE_TOOLTIP}",
    "helpUrl": "%{BKY_LOGIC_NEGATE_HELPURL}"
  },
  // Block for null data type.
  {
    "type": "logic_null",
    "message0": "%{BKY_LOGIC_NULL}",
    "output": null,
    "style": "logic_blocks",
    "tooltip": "%{BKY_LOGIC_NULL_TOOLTIP}",
    "helpUrl": "%{BKY_LOGIC_NULL_HELPURL}"
  },
  // Block for ternary operator.
  {
    "type": "logic_ternary",
    "message0": "%{BKY_LOGIC_TERNARY_CONDITION} %1",
    "args0": [
      {
        "type": "input_value",
        "name": "IF",
        "check": "Boolean"
      }
    ],
    "message1": "%{BKY_LOGIC_TERNARY_IF_TRUE} %1",
    "args1": [
      {
        "type": "input_value",
        "name": "THEN"
      }
    ],
    "message2": "%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
    "args2": [
      {
        "type": "input_value",
        "name": "ELSE"
      }
    ],
    "output": null,
    "style": "logic_blocks",
    "tooltip": "%{BKY_LOGIC_TERNARY_TOOLTIP}",
    "helpUrl": "%{BKY_LOGIC_TERNARY_HELPURL}",
    "extensions": ["logic_ternary"]
  }
]);  // END JSON EXTRACT (Do not delete this comment.)