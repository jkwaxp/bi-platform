define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$each),e=(b.$value,b.$index,c.$escape),f=(b.$dim,"");return f+='<div class="j-global-box">\n    <img class="j-global-add" src="src/css/img/add.png"/>\n    <div class="j-con-global-attr">\n        ',d(b.para,function(a){f+='\n        <div class="j-global-attr">\n            <input type="text" class="parameter-name" value="',f+=e(a.name),f+='" placeholder="维度名称"/>\n            <select class="parameter-id">\n                ',d(b.dimList,function(b){f+='\n                <option value="',f+=e(b.id),f+='" ',b.id==a.elementId&&(f+=' selected="selected" '),f+=">",f+=e(b.caption),f+="</option>\n                "}),f+='\n            </select>\n            <input type="text" class="parameter-default" value="',f+=e(a.defaultValue),f+='" placeholder="默认值"/>\n            <input type="checkbox" class="parameter-needed" ',1==a.needed&&(f+=' checked="checked"'),f+='}/>\n            <div class="j-global-close"></div>\n        </div>\n        '}),f+="\n    </div>\n</div>"}return{render:b}});