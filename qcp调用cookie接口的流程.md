# qcp调用cookie接口的流程

- 引包

```html
    <script src="../../../../Public/Js/memont.js"></script>
    <script src="../../../../Public/dist/js/artTemplate/template-web.js"></script>
```

- 注册moment的过滤器，这样在时间函数使用

```js
	template.defaults.imports.dateformatter = function (value, pattern) {
		var v = value*1000;
		return moment(v).format(pattern);
	};
```

- 发送请求

```js
  var url = 'http://' + $.cookie("post_url");
    var json = '{"apiName":"enquiry_detail","v":"v1.0.0","info":{"order_no":"85sxsfa"},"key":"xxxxxxxRTOiCyiqPpDNRZpSernhgosn"}';
    $.ajax({
        url: url,
        data: json,
        type: 'post',
        dataType: 'json',
        success: function (data) {
            var data = data.data
            render(".tpl1", "tpl1", data);
            render("#tpl_2", "tpl2", data);
            render("#tpl_3","tpl3",data)
        }
    });
```

- 在模板中使用时间过滤

```html
{{v.account_one_last_time | dateformatter "YYYY-MM-DD" }}
```

- 参考` Psa/enquiry_detail.htmle`
- 接口文档


`http://showdoc.quanchepei.com/index.php?s=/5&page_id=105`