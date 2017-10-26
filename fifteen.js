PostionsOnBoard=[[0,0],[0,100],[0,200],[0,300],[100,0],[100,100],[100,200],[100,300],[200,0],[200,100],[200,200],[200,300],[300,0],[300,100],[300,200],[300,300]];
 /*stores  possbile postions a tile can on have a board*/

//               tile 1  tile 2  tile 3  tile 4  tile 5   tile 6    tile 7    tile 8   tile 9   tile 10   tile 11   tile 12  tile 13  tile 14   tile 15  Blank
tileXYPostion=[[300,300],[0,100],[0,200],[0,300],[100,0],[100,100],[100,200],[100,300],[200,0],[200,100],[200,200],[200,300],[300,0],[300,100],[300,200],[0,0]];
 /*stores xy postion of a tile, tile 1 is index 0 so if index 0==[200,200] tileXYPostion is checked  compared to PostionsOnBoard and would be in location 10 on the board */

blankSpace=tileXYPostion[15]//store location of black space

$(function(){
var puzzleArea = $("#puzzlearea");
var tiles = $("#puzzlearea").children();// each child div is saved as tiles


boardUpdate(tiles,PostionsOnBoard);//sets up board to default
console.log(tiles);

$('#shufflebutton').click(function(){//------------------------------------- not complete
  boardUpdate(tiles,currentPlay);//sets up board to default
});

$(".puzzlepiece").mouseenter(function(){
  xyPos = $(this).css("top").replace("px","")+","+$(this).css("left").replace("px","");
  /* gets x(left css Postion) and y(Top css Postion) cord of tiles. the postions.the values are return as an int but are converted to string and the 'px' is
  replaced with a blankSpace*/
  withIn(xyPos,PostionsOnBoard);

  $(this).addClass("movablepiece");
//console.log(array);
});


});



function withIn(string,array){ // locates postion of tile on board
  for (var b  =0 ; b < array.length; b++){
  checker=array[b].toString();

    if (string == checker) {
      /*elements in the array were set to string so that i could swerve around the problem of not being able to compare arrays hehehe :'D  '*/
      console.log(string);
      console.log(checker);
      console.log(b);
      return b;
    }
  }
}

function boardUpdate($tiles,array) { //updates board also places tiles in a gird on the board
  console.log(array);
  $.each($tiles, function( index, value ) {
    $(this).addClass("puzzlepiece");// each tile
    $(this).css("top",array[index][0]);
    $(this).css("left",array[index][1]);

  });
}
