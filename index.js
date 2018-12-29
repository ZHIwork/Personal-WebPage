/*--------------------------------------------------------------*/
/*                    Language Switch Part                      */
/*--------------------------------------------------------------*/

/* read json file where English stored */
function readJsonEn(){
    $.getJSON("/jsonFile/languageEnglish.json", function(data) {
      $("p").html(data.msg_firstPart_Hey);//.html() replace the original info
      $("strong").html(data.msg_firstPart_name);
    });
}

/* read json file where Chinese stored */
function readJsonCh(){
    $.getJSON("/jsonFile/languageChinese.json", function(data) {
      $("p").html(data.msg_firstPart_Hey);
      $("strong").html(data.msg_firstPart_name);
    });
}
