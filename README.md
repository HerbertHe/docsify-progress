# docsify-progress

<p align="center">
  <img src="https://docsify.js.org/_media/icon.svg" />
  <br />
  <code>docsify-progress</code>
</p>

[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/docsify-progress/badge)](https://www.jsdelivr.com/package/npm/docsify-progress)

docsify之阅读进度条插件 Progress bar plugin for docsify

## Usage

添加依赖 Add script

```html
<script src="https://cdn.jsdelivr.net/npm/docsify-progress@latest/dist/progress.min.js"></script>
```

添加配置 Add settings

```js
window.$docsify = {
    progress: {
        position: "top",
        color: "var(--theme-color,#42b983)",
        height: "3px",
    }
}
```

| 属性名Attribute | 类型Type | 解释Description | 可选值Value |
| --------------- | -------- | --------------- | ----------- |
| position | string | 设置进度条展示的位置 Set where the progress bar displayed | 'top' (默认值Default) / 'bottom' |
| color | string | 设置进度条颜色 Set color for the plugin | 'var(--theme-color,#42b983)' |
| height | string | 设置进度条高度 Set height for the plugin | '3px' |
