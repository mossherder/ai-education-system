const operatorCore = {
  createOperator: function(a,b,c) {
    if (c === 0) {
      operator = operatorCore.add(a,b);
      return operator;
    }
    if (c === 1) {
      operator = operatorCore.subtract(a,b);
      return operator;
    }
    return false;
  },
  add: function(a,b) {
    return {solution: a+b, symbol: '+', complexity: 1};
  },
  subtract: function(a,b) {
    return {solution: a-b, symbol: '-', complexity: 5};
  }
}