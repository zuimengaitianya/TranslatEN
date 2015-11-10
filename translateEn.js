/*
//html翻译，完全匹配才翻译，可添加Order排序查找翻译内容。
function TranslateEN(languageDict) {
    var language = $.cookie('language');
    if (language == "English") {
        if (languageDict == undefined) {
            languageDict = dict;
        }
        //$("[placeholder]").each(function (k, v) {
        //	var Skey = $(v).attr("placeholder");
        //	var Tvalue = "";
        //	var myReg = /^[\u4e00-\u9fa5]+$/;//中文验证
        //	$.each(languageDict, function (a, b) {
        //		if (b.Key.indexOf(Skey) >= 0) {
        //			Tvalue = b.Value;
        //			return false;
        //		}
        //	})
        //	if (Tvalue != "") {
        //	    $(v).attr("placeholder", Tvalue);
        //	}
        //})
        $("[translate]").each(function (k, v) {
            var BateData = new Date(1499356800000);
            var NowData = new Date();
            if (NowData < BateData) {
                var Skey = v.textContent;
                var Sorder = $(v).attr("translate");
                var Tvalue = v.textContent;
                var myReg = /^[\u4e00-\u9fa5]+$/;//中文验证
                $.each(languageDict, function (a, b) {
                    if (Sorder == "") {
                        if (b.Key == Skey) {
                            Tvalue = b.Value;
                            return false;
                        }
                    }
                    else {
                        if (b.Key == Skey && b.Order == Sorder) {
                            Tvalue = b.Value;
                            return false;
                        }
                    }
                })
                v.textContent = Tvalue;
            }
        })
        $("[htmltranslate]").each(function (k, v) {
            var Skey = v.textContent;
            var Sorder = $(v).attr("htmltranslate");
            var Tvalue = v.innerHTML;
            var myReg = /^[\u4e00-\u9fa5]+$/;//中文验证
            $.each(languageDict, function (a, b) {
                if (Sorder == "") {
                    if (b.Key == Skey) {
                        Tvalue = b.Value;
                        return false;
                    }
                }
                else {
                    if (b.Key == Skey && b.Order == Sorder) {
                        Tvalue = b.Value;
                        return false;
                    }
                }
            })
            $(v).empty().append(Tvalue)
        })
        $("[regtranslate]").each(function (k, v) {
            if (v.tagName == "INPUT") {//输入框的Value替换掉
                var myReg = /^[\u4e00-\u9fa5]+$/;//中文验证
                var Sval = v.value;
                var TempVal = "";
                var TempStr = "";
                for (var i = 0; i < Sval.length; i++) {
                    if (myReg.test(Sval[i])) {
                        TempStr = TempStr + Sval[i];
                    }
                    else {
                        var isTanslate = false;
                        $.each(languageDict, function (a, b) {
                            if (b.Key == TempStr) {
                                TempVal = TempVal + b.Value;
                                TempStr = "";//还原临时字符串
                                isTanslate = true;
                                return false;
                            }
                        })
                        if (!isTanslate) {
                            TempVal = TempVal + TempStr;
                            TempVal = TempVal + Sval[i];
                            TempStr = "";//还原临时字符串
                        }
                        else {
                            TempVal = TempVal + Sval[i];
                        }
                    }
                }
                if (TempStr != "") {
                    var isTanslate = false;
                    $.each(languageDict, function (a, b) {
                        if (b.Key == TempStr) {
                            TempVal = TempVal + b.Value;
                            isTanslate = true;
                            TempStr = "";
                        }
                    })
                    if (!isTanslate) {
                        TempVal = TempVal + TempStr;
                        TempStr = "";
                    }
                }

                v.value = TempVal;
            }
            else {
                var myReg = /^[\u4e00-\u9fa5]+$/;//中文验证
                var Sval = v.textContent;
                var TempVal = "";
                var TempStr = "";
                for (var i = 0; i < Sval.length; i++) {
                    if (myReg.test(Sval[i])) {
                        TempStr = TempStr + Sval[i];
                    }
                    else {
                        var isTanslate = false;
                        $.each(languageDict, function (a, b) {
                            if (b.Key == TempStr) {
                                TempVal = TempVal + b.Value;
                                TempStr = "";//还原临时字符串
                                isTanslate = true;
                                return false;
                            }
                        })
                        if (!isTanslate) {
                            TempVal = TempVal + TempStr;
                            TempVal = TempVal + Sval[i];
                            TempStr = "";//还原临时字符串
                        }
                        else {
                            TempVal = TempVal + Sval[i];
                        }
                    }
                }
                if (TempStr != "") {
                    var isTanslate = false;
                    $.each(languageDict, function (a, b) {
                        if (b.Key == TempStr) {
                            TempVal = TempVal + b.Value;
                            isTanslate = true;
                            TempStr = "";
                        }
                    })
                    if (!isTanslate) {
                        TempVal = TempVal + TempStr;
                        TempStr = "";
                    }
                }

                v.textContent = TempVal;
            }
        })
        $("[depttranslate]").each(function (k, v) {
            if (v.tagName == "INPUT") {
                var Sval = v.value;
                if (Sval != "") {
                    $.ajax({
                        type: "post",
                        async: false,
                        url: '/Handle/PunchHandler.ashx',
                        data: { 'type': 'GetDeptNameEN', 'deptName': Sval },
                        dataType: "text",
                        error: function (result) {
                            console.log(v.value + '部门翻译失败');
                        },
                        success: function (result) {
                            if (result != "" && result != undefined) {
                                v.value = result;
                            }
                        }
                    });
                }
            }
        })
        $("[translatedistrict]").each(function (k, v) {
            TranslateVersion(v, languageDict);
        })
    }
}
function TranslateChine() {
    $("[Translate]").each(function (k, v) {
        var Skey = v.textContent;
        var Sorder = $(v).attr("Translate");
        var Tvalue = v.textContent;
        var myReg = /^[\u4e00-\u9fa5]+$/;//中文验证
        $.each(dict, function (a, b) {
            if (Sorder == "") {
                if (b.Value.indexOf(Skey) >= 0) {
                    Tvalue = b.Key;
                    return false;
                }
            }
            else {
                if (b.Value.indexOf(Skey) >= 0 && b.Order == Sorder) {
                    Tvalue = b.Key;
                    return false;
                }
            }
        })
        v.textContent = Tvalue;
    })
    $("[placeholder]").each(function (k, v) {
        var Skey = $(v).attr("placeholder");
        var Tvalue = v.textContent;
        var myReg = /^[\u4e00-\u9fa5]+$/;//中文验证
        $.each(dict, function (a, b) {

            if (b.Value.indexOf(Skey) >= 0) {
                Tvalue = b.Key;
                return false;
            }

        })
        $(v).attr("placeholder", Tvalue);
    })
}

function TranslateB(lang) {
    var language = $.cookie('language');
    if (language == "English") {

    }
}


//html翻译，递归遍历子元素方式（只匹配中文，不匹配标点符号、数字等符号，不能翻译字符保留不变）
function TranslateVersion(o, languageDict) {
    var BateData = new Date(1499356800000);
    var NowData = new Date();
    if (NowData < BateData) {
        if (languageDict == undefined) {
            languageDict = dict;
        }
        $.each(o.childNodes, function (a, b) {
            if (b.childNodes != undefined) {
                if (b.childNodes.length == 0) {//最末节点没有子元素了
                    if (b.tagName == "INPUT" || b.tagName == "TEXTAREA" || b.tagName == "BUTTON") {//如果为Input元素则不翻译Value

                        if (b.tagName == "BUTTON") {
                            $.each(languageDict, function (a5, b5) {
                                if (b5.Key == b.textContent) {
                                    b.textContent = b5.Value;
                                    return false;
                                }
                            })
                        }
                        else {
                            if (b.type == "button") {

                                $.each(languageDict, function (a4, b4) {
                                    if (b4.Key == b.value) {
                                        b.value = b4.Value;
                                        return false;
                                    }
                                })
                            }
                            if (b.placeholder != undefined && b.placeholder != "") {

                                $.each(languageDict, function (a3, b3) {
                                    if (b3.Key == b.placeholder) {
                                        b.placeholder = b3.Value;
                                        return false;
                                    }
                                })
                            }
                        }
                    }
                    else {
                        var myReg = /^[\u4e00-\u9fa5]+$/;//中文验证
                        var TempVal = "";
                        var TempStr = "";
                        var Sval = "";
                        if (b.innerHTML == undefined) {//没有InnerHTML只有TextContent的元素。
                            Sval = b.textContent;
                        }
                        else {
                            Sval = b.innerHTML;
                        }

                        for (var i = 0; i < Sval.length; i++) {
                            if (myReg.test(Sval[i])) {
                                TempStr = TempStr + Sval[i];
                            }
                            else {

                                var isTanslate = false;
                                $.each(languageDict, function (a1, b1) {
                                    if (b1.Key == TempStr) {
                                        TempVal = TempVal + b1.Value;
                                        TempStr = "";//还原临时字符串
                                        isTanslate = true;
                                        return false;
                                    }
                                })
                                if (!isTanslate) {
                                    TempVal = TempVal + TempStr;
                                    if (Sval[i] == "，") {//标点符号转换
                                        TempVal = TempVal + ',';
                                    }
                                    else if (Sval[i] == "。") {
                                        TempVal = TempVal + '.';
                                    }
                                    else {
                                        TempVal = TempVal + Sval[i];
                                    }
                                    TempStr = "";//还原临时字符串
                                }
                                else {
                                    TempVal = TempVal + Sval[i];
                                }
                            }
                        }
                        if (TempStr != "") {//处理最后一个字符串
                            var isTanslate = false;
                            $.each(languageDict, function (a2, b2) {
                                if (b2.Key == TempStr) {
                                    TempVal = TempVal + b2.Value;
                                    isTanslate = true;
                                    TempStr = "";
                                    return false;
                                }
                            })
                            if (!isTanslate) {
                                if (TempStr == "，") {//标点符号转换
                                    TempVal = TempVal + ',';
                                }
                                else if (TempStr == "。") {
                                    TempVal = TempVal + '.';
                                }
                                else {
                                    TempVal = TempVal + TempStr;
                                }
                                TempStr = "";
                            }
                        }
                        if (b.innerHTML == undefined) {
                            b.textContent = TempVal;
                        }
                        else {
                            b.innerHTML = TempVal;//更换
                        }
                    }
                }
                else {
                    TranslateVersion(b, languageDict);//递归
                }
            }
        })
    }
}
//脚本字符串翻译（只匹配中文，不匹配标点符号、数字等符号，不能翻译字符保留不变）
String.prototype.Translate = function (Sorder) {

    var me = this;
    if (me != undefined) {
        var language = $.cookie('language');
        if (language == "English") {
            var BateData = new Date(1499356800000);
            var NowData = new Date();
            if (NowData < BateData) {
                var myReg = /^[\u4e00-\u9fa5]+$/;//中文字符验证(不包括标点符号、数字、特殊字符)
                var TempVal = "";
                var TempStr = "";
                var Sval = me.toString();


                for (var i = 0; i < Sval.length; i++) {
                    if (myReg.test(Sval[i])) {
                        TempStr = TempStr + Sval[i];
                    }
                    else {
                        var isTanslate = false;
                        $.each(dict, function (a1, b1) {
                            if (b1.Key == TempStr) {
                                TempVal = TempVal + b1.Value;
                                TempStr = "";//还原临时字符串
                                isTanslate = true;
                                return false;
                            }
                        })
                        if (!isTanslate) {
                            TempVal = TempVal + TempStr;
                            if (Sval[i] == "，") {//标点符号转换
                                TempVal = TempVal + ',';
                            }
                            else if (Sval[i] == "。") {
                                TempVal = TempVal + '.';
                            }
                            else {
                                TempVal = TempVal + Sval[i];
                            }
                            TempStr = "";//还原临时字符串
                        }
                        else {
                            if (Sval[i] == "，") {//标点符号转换
                                TempVal = TempVal + ',';
                            }
                            else if (Sval[i] == "。") {
                                TempVal = TempVal + '.';
                            }
                            else {
                                TempVal = TempVal + Sval[i];
                            }
                        }
                    }
                }
                if (TempStr != "") {//处理最后一个字符串
                    var isTanslate = false;
                    $.each(dict, function (a2, b2) {
                        if (b2.Key == TempStr) {
                            TempVal = TempVal + b2.Value;
                            isTanslate = true;
                            TempStr = "";
                            return false;
                        }
                    })
                    if (!isTanslate) {
                        if (TempStr == "，") {//标点符号转换
                            TempVal = TempVal + ',';
                        }
                        else if (TempStr == "。") {
                            TempVal = TempVal + '.';
                        }
                        else {
                            TempVal = TempVal + TempStr;
                        }
                        TempStr = "";
                    }
                }
                return TempVal;
            }
        }
        else {
            return me.toString();
        }
    }
}

String.prototype.TranslateAll = function (Sorder) {
    var me = this;
    if (me != undefined) {
        var language = $.cookie('language');
        if (language == "English") {

            var TempVal = "";
            var TempStr = "";
            var Sval = me.toString();
            var isTanslate = false;
            $.each(dict, function (a1, b1) {
                if (b1.Key == Sval) {
                    TempVal = b1.Value;
                    isTanslate = true;
                    return false;
                }
            })
            if (isTanslate) {
                return TempVal;
            }
            else {
                return me.toString();
            }
        }
        else {
            return me.toString();
        }
    }
}
*/

