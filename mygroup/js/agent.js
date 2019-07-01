// jshint ignore: start
+function ($) {

    $.rawCitiesData = [
        {"name": "黑龙江", "code": "1001", "sub": [
            {"name": "黑龙江鑫人", "code": "1002", "sub": [] },
            { "name": "哈尔滨凯德学府店", "code": "1003", "sub": [] }]},
          {"name": "上海", "code": "101", "sub": [
            {"name": "上海润丰", "code": "102", "sub": [] },
            {"name": "上海秀色", "code": "103", "sub": [] },
            {"name": "中山公园龙之梦店", "code": "104", "sub": [] },
            {"name": "凯德晶萃广场店", "code": "105", "sub": [] },
            {"name": "七宝万科", "code": "106", "sub": [] },
            { "name": "晶耀前滩店", "code": "107", "sub": [] }]},
          {"name": "吉林", "code": "1101", "sub": [
            {"name": "吉林美的", "code": "1102", "sub": [] },
            {"name": "摩天活力城", "code": "1103", "sub": [] },
            {"name": "长春活力城", "code": "1104", "sub": [] },
            {"name": "白山合兴商厦", "code": "1105", "sub": [] },
            {"name": "吉林财富广场", "code": "1106", "sub": [] },
            {"name": "延吉百货大楼", "code": "1107", "sub": [] },
            {"name": "长春万达", "code": "1108", "sub": [] },
            { "name": "长春欧亚卖场 ", "code": "1109", "sub": [] }]},
          {"name": "四川", "code": "1201", "sub": [
            {"name": "四川月州", "code": "1202", "sub": [] },
            {"name": "成都来福士店", "code": "1203", "sub": [] },
            {"name": "龙湖西宸天街店", "code": "1204", "sub": [] },
            {"name": "伊藤洋华堂绿地中心概念店", "code": "1205", "sub": [] },
            {"name": "新都汇融广场", "code": "1206", "sub": [] },
            {"name": "壹购潮流广场", "code": "1207", "sub": [] },
            {"name": "锦华伊藤", "code": "1208", "sub": [] },
            {"name": "春熙伊藤", "code": "1209", "sub": [] },
            {"name": "高新伊藤", "code": "1210", "sub": [] },
            { "name": "南充茂业", "code": "1211", "sub": [] }]},
          {"name": "重庆", "code": "1301", "sub": [
            {"name": "重庆靓婵", "code": "1302", "sub": [] },
            {"name": "龙湖北城天街店", "code": "1303", "sub": [] },
            {"name": "奉节商都", "code": "1304", "sub": [] },
            { "name": "大融城", "code": "1305", "sub": [] }]},
          {"name": "江西", "code": "1401", "sub": [
            {"name": "江西东洲", "code": "1402", "sub": [] },
            {"name": "赣州步步高", "code": "1403", "sub": [] },
            {"name": "赣州九方", "code": "1404", "sub": [] },
            {"name": "九江联盛", "code": "1405", "sub": [] },
            {"name": "红谷滩万达", "code": "1406", "sub": [] },
            {"name": "百盛优客", "code": "1407", "sub": [] },
            { "name": "中山天虹", "code": "1408", "sub": [] }]},
          {"name": "湖北", "code": "1501", "sub": [
            {"name": "湖北彩汇", "code": "1502", "sub": [] },
            { "name": "湖北菲利鑫", "code": "1503", "sub": [] }]},
          {"name": "湖南", "code": "1601", "sub": [
            {"name": "湖南卓奥", "code": "1602", "sub": [] },
            {"name": "长沙国金街店", "code": "1603", "sub": [] },
            { "name": "长沙松雅湖吾悦店", "code": "1604", "sub": [] }]},
          {"name": "广西", "code": "1701", "sub": [
            { "name": "广西文容", "code": "1702", "sub": [] }]},
          {"name": "海南", "code": "1801", "sub": [
            { "name": "海南速拓", "code": "1802", "sub": [] }]},
          {"name": "云南", "code": "1901", "sub": [
            {"name": "云锦丽禾", "code": "1902", "sub": [] },
            {"name": "昆明同德广场", "code": "1903", "sub": [] },
            {"name": "昆明金鹰B座", "code": "1904", "sub": [] },
            {"name": "昆明百盛", "code": "1905", "sub": [] },
            { "name": "昆明王府井", "code": "1906", "sub": [] }]},
          {"name": "贵州", "code": "2001", "sub": [
            { "name": "众生源和", "code": "2002", "sub": [] }]},
          {"name": "北京", "code": "201", "sub": [
            { "name": "北京旺仁", "code": "202", "sub": [] }]},
          {"name": "福建", "code": "2101", "sub": [
            {"name": "漳州慧杰", "code": "2102", "sub": [] },
            {"name": "厦门嘉丽源", "code": "2103", "sub": [] },
            { "name": "福州梓誉", "code": "2104", "sub": [] }]},
          {"name": "山西", "code": "2201", "sub": [
            {"name": "绚彩菲扬", "code": "2202", "sub": [] },
            {"name": "美春辉", "code": "2203", "sub": [] },
            {"name": "临汾生龙国际", "code": "2204", "sub": [] },
            {"name": "茂业天地一期", "code": "2205", "sub": [] },
            {"name": "太原茂业百货", "code": "2206", "sub": [] },
            {"name": "太原和信摩尔", "code": "2207", "sub": [] },
            { "name": "太原铜锣湾", "code": "2208", "sub": [] }]},
          {"name": "陕西", "code": "2301", "sub": [
            {"name": "陕西瑜隆", "code": "2302", "sub": [] },
            {"name": "大融城IMIXPARK", "code": "2303", "sub": [] },
            {"name": "西安赛格", "code": "2304", "sub": [] },
            {"name": "曲江大悦城店", "code": "2305", "sub": [] },
            {"name": "安康时代", "code": "2306", "sub": [] },
            { "name": "西安赛格", "code": "2307", "sub": [] }]},
          {"name": "河南", "code": "2401", "sub": [
            {"name": "郑州新颜", "code": "2402", "sub": [] },
            {"name": "郑州丽莱", "code": "2403", "sub": [] },
            {"name": "洛阳美谷", "code": "2404", "sub": [] },
            {"name": "开封大商新玛特", "code": "2405", "sub": [] },
            {"name": "洛阳泉舜", "code": "2406", "sub": [] },
            {"name": "王府井1店", "code": "2407", "sub": [] },
            {"name": "洛阳万达", "code": "2408", "sub": [] },
            {"name": "王府井2店", "code": "2409", "sub": [] },
            {"name": "郑州大商", "code": "2410", "sub": [] },
            {"name": "驻马店大商", "code": "2411", "sub": [] },
            {"name": "南阳360", "code": "2412", "sub": [] },
            {"name": "平顶山丹尼斯", "code": "2413", "sub": [] },
            {"name": "新乡大商新玛特", "code": "2414", "sub": [] },
            {"name": "许昌360", "code": "2415", "sub": [] },
            {"name": "郑州王府井", "code": "2416", "sub": [] },
            {"name": "丹尼斯大卫城", "code": "2417", "sub": [] },
            {"name": "丹尼斯CBD店", "code": "2418", "sub": [] },
            {"name": "高新区公园茂", "code": "2419", "sub": [] },
            {"name": "大学路丹尼斯", "code": "2420", "sub": [] },
            { "name": "南阳豪盛", "code": "2421", "sub": [] }]},
          {"name": "山东", "code": "2501", "sub": [
            {"name": "烟台青美", "code": "2502", "sub": [] },
            {"name": "青岛恒悦", "code": "2503", "sub": [] },
            {"name": "临沂美传", "code": "2504", "sub": [] },
            {"name": "济南拾色", "code": "2505", "sub": [] },
            {"name": "济南燕山银座", "code": "2506", "sub": [] },
            {"name": "德州银座", "code": "2507", "sub": [] },
            {"name": "德州澳德乐", "code": "2508", "sub": [] },
            {"name": "银座泉城广场店", "code": "2509", "sub": [] },
            {"name": "银座和谐广场店", "code": "2510", "sub": [] },
            {"name": "银座洪楼店", "code": "2511", "sub": [] },
            {"name": "济南嘉华百货", "code": "2512", "sub": [] },
            {"name": "济宁贵和购物", "code": "2513", "sub": [] },
            {"name": "泰安银座中心店", "code": "2514", "sub": [] },
            {"name": "城阳利群", "code": "2515", "sub": [] },
            {"name": "即墨利群", "code": "2516", "sub": [] },
            {"name": "胶南利群", "code": "2517", "sub": [] },
            { "name": "台东利群", "code": "2518", "sub": [] }]},
          {"name": "青海", "code": "2601", "sub": [
            { "name": "青海鑫玥", "code": "2602", "sub": [] }]},
          {"name": "甘肃", "code": "2701", "sub": [
            {"name": "甘肃汀特", "code": "2702", "sub": [] },
            {"name": "甘肃瑞丽", "code": "2703", "sub": [] },
            {"name": "西太华工贸集团", "code": "2704", "sub": [] },
            {"name": "兰州中心", "code": "2705", "sub": [] },
            {"name": "兰州王府井", "code": "2706", "sub": [] },
            {"name": "兰州欣大百货", "code": "2707", "sub": [] },
            { "name": "兰州新世界", "code": "2708", "sub": [] }]},
          {"name": "内蒙古", "code": "2801", "sub": [
            { "name": "佰润", "code": "2802", "sub": [] }]},
          {"name": "西藏", "code": "2901", "sub": [
            { "name": "苏润", "code": "2902", "sub": [] }]},
          {"name": "新疆", "code": "3001", "sub": [
            {"name": "元泰兴", "code": "3002", "sub": [] },
            {"name": "库尔勒汇嘉", "code": "3003", "sub": [] },
            {"name": "库尔勒天百", "code": "3004", "sub": [] },
            {"name": "昌吉汇嘉", "code": "3005", "sub": [] },
            {"name": "乌市汇嘉", "code": "3006", "sub": [] },
            { "name": "乌市五一金马", "code": "3007", "sub": [] }]},
          {"name": "广东", "code": "301", "sub": [
            {"name": "梅州纯美", "code": "302", "sub": [] },
            {"name": "惠州纳美", "code": "303", "sub": [] },
            {"name": "广州楚桦", "code": "304", "sub": [] },
            {"name": "东莞爱彩", "code": "305", "sub": [] },
            {"name": "深圳茂华", "code": "306", "sub": [] },
            { "name": "汕头奇化", "code": "307", "sub": [] }]},
          {"name": "宁夏", "code": "3101", "sub": [
            { "name": "惠亿", "code": "3102", "sub": [] }]},
          {"name": "浙江", "code": "401", "sub": [
            {"name": "金华天虹", "code": "402", "sub": [] },
            {"name": "温州弘方", "code": "403", "sub": [] },
            {"name": "宁波安澄", "code": "404", "sub": [] },
            {"name": "杭州安澄", "code": "405", "sub": [] },
            {"name": "杭州慎一", "code": "406", "sub": [] },
            {"name": "湖滨银泰店", "code": "407", "sub": [] },
            { "name": "滨江龙湖店", "code": "408", "sub": [] }]},
          {"name": "江苏", "code": "501", "sub": [
            {"name": "江苏震荣", "code": "502", "sub": [] },
            {"name": "连云港中央", "code": "503", "sub": [] },
            {"name": "南京中央商场", "code": "504", "sub": [] },
            {"name": "木渎天虹百货", "code": "505", "sub": [] },
            {"name": "苏州石路国际", "code": "506", "sub": [] },
            {"name": "太仓华联", "code": "507", "sub": [] },
            { "name": "苏州人民商场", "code": "508", "sub": [] }]},
          {"name": "天津", "code": "601", "sub": [
            {"name": "天津麦莎", "code": "602", "sub": [] },
            { "name": "南开大悦城店", "code": "603", "sub": [] }]},
          {"name": "河北", "code": "701", "sub": [
            {"name": "河北晨龙", "code": "702", "sub": [] },
            {"name": "邢台万达", "code": "703", "sub": [] },
            {"name": "承德双百购物", "code": "704", "sub": [] },
            {"name": "保定万博", "code": "705", "sub": [] },
            {"name": "石家庄银座东购", "code": "706", "sub": [] },
            {"name": "张家口银座", "code": "707", "sub": [] },
            {"name": "沧州华北解放店", "code": "708", "sub": [] },
            {"name": "沧州华北茂业", "code": "709", "sub": [] },
            {"name": "石家庄勒泰", "code": "710", "sub": [] },
            {"name": "石家庄益友", "code": "711", "sub": [] },
            {"name": "石家庄北国益庄", "code": "712", "sub": [] },
            {"name": "邯郸美乐城", "code": "713", "sub": [] },
            { "name": "石家庄益新", "code": "714", "sub": [] }]},
          {"name": "安徽", "code": "801", "sub": [
            { "name": "安徽创馨", "code": "802", "sub": [] }]},
          {"name": "辽宁", "code": "901", "sub": [
            {"name": "辽宁荣曜君茂", "code": "902", "sub": [] },
            {"name": "大连柏威年店", "code": "903", "sub": [] },
            {"name": "沈阳万象汇", "code": "904", "sub": [] },
            {"name": "大连新玛特", "code": "905", "sub": [] },
            { "name": "积家", "code": "906", "sub": [] }]}
          
    ];
}($);
// jshint ignore: end

