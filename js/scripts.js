var numQues = 10;
var numChoi = 4;
var ansrs = new Array(10);
ansrs[0]="&ltscript&gt";
ansrs[1]="function myFunction()";
ansrs[2]="Both the &lthead&gt section and the &ltbody&gt section are correct";
ansrs[3]="External";
ansrs[4]="Both of the above.";
ansrs[5]="Node based server uses a single threaded model and can serve much larger number of requests.";
ansrs[6]="myFunction()";
ansrs[7]="if (i == 5)";
ansrs[8]="if (i != 5)";
ansrs[9]="while (i <= 10)";

function getScore(form) {

  var score = 0;
  var currElt;
  var currSelection;
  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    answered=false;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        answered=true;
        if (currSelection.value == ansrs[i]) {
          score++;
          break;
        }
      }
    }
    if (answered ===false){alert("Do answer all the questions, Please") ;return false;}
  }

  var scoreper = Math.round(score/numQues*100);
  form.percentage.value = scoreper + "%";
  form.mark.value=score;

  $(".col-md-6,#grd,#clr").hide();
  $("#show").show();

}
