document.addEventListener('DOMContentLoaded', function () {


    let grid = document.querySelector('.pixel-grid')
    let numTiles = 300


    for (let i = 0; i < numTiles; i++) {

      let tile = document.createElement('div')
      tile.style.width = "5%"
      tile.style.paddingBottom = "5%";
      tile.setAttribute("id","giraffe")
      tile.style.border = "1px solid #D3D3D3"
      tile.style.float = "left"
      grid.appendChild(tile)

    }
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", watchColorPicker, false);

    function watchColorPicker(event) {
      document.querySelectorAll("p").forEach(function(p) {
        p.style.color = event.target.value;
      });
    }
    // let palette = document.querySelector('.palette')
    // let numColors = 10
    //
    //
    // for (let i = 0; i < numColors; i++) {
    //
    //   let color = document.createElement('div')
    //   color.style.width = "10%"
    //   color.style.paddingBottom = "10%";
    //   color.style.border = "1px solid #D3D3D3"
    //   color.style.float = "left"
    //   palette.appendChild(color)
    // }

 })
