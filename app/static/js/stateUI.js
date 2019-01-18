const appStateUI = {
  mainDiv: 'main-content',
  mainGraphics: 'main-graphics',
  mainEquation: 'main-equation',
  mainText: 'main-text',
  graphicsA: 'graphics-A',
  graphicsB: 'graphics-B',
  graphicsC: 'graphics-C',
  equationA: 'equation-A',
  equationB: 'equation-B',
  equationC: 'equation-C',
  equationD: 'equation-D',
  equationE: 'equation-E',
  textA: 'text-A',
  textB: 'text-B',
  textC: 'text-C',

  initialize: function() {
    let mainDiv = $('#' + appStateUI.mainDiv);
    createGraphicsPlaceholder().appendTo(mainDiv);
    createEquationPlaceholder().appendTo(mainDiv);
    createTextPlaceholder().appendTo(mainDiv);

    function createGraphicsPlaceholder() {
      const placeholderA = $('<div/>', {
        id: appStateUI.graphicsA
      });
      const placeholderB = $('<div/>', {
        id: appStateUI.graphicsB
      });
      const placeholderC = $('<div/>', {
        id: appStateUI.graphicsC
      });
      let newDiv = $('<div/>',{
        id: appStateUI.mainGraphics,
      });
      newDiv.append(
        placeholderA, 
        placeholderB, 
        placeholderC
        );
      return newDiv;
    }

    function createEquationPlaceholder() {
      const placeholderA = $('<div/>', {
        id: appStateUI.equationA
      });
      const placeholderB = $('<div/>', {
        id: appStateUI.equationB
      });
      const placeholderC = $('<div/>', {
        id: appStateUI.equationC
      });
      const placeholderD = $('<div/>', {
        id: appStateUI.equationD
      });
      const placeholderE = $('<div/>', {
        id: appStateUI.equationE
      });
      let newDiv = $('<div/>',{
        id: appStateUI.mainEquation,
      });
      newDiv.append(
        placeholderA, 
        placeholderB, 
        placeholderC,
        placeholderD,
        placeholderE,
        );
      return newDiv;
    }

    function createTextPlaceholder() {
      const placeholderA = $('<div/>', {
        id: appStateUI.textA
      });
      const placeholderB = $('<div/>', {
        id: appStateUI.textB
      });
      const placeholderC = $('<div/>', {
        id: appStateUI.textC
      });
      let newDiv = $('<div/>',{
        id: appStateUI.mainText,
      });
      newDiv.append(
        placeholderA, 
        placeholderB, 
        placeholderC
        );
      return newDiv;
    }
  },
  
  updateEquation: function(array) {
    $('#' + appStateUI.equationA).text(array[0]);
    $('#' + appStateUI.equationB).text(array[1]);
    $('#' + appStateUI.equationC).text(array[2]);
    $('#' + appStateUI.equationD).text('=');
    $('#' + appStateUI.equationE).hide();
    $('#' + appStateUI.equationE).text(array[3]);
  },

  showSolution: function() {
    $('#' + appStateUI.equationE).show();
  },

  updateGraphics: function() {
    const array = [
      $('#' + appStateUI.equationA).text(),
      $('#' + appStateUI.equationB).text(),
      $('#' + appStateUI.equationC).text()
    ];
    $('#' + appStateUI.graphicsA).attr('src', array[0]);
    $('#' + appStateUI.graphicsB).attr('src', array[1]);
    $('#' + appStateUI.graphicsC).attr('src', array[2]);
  },

  updateText: function() {
    const array = [
      $('#' + appStateUI.equationA).text(),
      $('#' + appStateUI.equationB).text(),
      $('#' + appStateUI.equationC).text()
    ];
    $('#' + appStateUI.textA).attr('src', array[0]);
    $('#' + appStateUI.textB).attr('src', array[1]);
    $('#' + appStateUI.textC).attr('src', array[2]);
  },
}