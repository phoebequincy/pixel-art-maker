document.addEventListener('DOMContentLoaded', function () {

// <!--Pixel Grid Start-->
    let grid = document.querySelector('.pixel-grid')

    let numTiles = 200

    for (let i = 0; i < numTiles; i++) {

      let tile = document.createElement('div')
      tile.style.width = "5%"
      tile.style.paddingBottom = "5%";
      tile.style.border = "1px solid #D3D3D3"
      tile.style.float = "left"
      grid.appendChild(tile)

    }
    // <!--Pixel Grid End-->

    // <!--Color Picker Start-->

    let colorPicker = document.querySelector('#head');

    // <!--Color Picker End-->

    // <!--Click Events - Connecting Color Picker to Grid-->
    let colorSwatch = document.querySelector("#head")

    let colorConnector = document.querySelector(".container")
    colorConnector.addEventListener("click", event => {
    });

    colorConnector.addEventListener("click",function(event){
      console.log("color picker value", colorPicker.value)
      event.target.style.backgroundColor = colorPicker.value

    });
    colorConnector.addEventListener("dblclick",function(event){
      console.log("color picker value", colorPicker.value)
      event.target.style.backgroundColor = '#FFFFFF'

    });

 });
