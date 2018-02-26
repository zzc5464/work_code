# mock

> 用来模拟假数据，方便前端开发的

## 安装

- 框架项目安装

```js
npm i mock -S
// 引入
import mock from 'mockjs';
```

- 普通项目使用

```html
    <script src="http://mockjs.com/dist/mock.js"></script>
```

## 语法

> mock 的语法规范一共有2种
>
> 1. 普通json数据模板
> 2. 带有占位符的数据模板

## 普通语法规范

- 每一条数据都由 **3 部分构成：属性名、生成规则、属性值**    `属性名|规则：属性值`
- 属性名随便自己高兴命名
- 生成规则要跟mock提供的一样，一共有7种。
- 属性值是什么数据类型，返回的就是什么数据类型

### 生成规则

- 属性值是字符串

  1. `'name|1-100': str`   返回重复1或100的属性值字符串
  2. `'name|10':srt` 返回重复10次的属性值字符串

- 属性值是数字,这里的属性值只是用来确定类型。

  1. `'name|1-100':num`  返回1-100之间的随机数
  2. `'name|+1:num'` 初始值是num，返回num+1的数据
  3. `'name|1-100.1-10':1` 返回浮点数，整数`1<num<100` 小数位`1<num<10`  

- 属性值是布尔值

  1. `'name|1:true'` 随机返回true/false,概率是1/2
  2. `'name|min-max': value` 指定value时，概率是`min / (min + max)` 

- 属性值是对象的时候

  1. `'name|1':{}`  随机返回对象其中一个属性
  2. `name|1-10:{}` 随机返回1-10个对象

- 属性值是数组的时候

  1. `'name|1': arr`  随机返回数组中其中一个元素
  2. `'name|1-10': arr`  随机返回（1-10）次arr值，生成一个新数组

- 属性值是函数

  1. ```js
     'function': function () {
                     return this.title
                 }
     // 返回函数的返回值作为属性值
     ```

```js
        var template = {
            'title': 'Syntax Demo',

            'string1|1-10': '★',
            'string2|3': 'value',

            'number1|+1': 100,
            'number2|1-100': 100,
            'number3|1-100.1-10': 1,
            'number4|123.1-10': 1,
            'number5|123.3': 1,
            'number6|123.10': 1.123,

            'boolean1|1': true,
            'boolean2|1-2': true,

            'object1|2-4': {
                '110000': '北京市',
                '120000': '天津市',
                '130000': '河北省',
                '140000': '山西省'
            },
            'object2|2': {
                '310000': '上海市',
                '320000': '江苏省',
                '330000': '浙江省',
                '340000': '安徽省'
            },

            'array1|1': ['AMD', 'CMD', 'KMD', 'UMD'],
            'array2|1-10': ['Mock.js'],
            'array3|3': ['Mock.js'],

            'function': function () {
                return this.title
            }
        }

        var data = Mock.mock('http://www.zzc.com', template)
        $('button').click(function () {
            $.ajax({
                url: 'http://www.zzc.com',
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                }
            })
        })


```



### 数据占位符定义规范 DPD

> 就是给你返回随机的数据

## Mock.mock( )

- `Mock.mock(tpl)`


- 可以写好一个json数据模板，传进去，就可以生成数据了。

```json
// Mock.mock( template )
var template = {
    'title': 'Syntax Demo',
}
var data = Mock.mock(template)
// 生成数据
{
    "title": "Syntax Demo",
}
```

- `Mock.mock(url,tpl)`
- 指定一个地址/某个文件，拦截这个请求，通过ajax去访问，模拟请求

```js
        var data = Mock.mock('http://www.zzc.com', template)
        $('button').click(function () {
            $.ajax({
                url: 'http://www.zzc.com',
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                }
            })
        })
```

- `Mock.mock(url,fn)`
- 给一个回调函数，这个函数有一个data属性，里面是你传过去的数据
- 通过操作这个数据，可以模拟返回不同的数据了

```js
Mock.mock('http://www.zzc.com', function(data){
  // 操作data，返回你传参后的数据
})
```

- `Mock.mock(url,type,tpl)`
- 指定请求类型，只有type类型匹配才会发送请求

```js
Mock.mock('http://www.zzc.com','post',tpl)
```

- `Mock.mock(url,type,fn)`

```js
// 根据匹配的地址和请求的类型，然后通过fn处理你给的data，返回响应的数据
```

## Mock.setup()

> 指定ajax的返回时间 ，现在只能指定timeout
>
> ```
> Mock.setup({
>     timeout: 400
> })
> Mock.setup({
>     timeout: '200-600'
> })
> ```

## Mock.Random（）

> 给你随机返回数据
>
> 只要在属性名前面加一个@ 就会给你随机返回属性值
>
> ```
> Mock.mock( { email: '@email' } )
> // => { email: "v.lewis@hall.gov" }
> ```