/* global $:true */
/* jshint unused:false*/

+ function ($) {
    "use strict";

    var defaults;
    var raw = $.rawCitiesData;

    var format = function (data) {
        var result = [];
        for (var i = 0; i < data.length; i++) {
            var d = data[i];
            if (/^请选择|市辖区/.test(d.name)) continue;
            result.push(d);
        }
        if (result.length) return result;
        return [];
    };

    var sub = function (data) {
        if (!data.sub) return [{ name: '', code: data.code }];  // 有可能某些县级市没有区
        return format(data.sub);
    };

    var getCities = function (d) {
        for (var i = 0; i < raw.length; i++) {
            if (raw[i].code === d || raw[i].name === d) return sub(raw[i]);
        }
        return [];
    };

    var getDistricts = function (p, c) {
        for (var i = 0; i < raw.length; i++) {
            if (raw[i].code === p || raw[i].name === p) {
                for (var j = 0; j < raw[i].sub.length; j++) {
                    if (raw[i].sub[j].code === c || raw[i].sub[j].name === c) {
                        return sub(raw[i].sub[j]);
                    }
                }
            }
        }
    };

    var parseInitValue = function (val) {
        var p = raw[0], c, d;
        var tokens = val.split(' ');
        raw.map(function (t) {
            if (t.name === tokens[0]) p = t;
        });

        p.sub.map(function (t) {
            if (t.name === tokens[1]) c = t;
        })

        if (tokens[2]) {
            c.sub.map(function (t) {
                if (t.name === tokens[2]) d = t;
            })
        }

        if (d) return [p.code, c.code, d.code];
        return [p.code, c.code];
    }

    $.fn.agentPicker = function (params) {
        params = $.extend({}, defaults, params);
        return this.each(function () {
            var self = this;

            var provincesName = raw.map(function (d) {
                return d.name;
            });
            var provincesCode = raw.map(function (d) {
                return d.code;
            });
            var initCities = sub(raw[0]);
            var initCitiesName = initCities.map(function (c) {
                return c.name;
            });
            var initCitiesCode = initCities.map(function (c) {
                return c.code;
            });
            var initDistricts = sub(raw[0].sub[0]);

            var initDistrictsName = initDistricts.map(function (c) {
                return c.name;
            });
            var initDistrictsCode = initDistricts.map(function (c) {
                return c.code;
            });

            var currentProvince = provincesName[0];
            var currentCity = initCitiesName[0];
            var currentDistrict = initDistrictsName[0];

            var cols = [
                {
                    displayValues: provincesName,
                    values: provincesCode,
                    cssClass: "col-province"
                },
                {
                    displayValues: initCitiesName,
                    values: initCitiesCode,
                    cssClass: "col-city"
                }
            ];

            if (params.showDistrict) cols.push({
                values: initDistrictsCode,
                displayValues: initDistrictsName,
                cssClass: "col-district"
            });

            var config = {

                cssClass: "city-picker",
                rotateEffect: false,  //为了性能
                formatValue: function (p, values, displayValues) {
                    return displayValues.join(' ');
                },
                onChange: function (picker, values, displayValues) {
                    var newProvince = picker.cols[0].displayValue;
                    var newCity;
                    if (newProvince !== currentProvince) {
                        var newCities = getCities(newProvince);
                        newCity = newCities[0].name;
                        var newDistricts = getDistricts(newProvince, newCity);
                        picker.cols[1].replaceValues(newCities.map(function (c) {
                            return c.code;
                        }), newCities.map(function (c) {
                            return c.name;
                        }));
                        if (params.showDistrict) picker.cols[2].replaceValues(newDistricts.map(function (d) {
                            return d.code;
                        }), newDistricts.map(function (d) {
                            return d.name;
                        }));
                        currentProvince = newProvince;
                        currentCity = newCity;
                        picker.updateValue();
                        return false; // 因为数据未更新完，所以这里不进行后序的值的处理
                    } else {
                        if (params.showDistrict) {
                            newCity = picker.cols[1].displayValue;
                            if (newCity !== currentCity) {
                                var districts = getDistricts(newProvince, newCity);
                                picker.cols[2].replaceValues(districts.map(function (d) {
                                    return d.code;
                                }), districts.map(function (d) {
                                    return d.name;
                                }));
                                currentCity = newCity;
                                picker.updateValue();
                                return false; // 因为数据未更新完，所以这里不进行后序的值的处理
                            }
                        }
                    }
                    //如果最后一列是空的，那么取倒数第二列
                    var len = (values[values.length - 1] ? values.length - 1 : values.length - 2)
                    $(self).attr('data-code', values[len]);
                    $(self).attr('data-codes', values.join(','));
                    if (params.onChange) {
                        params.onChange.call(self, picker, values, displayValues);
                    }
                },

                cols: cols
            };

            if (!this) return;
            var p = $.extend({}, params, config);
            //计算value
            var val = $(this).val();
            if (!val) val = '北京 北京市 东城区';
            currentProvince = val.split(" ")[0];
            currentCity = val.split(" ")[1];
            currentDistrict = val.split(" ")[2];
            if (val) {
                p.value = parseInitValue(val);
                if (p.value[0]) {
                    var cities = getCities(p.value[0]);
                    p.cols[1].values = cities.map(function (c) {
                        return c.code;
                    });
                    p.cols[1].displayValues = cities.map(function (c) {
                        return c.name;
                    });
                }

                if (p.value[1]) {
                    if (params.showDistrict) {
                        var dis = getDistricts(p.value[0], p.value[1]);
                        p.cols[2].values = dis.map(function (d) {
                            return d.code;
                        });
                        p.cols[2].displayValues = dis.map(function (d) {
                            return d.name;
                        });
                    }
                } else {
                    if (params.showDistrict) {
                        var dis = getDistricts(p.value[0], p.cols[1].values[0]);
                        p.cols[2].values = dis.map(function (d) {
                            return d.code;
                        });
                        p.cols[2].displayValues = dis.map(function (d) {
                            return d.name;
                        });
                    }
                }
            }
            $(this).picker(p);
        });
    };

    defaults = $.fn.agentPicker.prototype.defaults = {
        showDistrict: true //是否显示地区选择
    };

}($);