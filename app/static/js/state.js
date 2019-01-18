const appStateCore = {
  intitalize: function() {
    appStateUI.initialize();
  },

  stateController: {
    graphicsController: {
      setGraphics: function(a, b, c) {
        const graphicsArray = [a, b, c];
        appStateUI.updateGraphics(graphicsArray);
      }
    },
    equationController: {
      setEquation: function(a, b, c) {
        const equationArray = [a, b, c];
        appStateUI.updateEquation(equationArray);
      }
    },
    textController: {
      setText: function(a, b, c) {
        const textArray = [a, b, c];
        appStateUI.updateText(textArray);
      }
    }
  }
}