const timerCore = {
  initialize: function() {
    timerCore.appTimer.initialize();
  },
  appTimer: {
    currentPoints: 0,
    initialize: function() {
      timerCore.appTimer.timerInterval = window.setInterval(function() {
        timerCore.appTimer.addPoint();
        timerCore.appTimer.updatePoints();
      }, 10000);
    },
    addPoint: function() {
      timerCore.appTimer.currentPoints += 1;
    },
    updatePoints: function() {
      pointsCore.pointsUpdater.appTimer(timerCore.appTimer.currentPoints);
    }
  },
  equationTimer: {
    startRestart: function() {
      timerCore.equationTimer.currentPoints = 10;
      timerCore.equationTimer.timerInterval = window.setInterval(function() {
        timerCore.equationTimer.dropPoint();
        timerCore.equationTimer.updatePoints();
      }, 10000);
    },
    dropPoint: function() {
      timerCore.equationTimer.currentPoints -= 1;
    },
    updatePoints: function() {
      pointsCore.pointsUpdater.equationTimer(timerCore.equationTimer.currentPoints);
    }
  }
}