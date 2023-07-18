# qiankun-vue
微前端-qiankun的使用

[qiankun主应用配置](./main/README.md)

[qiankun微应用配置-vue3](./child-vue3//README.md)

[qiankun微应用配置-vue2](./child-vue2//README.md)


注意： 主应用的样式会影响子应用的样式，可以在start中添加
```javascript
start({
  sandbox: {
    experimentalStyleIsolation: true // 样式隔离
  }
});
```
