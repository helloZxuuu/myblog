# react-router-dom v6

## 1、useNavigate替代useHistory

在v6版本`useHistory`被新hook`useNavigate`代替，用法也发生的很大的变化

```js
//v5
import {useHistory} from 'react-router-dom'

function ChangePage(){
    const history = useHistory()
    const handleClick = () => {
        history.push('/home')
        //history.replace('/home')
        //history.go(-1)
        //history.goback()
        //history.goForward()
    }
    return(
        <button onClick={handleClick}>跳转</button>
    )
}
```

变为：

```js
//v6
import {useNavigate} from 'react-router-dom'

function ChangePage(){
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/home')
        //navigate('/home', {replace: true}
        //navigate(-1) 后退
        //navigate(1) 前进
    }
    return(
        <button onClick={handleClick}>跳转</button>
    )
}
```

## 2、element替代component

```js
//v5
<Route path='/' component={Home} />
//v6
<Route path='/' element={<Home />} />
```

## 3、useRoutes的使用

v6版本中引入了`useRoutes`来集中式管理路由配置

不同于v5版本需要安装`react-router-config`包

v6版本我们可以直接从`react-router-dom`中解构导入`useRoutes`

```js
import { useRoutes } from 'react-router-dom'
```

> `useRoutes`可以直接根据JavaScript的对象数组生成路由
>
> 需要注意的是`useRoutes`必须使用在`BrowserRouter`或`HashRotuer`等`Router`下

```js
import { useRoutes } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'

const AppRoutes = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/home',
      element: <Home />,
    }
  ])
  return element
}

export default AppRoutes

```

```js
import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App

```

## 4、Routes替代Switch

v6版本引入了`Routes`组件来代替`Switch`组件，功能比后者要更加强大。

```js
//v5
<Switch>
	<Route path='/' component={Home} />
</Switch>

//v6
<Routes>
    <Route path='/' element={<Home/>} />
</Routes>
```

在v5版本中的`Switch`是按照**最先匹配**的路由来更新页面，但是`Routes`却是采用**最优匹配**的，这可以避免我们再开发中因为路由的匹配顺序而绞尽脑汁甚至不断修改。

所以而且v6版本我们不再需要为`Route`添加`exact`精准匹配了。

## 5、嵌套路由，OutLet组件

在v5版本中，我们使用嵌套路由需要明确定义。

```jsx
function App() {
    return(
    	<Router>
           <div>
             <Route exact path="/" component={Login} />
             <Route path="/home" component={Home} />
           </div>
        </Router>
    )
}
function Home() {
    return(
    	<div>
        	home
            <div>
            	<Route path="/home/main" component={Main} />
            </div>
        </div>
    )
}
```

v6版本中，提供`<OutLet/>`组件为特定路由呈现任何匹配的子元素

`<OutLet/>`不需要任何参数，只为呈现子路由的输出。

```jsx
import { OutLet } from 'react-router-dom'
function App() {
    return(
    	<Router>
             <Route exact path="/" element={Login} />
             <Route path="/home" element={Home}>
             	<Route path="/main" element={Main} />
             </Route>
        </Router>
    )
}
function Home() {
    return(
    	<div>
            <OutLet />
        </div>
    )
}
```

