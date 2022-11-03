# Vite学习

## 配置跨域代理

修改`vite.config.js`文件

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://url:port',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
```

server中的proxy就是配置的代理

例如：

```js
axios({
    method: 'get',
    url: '/api/user/login'
})
```

这个请求就会被发送去`http://url:port/user/login`

> `rewrite`的作用就是将`axios`请求地址的`/api`去掉，如果不需要去掉`api`的话，不写`rewrite`就行。