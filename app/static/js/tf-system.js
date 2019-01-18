const tfSystemCore = {
  controller: appStateCore.stateController,

  initialize: function() {
    return null;
  },

  createEquation: function(a, b, operator) {
    tfSystemCore.controller.equationController.setEquation(a, b, operator);
  },

  showSolution: function() {
    tfSystemCore.controller.equationController.showSolution();
  },

  showGraphics: function() {
    tfSystemCore.controller.graphicsController.showGraphics();
  },

  showText: function() {
    tfSystemCore.controller.textController.showText();
  },

  pointPassBack: function(points) {
    // pass current points back to algorithm
  }
}