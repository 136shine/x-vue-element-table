# x-vue-element-table

## Introduction 
X-vue-element-table is a component based on element-ui's secondary encapsulation, further encapsulating the table component in element-ui, reducing the amount of code code redundancy, making users more focused on the development of data modules, easier to use etc...

`中文说明`
> x-vue-element-table 是基于 element-ui 的二次封装的组件，进一步封装了 element-ui 中table组件，减少了代码代码冗余量，使用户更加着重于数据模块的开发，更加简洁

使用递归组件和slot插槽进一步抽离了 el-table 中的 el-table-column 组件，并集成了el-table 的排序、展开行、多级表头、添加其他组件等功能，在其基础上有所改动

## Install
``` bash
npm  install x-vue-element-table --save
```
## Usage
``` js
// register the plugin on vue
// first of all, you should add the components library of element-ui, because of the plugin baseed on this library
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import xVueEleTable from 'x-vue-element-table'
Vue.use(xVueEleTable)
 
// you can use like this in your component
// template:
 <x-table :tableData="table.data" :tableKey="table.key" :isExpand="isExpand" :isExpandOnly="isExpandOnly" :sortObj="sortObj" :isCheckbox="isCheckbox" :maxHeight="maxHei" ref="p_table">
      <template slot="column">
        <x-table-col :tKey="table.key" v-for="(item, key) in table.key" :item="item" :key="key">
          <template slot="date" slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
          <template slot="operate" slot-scope="scope">
            // ...
          </template>
        </x-table-col>
      </template>
      <template slot="expand" slot-scope="props">
       //...
      </template>
    </x-table>

// js:
	export default {
		data () {
			return {
                // table data, include table-body data and the properties of column
				table: {
		          key: [{
		          	label: '日期', 
		          	value: 'date', 
		          	template: true, 
		          	isSortable: true, 
		          	width: 180
		          }, {
		          	label: '姓名', 
		          	value: 'name', 
		          	template: true, 
		          	width: 180
		          }, {
		          	label: '地址',
		          	value: 'address', 
		          	template: false,
		          	child: [{
		          		label: '省份', 
		          		value: 'province', 
		          		template: false, 
		          		isSortable: true, 
		          		width: 120
		          	}, {
		          		label: '市区', 
		          		value: 'city', 
		          		template: false, 
		          		width: 120
		          	}, {
		          		label: '详细地址', 
		          		value: 'detail', 
		          		template: false, 
		          		width: 220
		          	}]
		          }, {
		          	label: '操作', 
		          	value: 'operate', 
		          	template: true,
		          	width: 300
		          },
                  // more data ...
                  ],
		          data: [{
		            date: '2016-05-02',
		            name: '王小虎',
	            	province: '上海',
			        city: '普陀区',
			        detail: '金沙江路 1518 弄',
		            address: '上海市普陀区金沙江路 1518 弄'
		          }, {
		            date: '2016-05-04',
		            name: '王小虎',
		            province: '上海',
			        city: '普陀区',
			        detail: '金沙江路 1517 弄',
		            address: '上海市普陀区金沙江路 1517 弄'
		          }]
		        },
		        sortObj: {prop: 'date', order: 'descending'},
		        isExpand: true,
		        isExpandOnly: true,
		        isCheckbox: true,
		        maxHei: 350
			}
		},
		methods: {
	      	handleEdit(index, row) {
	      		console.log(index, row);
                // some do ...
	      	},
	      	handleDelete(index, row) {
	        	console.log(index, row);
                // some do ...
	      	}
    	}
	}
```
ps: about some properties, you can see [element-ui#table](http://element-cn.eleme.io/#/zh-CN/component/table)

All Good Now you have this cool toast in your project..

## demo
[x-vue-element-table](https://github.com/136shine/vue-element/src/components/x-table/)


All Good Now you have this cool toast in your project..




