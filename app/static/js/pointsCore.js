const pointsCore = {
  getCurrentPoints: function() {
    return pointsCore.impl.totalPoints();
  },
  pointsUpdater: {
    complexity: function(a, b, c) {
      const equationComplexity = a*b*c;
      pointsCore.impl.pointsUpdate('complexity', equationComplexity);
    },
    appTimer: function(points) {
      pointsCore.impl.pointsUpdate('appTimer', points);
    },
    equationTimer: function(points) {
      pointsCore.impl.pointsUpdate('equationTimer', points)
    }
  },
  impl: {
    pointsUpdate: function(category, value) {
      if (!sessionStorage.getItem('points')) {
        sessionStorage.setItem('points', JSON.stringify({[category]: value}));
        return true
      }
      let currentPoints = JSON.parse(sessionStorage.getItem('points'));
      currentPoints[category] = value;
      sessionStorage.setItem('points', JSON.stringify(currentPoints));
      return true
    },
    totalPoints: function() {
      if (!sessionStorage.getItem('points')) {
        return 0;
      }
      const currentPoints = JSON.parse(sessionStorage.getItem('points'));
      const sum = Object.values(currentPoints).reduce((a, b) => a+b, 0);
      return sum;
    }
  }
}