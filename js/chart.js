function setProgress(progress){
    $("#progressDv").val(progress);
    var rotateDeg = (360*progress/100);
    rotateDeg = (rotateDeg%4.0==0 ? rotateDeg:(rotateDeg + 4.0 - rotateDeg%4.0));
    var rightHf = $("#right_hfcl");
    var leftHf = $("#left_hfcl");
    if(progress < 50){
      leftHf.show();
      leftHf.css({
        "transform":"rotate("+rotateDeg+"deg)",
        "transform-origin":"100% 50%",
      });
      rightHf.css({
        "transform":"rotate(0deg)",
      });
    } else {
      leftHf.hide();
      rotateDeg -= 180;
      rightHf.css({
        "transform":"rotate("+rotateDeg+"deg)",
        "transform-origin":"0 50%",
      });
    }
}

window.onload = function(){
    setProgress($("#progressDv").val());
}
