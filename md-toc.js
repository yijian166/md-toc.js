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

    var elements = document.getElementsByTagName('*');
    var pageBox ;
    var needToc = false;

    for(var i= 0 ,len =elements.length;i < len; i++ ){
        if(elements[i].getAttribute('data-toc') && (elements[i].getAttribute('data-toc').toLowerCase() == 'true')){
            pageBox = elements[i];
            needToc = true;
            break;
        }
    }

    var pageElements= pageBox.children;
    var pagelEmentsLength = pageElements.length ;
    var titleLists = [];

    for(var j= 0 ; j< pagelEmentsLength;j++){
        var pagelEment = pageElements[j];
        var elementName = pagelEment.tagName.toLowerCase();
        if ((elementName == 'h2') ||(elementName == 'h3') || (elementName == 'h4') || (elementName == 'h5') || (elementName == 'h6') ){
            titleLists.push(pagelEment) ;
        }
    }

    var titleListsLen = titleLists.length;

    if(needToc && titleListsLen ) {

        var tocElement= document.createElement('div');
        var tocContent = '';
        var tocClass = 'toc';

        if(pageBox.getAttribute('data-toc-class')){
            tocClass = pageBox.getAttribute('data-toc-class').toLowerCase();
        }

        (function(){


            var tempLists = [];

            for(var i = 0 ; i < titleListsLen;i ++) {
                var j = i + 1;
                var titleElement =  titleLists[i];
                var titleElementName =  titleLists[i].tagName;
                var titleElementText =   titleElement.innerHTML;
                titleElement.setAttribute('id', 'tip' + i );

                if(!(j == titleListsLen)) {

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

                        }

                        if(checkColse) {

                            switch(y){
                                case 1 :
                                    tocContent  = tocContent + '<li><a href="'
                                    + '#tip'
                                    + i
                                    +'">'
                                    +  titleElementText
                                    + '</a>'
                                    + '</li></ul>'
                                    ;
                                    break;

                                case 2 :
                                    tocContent  = tocContent + '<li><a href="'
                                    + '#tip'
                                    + i
                                    +'">'
                                    +  titleElementText
                                    + '</a>'
                                    + '</li></ul></li></ul>'
                                    ;
                                    break;
                                case 3 :
                                    tocContent  = tocContent + '<li><a href="'
                                    + '#tip'
                                    + i
                                    +'">'
                                    +  titleElementText
                                    + '</a>'
                                    + '</li></ul></li></ul></li></ul>'
                                    ;
                                    break;
                                case 4 :
                                    tocContent  = tocContent + '<li><a href="'
                                    + '#tip'
                                    + i
                                    +'">'
                                    +  titleElementText
                                    + '</a>'
                                    + '</li></ul></li></ul></li></ul></li></ul>'
                                    ;
                                    break;
                                case 5 :
                                    tocContent  = tocContent + '<li><a href="'
                                    + '#tip'
                                    + i
                                    +'">'
                                    +  titleElementText
                                    + '</a>'
                                    + '</li></ul></li></ul></li></ul></li></ul></li></ul>'
                                    ;
                                    break;

                            }
                            tempLists.length = tempLists.length - y;
                        }
                        else {
                            tocContent  =  tocContent +  '<li><a href="'
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
                        tocContent  = tocContent
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

                        tocContent  = tocContent + '<li><a href="'
                            + '#tip'
                            + i
                            +'">'
                            +  titleElementText
                            + '</a>'
                        ;

                        for(var x = tempLists.length;x > 0 ;x-- ){
                            tocContent = tocContent
                                          + '</li></ul>'
                            ;

                        }

                    }
                }
            }


            tocContent = '<ul>'+ tocContent + '</ul>';


        })();

        tocElement.innerHTML = tocContent;



        tocElement.setAttribute('class',tocClass) ;

        pageBox.appendChild(tocElement);


        var tocCustomSpy = pageBox.getAttribute('data-toc-top');

        var tocSpyNum;

        if(tocCustomSpy.search(/[a-z]/i) ===  -1 ){
            tocSpyNum = tocCustomSpy;
        }else {
            tocSpyNum = tocCustomSpy.slice(0,tocCustomSpy.search(/[a-z]/i));
        }

        if(tocSpyNum && tocSpyNum > -1){
            console.log(tocSpyNum);
            window.onscroll = function(){
                var t = document.documentElement.scrollTop || document.body.scrollTop;

                if(t<tocSpyNum){
                    tocElement.setAttribute('style','position:absolute;top:'+ tocSpyNum +'px;');
                }else{
                    tocElement.setAttribute('style','position:fixed;top:10px;');
                }

            }
        }
    }
})
