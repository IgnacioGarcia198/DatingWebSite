/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function readURL(input) {
    var imgpreview = document.getElementById("imgPreview");
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            //alert(e.target.result);
            imgpreview.setAttribute("src", e.target.result);
            imgpreview.setAttribute("width", 150);
            imgpreview.setAttribute("height", 200);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

