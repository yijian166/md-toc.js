/**
 * User: wcc
 * Date: 13-12-6
 * Time: 下午9:01
 */

var pageBox = $('#post');
var pageElements =   pageBox.children();
var pagelEmentsLength =   pageElements.length ;
var titleLists = [];

for(var i= 0 ; i< pagelEmentsLength;i++){
    var pagelEment = pageElements[i];
    var elementName = pagelEment.nodeName.toLowerCase();
    if ((elementName == 'h2') ||(elementName == 'h3') || (elementName == 'h4') || (elementName == 'h5') || (elementName == 'h6') ){
        titleLists.push(pagelEment) ;
    };
} ;

var pageNavStart = '<div class="toc"><ul>'
var pageNavEnd =  '</ul></div>'
var liClose = '</li>'
var pageContent = '';
var pageInsideLists ;
var tempLists = [];

for(var i = 0 ; i < titleLists.length;i ++) {
    var j = i + 1;
    var titleElement =  titleLists[i];
    var titleElementName =  titleLists[i].tagName;
    var titleElementText =   titleElement.innerHTML;
    titleElement.setAttribute('id', 'tip' + i );
    if(!(j == titleLists.length)) {

        var titleNextElementName =   titleLists[j].tagName;

        if(titleElementName != titleNextElementName) {

            tempLists.push(titleElement);

            var checkColse = false;

            for(var t = 0 ;t < tempLists.length ;t++) {

                var temp = tempLists[t];
                var tempName = temp.tagName;

                var y = 1;

                console.log('tempName',tempName);
                console.log('titleNextElementName',titleNextElementName);
                if (tempName == titleNextElementName ){


                    checkColse = true;

                    break;
                }

                y++;

            };

            if(checkColse) {
                console.log('checkColse',checkColse);
                if(y=='1'){
                    pageContent  = pageContent + '<li><a href="'
                        + '#tip'
                        + i
                        +'">'
                        +  titleElementText
                        + '</a>'
                        + '</li></ul>'
                    ;
                };
                if(y=='2'){
                    pageContent  = pageContent + '<li><a href="'
                        + '#tip'
                        + i
                        +'">'
                        +  titleElementText
                        + '</a>'
                        + '</li></ul></li></ul>'
                    ;
                };
                if(y=='3'){
                    pageContent  = pageContent + '<li><a href="'
                        + '#tip'
                        + i
                        +'">'
                        +  titleElementText
                        + '</a>'
                        + '</li></ul></li></ul></li></ul>'
                    ;
                };
                if(y=='4'){
                    pageContent  = pageContent + '<li><a href="'
                        + '#tip'
                        + i
                        +'">'
                        +  titleElementText
                        + '</a>'
                        + '</li></ul></li></ul></li></ul></li></ul>'
                    ;
                };
                if(y=='5'){
                    pageContent  = pageContent + '<li><a href="'
                        + '#tip'
                        + i
                        +'">'
                        +  titleElementText
                        + '</a>'
                        + '</li></ul></li></ul></li></ul></li></ul></li></ul>'
                    ;
                };
                tempLists.length = tempLists.length - y;
            }
            else {
                pageContent  =  pageContent +  '<li><a href="'
                    + '#tip'
                    + i
                    +'">'
                    +  titleElementText
                    + '</a>'
                    + '<ul>'
                ;
            }
        }
        else {
            pageContent  = pageContent
                        + '<li><a href="'
                        + '#tip'
                        + i
                        +'">'
                        +  titleElementText
                        + '</a></li>'
            ;
        }

    }
    else {

        if(tempLists.length){

            pageContent  = pageContent + '<li><a href="'
                + '#tip'
                + i
                +'">'
                +  titleElementText
                + '</a>'
            ;

            for(var x = tempLists.length;x > 0 ;x-- ){
                pageContent = pageContent

                              + '</li></ul>'
                ;

            }

        }
    }
}

pageInsideLists = pageNavStart +  pageContent ;
pageBox.append(pageInsideLists) ;
