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
  textA: 'text-A',
  textB: 'text-B',
  textC: 'text-C',

  initialize: function() {
    const mainDiv = $(appStateUI.mainDiv);
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
      const newDiv = $('<div/>',{
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
      const newDiv = $('<div/>',{
        id: appStateUI.mainEquation,
      });
      newDiv.append(
        placeholderA, 
        placeholderB, 
        placeholderC
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
      const newDiv = $('<div/>',{
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

  updateGraphics: function(array) {
    $(appStateUI.graphicsA).attr('src', array[0]);
    $(appStateUI.graphicsB).attr('src', array[1]);
    $(appStateUI.graphicsC).attr('src', array[2]);
  },
  
  updateEquation: function(array) {
    $(appStateUI.equationA).attr('src', array[0]);
    $(appStateUI.equationB).attr('src', array[1]);
    $(appStateUI.equationC).attr('src', array[2]);
  },

  updateText: function(array) {
    $(appStateUI.textA).attr('src', array[0]);
    $(appStateUI.textB).attr('src', array[1]);
    $(appStateUI.textC).attr('src', array[2]);
  },


}