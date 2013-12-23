/**
 * User: wcc
 * Date: 13-12-6
 * Time: 下午9:01
 */

/**
 * dom ready form:http://www.cnblogs.com/rubylouvre/archive/2009/12/30/1635645.html
 */
 new function(){
  dom = [];
  dom.isReady = false;
  dom.isFunction = function(obj){
    return Object.prototype.toString.call(obj) === "[object Function]";
  }
  dom.Ready = function(fn){
    dom.initReady();//如果没有建成DOM树，则走第二步，存储起来一起杀
    if(dom.isFunction(fn)){
      if(dom.isReady){
        fn();//如果已经建成DOM，则来一个杀一个
      }else{
        dom.push(fn);//存储加载事件
      }
    }
  }
  dom.fireReady =function(){
    if (dom.isReady)  return;
    dom.isReady = true;
    for(var i=0,n=dom.length;i<n;i++){
      var fn = dom[i];
      fn();
    }
    dom.length = 0;//清空事件
  }
  dom.initReady = function(){
    if (document.addEventListener) {
      document.addEventListener( "DOMContentLoaded", function(){
        document.removeEventListener( "DOMContentLoaded", arguments.callee, false );//清除加载函数
        dom.fireReady();
      }, false );
    }else{
      if (document.getElementById) {
        document.write("<script id=\"ie-domReady\" defer='defer'src=\"//:\"><\/script>");
        document.getElementById("ie-domReady").onreadystatechange = function() {
          if (this.readyState === "complete") {
            dom.fireReady();
            this.onreadystatechange = null;
            this.parentNode.removeChild(this)
          }
        };
      }
    }
  }
}

/**
 * md-toc code
 */

dom.Ready(function(){

    var pageBox = document.getElementById('post');
    var pageElements= pageBox.children;
    var pagelEmentsLength = pageElements.length ;
    var titleLists = [];

    for(var i= 0 ; i< pagelEmentsLength;i++){
        var pagelEment = pageElements[i];
        var elementName = pagelEment.nodeName.toLowerCase();
        if ((elementName == 'h2') ||(elementName == 'h3') || (elementName == 'h4') || (elementName == 'h5') || (elementName == 'h6') ){
            titleLists.push(pagelEment) ;
        };
    } ;


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


                    if (tempName == titleNextElementName ){


                        checkColse = true;

                        break;
                    }

                    y++;

                };

                if(checkColse) {

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



    pageContent = '<ul>'+ pageContent + '</ul>'

    var tocElement= document.createElement('div');
    tocElement.setAttribute('class','toc') ;

    tocElement.innerHTML = pageContent;

    pageBox.appendChild(tocElement);
});
