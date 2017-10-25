defaultPuzzle=[[0,0],[0,100],[0,200],[0,300],[100,0],[100,100],[100,200],[100,300],[200,0],[200,100],[200,200],[200,300],[300,0],[300,100],[300,200],[300,300]];//array of tiles
currentPlay=[[0,0],[0,100],[0,200],[0,300],[100,0],[100,100],[100,200],[100,300],[200,0],[200,100],[200,200],[200,300],[300,0],[300,100],[300,200],[300,300]];//array of tiles

$(function(){
var puzzleArea = $("#puzzlearea");
var tiles = $("#puzzlearea").children();// each child div is saved as tiles


boardUpdate(tiles,defaultPuzzle);//sets up board to default
console.log(tiles);
});

function boardUpdate($tiles,array) {
  $.each($tiles, function( index, value ) {
    $(this).addClass("puzzlepiece");// each tile
    $(this).css("top",array[index][0]);
    $(this).css("left",array[index][1]);
  });
}
