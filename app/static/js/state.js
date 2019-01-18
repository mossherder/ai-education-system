const appStateCore = {
  initialize: function() {
    appStateUI.initialize();
    window.setInterval(1000, appStateCore.pointsFlow.updatePoints);
  },
  stateController: {
    graphicsController: {
      showGraphics: function() {
        appStateUI.showGraphics();
      }
    },
    equationController: {
        setEquation: function(a,b,c) {
          const result = operatorCore.createOperator(Number(a), Number(b), c);
          if (result === false) {
            return Error('Unable to operate input values');
          }
          const operatorSymbol = result.symbol;
          const solution = result.solution;
          const complexity = result.complexity;
          const displayArray = [a, operatorSymbol, b, solution]
          pointsCore.pointsUpdater.complexity(a, complexity, b);
          appStateUI.updateEquation(displayArray);
          timerCore.equationTimer.startRestart();
          return true;
        },
        showSolution: function() {
          appStateUI.showSolution();
        }
      },
    textController: {
      showText: function() {
        appStateUI.showText();
      }
    },
  },
  pointsFlow: {
    updatePoints: function() {
      const points = pointsCore.getCurrentPoints();
      tfSystemCore.pointPassBack(points);
    }
  },
}
