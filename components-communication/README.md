# 组件通信

### 组件通信的几种方法

- 父——>子组件的通信：
  - 利用 props（这只是单向的父组件向子组件传递数据，子组件数据的改变无法影响父组件）
- 子——>父组件的通信：
  - 利用自定义事件
- 子——>子组件的通信：
  - 利用父组件为中枢，子组件向父组件提交数据（自定义事件），父组件再把数据传递子组件（props）
  - event bus（新的Vue实例），可以在子组件之间自由通信而不影响父组件



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
