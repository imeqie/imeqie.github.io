// jshint ignore: start
+function ($) {

    $.rawCitiesData = [
        {
            "name": "上海", "code": "11", "sub": [
                { "name": "-上海震亮", "code": "12", "sub": [] },
                { "name": "-上海润丰", "code": "13", "sub": [] },
                { "name": "-上海秀色", "code": "14", "sub": [] }
            ]
        }, {
            "name": "北京", "code": "21", "sub": [
                { "name": "-北京旺仁", "code": "22", "sub": [] }
            ]
        }, {
            "name": "广东", "code": "31", "sub": [
                { "name": "-广东梅州纯美", "code": "32", "sub": [] },
                { "name": "-广东惠州纳美", "code": "33", "sub": [] },
                { "name": "-广东广州楚桦", "code": "34", "sub": [] },
                { "name": "-广东东莞爱彩", "code": "35", "sub": [] },
                { "name": "-广东深圳茂华", "code": "36", "sub": [] },
                { "name": "-广东汕头奇化", "code": "37", "sub": [] }
            ]
        }, {
            "name": "浙江", "code": "41", "sub": [
                { "name": "-浙江金华天虹", "code": "42", "sub": [] },
                { "name": "-浙江温州弘方", "code": "43", "sub": [] },
                { "name": "-浙江宁波安澄", "code": "44", "sub": [] },
                { "name": "-浙江杭州安澄", "code": "45", "sub": [] },
                { "name": "-浙江杭州慎一", "code": "46", "sub": [] }
            ]
        }, {
            "name": "江苏", "code": "51", "sub": [
                { "name": "-江苏震荣", "code": "52", "sub": [] }
            ]
        }, {
            "name": "天津", "code": "61", "sub": [
                { "name": "-天津麦莎", "code": "62", "sub": [] }
            ]
        }, {
            "name": "河北", "code": "71", "sub": [
                { "name": "-河北晨龙华妆", "code": "72", "sub": [] }
            ]
        }, {
            "name": "安徽", "code": "81", "sub": [
                { "name": "-安徽创馨", "code": "82", "sub": [] }
            ]
        }, {
            "name": "辽宁", "code": "91", "sub": [
                { "name": "-辽宁荣曜君茂", "code": "92", "sub": [] }
            ]
        }, {
            "name": "黑龙江", "code": "101", "sub": [
                { "name": "-黑龙江鑫人", "code": "102", "sub": [] }
            ]
        }, {
            "name": "吉林", "code": "111", "sub": [
                { "name": "-吉林美的", "code": "112", "sub": [] }
            ]
        }, {
            "name": "四川", "code": "121", "sub": [
                { "name": "-四川月州", "code": "122", "sub": [] },
                { "name": "-重庆靓婵", "code": "123", "sub": [] }
            ]
        }, {
            "name": "江西", "code": "131", "sub": [
                { "name": "-江西东洲", "code": "132", "sub": [] }
            ]
        }, {
            "name": "湖北", "code": "141", "sub": [
                { "name": "-湖北彩汇", "code": "142", "sub": [] },
                { "name": "-湖北菲利鑫", "code": "143", "sub": [] }
            ]
        }, {
            "name": "湖南", "code": "151", "sub": [
                { "name": "-湖南卓奥", "code": "152", "sub": [] }
            ]
        }, {
            "name": "广西", "code": "161", "sub": [
                { "name": "-广西文容", "code": "162", "sub": [] }
            ]
        }, {
            "name": "海南", "code": "171", "sub": [
                { "name": "-海南速拓", "code": "172", "sub": [] }
            ]
        }, {
            "name": "云南", "code": "181", "sub": [
                { "name": "-云南云锦丽禾", "code": "182", "sub": [] }
            ]
        }, {
            "name": "贵州", "code": "191", "sub": [
                { "name": "-贵州众生源和", "code": "192", "sub": [] }
            ]
        }, {
            "name": "福建", "code": "201", "sub": [
                { "name": "-福建漳州慧杰", "code": "202", "sub": [] },
                { "name": "-福建厦门嘉丽源", "code": "203", "sub": [] },
                { "name": "-福建福州梓誉", "code": "204", "sub": [] }
            ]
        }, {
            "name": "山西", "code": "211", "sub": [
                { "name": "-山西绚彩菲扬", "code": "212", "sub": [] },
                { "name": "-山西美春辉", "code": "213", "sub": [] }
            ]
        }, {
            "name": "陕西", "code": "221", "sub": [
                { "name": "-陕西瑜隆", "code": "222", "sub": [] }
            ]
        }, {
            "name": "河南", "code": "231", "sub": [
                { "name": "-河南郑州新颜", "code": "232", "sub": [] },
                { "name": "-河南郑州丽莱", "code": "233", "sub": [] },
                { "name": "-河南洛阳美谷", "code": "234", "sub": [] }
            ]
        }, {
            "name": "山东", "code": "241", "sub": [
                { "name": "-山东烟台青美", "code": "242", "sub": [] },
                { "name": "-山东青岛恒悦", "code": "243", "sub": [] },
                { "name": "-山东临沂美传", "code": "244", "sub": [] },
                { "name": "-山东济南拾色", "code": "245", "sub": [] }
            ]
        }, {
            "name": "青海", "code": "251", "sub": [
                { "name": "-青海鑫玥", "code": "252", "sub": [] }
            ]
        }, {
            "name": "甘肃", "code": "261", "sub": [
                { "name": "-甘肃汀特", "code": "262", "sub": [] },
                { "name": "-甘肃瑞丽", "code": "263", "sub": [] }
            ]
        }, {
            "name": "内蒙古", "code": "271", "sub": [
                { "name": "-内蒙古佰润", "code": "272", "sub": [] }
            ]
        }, {
            "name": "西藏", "code": "281", "sub": [
                { "name": "-西藏苏润", "code": "282", "sub": [] }
            ]
        }, {
            "name": "新疆", "code": "291", "sub": [
                { "name": "-新疆元泰兴", "code": "292", "sub": [] }
            ]
        }, {
            "name": "宁夏", "code": "301", "sub": [
                { "name": "-宁夏惠亿", "code": "302", "sub": [] }]
            }            

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