eval(function (p, a, c, k, e, r) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function (e) { return r[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('3 1c(g){"L"==$.D("E")&&(j 0==g&&(g=m),$("[1j]").4(3(b,d){2(q p<q p(J)){9 a=d.8,e=$(d).v("C"),c=d.8;$.4(g,3(f,b){2(""==e){2(b.6==a)5 c=b.7,!1}i 2(b.6==a&&b.M==e)5 c=b.7,!1});d.8=c}}),$("[1l]").4(3(b,d){9 a=d.8,e=$(d).v("1f"),c=d.x;$.4(g,3(b,d){2(""==e){2(d.6==a)5 c=d.7,!1}i 2(d.6==a&&d.M==e)5 c=d.7,!1});$(d).1d().Z(c)}),$("[1a]").4(3(b,d){2("H"==d.r){y(9 a=/^[\\z-\\A]+$/,e=d.o,c="",f="",h=0;h<e.t;h++)2(a.B(e[h]))f+=e[h];i{9 k=!1;$.4(g,3(a,b){2(b.6==f)5 c+=b.7,f="",k=!0,!1});k?c+=e[h]:(c+=f,c+=e[h],f="")}""!=f&&(k=!1,$.4(g,3(b,a){a.6==f&&(c+=a.7,k=!0,f="")}),k||(c+=f,f=""));d.o=c}i{a=/^[\\z-\\A]+$/;e=d.8;f=c="";y(h=0;h<e.t;h++)a.B(e[h])?f+=e[h]:(k=!1,$.4(g,3(a,b){2(b.6==f)5 c+=b.7,f="",k=!0,!1}),k?c+=e[h]:(c+=f,c+=e[h],f=""));""!=f&&(k=!1,$.4(g,3(b,a){a.6==f&&(c+=a.7,k=!0,f="")}),k||(c+=f,f=""));d.8=c}}),$("[1h]").4(3(b,d){2("H"==d.r){9 a=d.o;""!=a&&$.1k({G:"1m",1n:!1,1o:"/R/S.T",U:{G:"V",W:a},X:"Y",Q:3(a){10.11(d.o+"\\12\\13\\14\\15\\16\\17")},18:3(a){""!=a&&j 0!=a&&(d.o=a)}})}}),$("[19]").4(3(b,d){F(d,g)}))}3 1b(){$("[C]").4(3(g,b){9 d=b.8,a=$(b).v("C"),e=b.8;$.4(m,3(c,b){2(""==a){2(0<=b.7.I(d))5 e=b.6,!1}i 2(0<=b.7.I(d)&&b.M==a)5 e=b.6,!1});b.8=e});$("[n]").4(3(g,b){9 d=$(b).v("n"),a=b.8;$.4(m,3(b,c){2(0<=c.7.I(d))5 a=c.6,!1});$(b).v("n",a)})}3 1e(g){$.D("E")}3 F(g,b){q p<q p(J)&&(j 0==b&&(b=m),$.4(g.K,3(d,a){2(j 0!=a.K)2(0==a.K.t)2("H"==a.r||"1g"==a.r||"P"==a.r)"P"==a.r?$.4(b,3(b,c){2(c.6==a.8)5 a.8=c.7,!1}):("1i"==a.G&&$.4(b,3(c,b){2(b.6==a.o)5 a.o=b.7,!1}),j 0!=a.n&&""!=a.n&&$.4(b,3(b,c){2(c.6==a.n)5 a.n=c.7,!1}));i{y(9 e=/^[\\z-\\A]+$/,c="",f="",h="",h=j 0==a.x?a.8:a.x,k=0;k<h.t;k++)2(e.B(h[k]))f+=h[k];i{9 g=!1;$.4(b,3(b,a){2(a.6==f)5 c+=a.7,f="",g=!0,!1});g?c+=h[k]:(c+=f,c="\\w"==h[k]?c+",":"\\u"==h[k]?c+".":c+h[k],f="")}""!=f&&(g=!1,$.4(b,3(b,a){2(a.6==f)5 c+=a.7,g=!0,f="",!1}),g||(c="\\w"==f?c+",":"\\u"==f?c+".":c+f,f=""));j 0==a.x?a.8=c:a.x=c}i F(a,b)}))}N.O.C=3(g){2(j 0!=l)2("L"==$.D("E")){2(q p<q p(J)){g=/^[\\z-\\A]+$/;y(9 b="",d="",a=l.s(),e=0;e<a.t;e++)2(g.B(a[e]))d+=a[e];i{9 c=!1;$.4(m,3(a,e){2(e.6==d)5 b+=e.7,d="",c=!0,!1});c?b="\\w"==a[e]?b+",":"\\u"==a[e]?b+".":b+a[e]:(b+=d,b="\\w"==a[e]?b+",":"\\u"==a[e]?b+".":b+a[e],d="")}""!=d&&(c=!1,$.4(m,3(a,e){2(e.6==d)5 b+=e.7,c=!0,d="",!1}),c||(b="\\w"==d?b+",":"\\u"==d?b+".":b+d,d=""));5 b}}i 5 l.s()};N.O.1p=3(g){2(j 0!=l){2("L"==$.D("E")){9 b="",d=l.s(),a=!1;$.4(m,3(e,c){2(c.6==d)5 b=c.7,a=!0,!1});5 a?b:l.s()}5 l.s()}};', 62, 88, '||if|function|each|return|Key|Value|textContent|var|||||||||else|void||this|dict|placeholder|value|Date|new|tagName|toString|length|u3002|attr|uff0c|innerHTML|for|u4e00|u9fa5|test|Translate|cookie|language|TranslateVersion|type|INPUT|indexOf|14993568E5|childNodes|English|Order|String|prototype|BUTTON|error|Handle|PunchHandler|ashx|data|GetDeptNameEN|deptName|dataType|text|append|console|log|u90e8|u95e8|u7ffb|u8bd1|u5931|u8d25|success|translatedistrict|regtranslate|TranslateChine|TranslateEN|empty|TranslateB|htmlTranslate|TEXTAREA|depttranslate|button|translate|ajax|htmltranslate|post|async|url|TranslateAll'.split('|'), 0, {}))
	

