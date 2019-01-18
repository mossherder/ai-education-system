const appStateCore = {
  initialize: function() {
    appStateUI.initialize();
  },

  stateController: {
    graphicsController: {
      showGraphics: function() {
        appStateUI.showGraphics();
      }
    },
    equationController: {
        setEquation: function(a,b,c) {
          let operator = null;
          if (c === 0) {
            operator = operatorCore.add;
          }
          if (c === 1) {
            operator = operatorCore.subtract;
          }
          const result = operator(Number(a), Number(b))
          const operatorSymbol = result.symbol;
          const solution = result.solution;
          const displayArray = [a, operatorSymbol, b, solution]
          appStateUI.updateEquation(displayArray);
        },
        showSolution: function() {
          appStateUI.showSolution();
        }
      }
    },
    textController: {
      showText: function() {
        appStateUI.showText();
      }
    },
    pointsFlow: {
      updatePoints: function() {
        const points = gatherCurrentPoints();
        tfSystemCore.pointPassBack(points);
      },
      gatherCurrentPoints: function() {
        // Does the system decide points or the algorithm??
        return 0;
      }
    }
  }
