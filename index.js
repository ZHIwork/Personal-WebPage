/*--------------------------------------------------------------*/
/*                    Language Switch Part                      */
/*--------------------------------------------------------------*/

/* read json file where English stored */
function readJsonEn(){
    $.getJSON("languageEnglish.json", function(data) {
      $("p").html(data.msg_firstPart_Hey);//.html() replace the original info
      $("strong").html(data.msg_firstPart_name);
    });
}

/* read json file where Chinese stored */
function readJsonCh(){
    $.getJSON("languageChinese.json", function(data) {
      $("p").html(data.msg_firstPart_Hey);
      $("strong").html(data.msg_firstPart_name);
    });
}
