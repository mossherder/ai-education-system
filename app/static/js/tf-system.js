const tfSystemCore = {
  initialize: function() {
    return null;
  },

  createEquation: function(a, b, operator) {
    appStateCore.stateController.equationController.setEquation(a, b, operator);
  },

  showSolution: function() {
    appStateCore.stateController.equationController.showSolution();
  },

  showGraphics: function() {
    appStateCore.stateController.graphicsController.showGraphics();
  },

  showText: function() {
    appStateCore.stateController.textController.showText();
  },

  pointPassBack: function(points) {
    // pass current points back to algorithm
    sessionStorage.setItem('system-points', points.toString());
  }
}