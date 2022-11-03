# react-redux问题

最近在学习redux和react-redux，写了一个小计数器，遇到了一个bug。

## 源码

`src/components/Count/index.js`

```js
import React from 'react'

function Count(props) {
  
  const { add, sub, pow, mul, div } = props

  return(
    <>
      <p>{props.num}</p>
      <button onClick={()=>add(1)}>加</button>
      <button onClick={()=>sub(1)}>减</button>
      <button onClick={()=>pow()}>幂</button>
      <button onClick={()=>mul(2)}>乘</button>
      <button onClick={()=>div(2)}>除</button>
    </>
  )
}

export default Count
```

`src/container/Count/index.js`

```js
import { connect } from "react-redux";
import Count from "../../components/Count";
import { bindActionCreators } from "redux";
import * as mathActions from '../../actions/countAction'

const mapStateToProps = state => {
  return {
    num: state.num
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(mathActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)

```

`src/App.js`

```js
import { Provider } from "react-redux";
import Count from './containers/Count'
import rootReducer from "./reducers";
import {createStore} from 'redux'

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
}

export default App;

```

`src/reducers/index.js`

```js
import { combineReducers } from "redux";
import countReducer from "./countReducer";

const rootReducer = combineReducers({
  countReducer
})

export default rootReducer
```

`src/reducers/countReducer.js`

```js
import { ADD, SUB, POW, MUL, DIV,} from '../constans/ActionTypes'

const initialState = { num: 0 }

const countReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD:
      return { num: state.num + action.num }
    case SUB:
      return { num: state.num - action.num }
    case POW:
      return { num: state.num * state.num }
    case MUL:
      return { num: state.num * action.num }
    case DIV:
      return { num: state.num / action.num }
    default:
      return state
  }
}

export default countReducer;
```

`src/constans/ActionTypes.js`

```js
const ADD = 'ADD'
const SUB = 'SUB'
const POW = 'POW'
const MUL = 'MUL'
const DIV = 'DIV'
export { ADD, SUB, POW, MUL, DIV }
```

`src/actions/countAction.js`

```js
import { ADD, SUB, POW, MUL, DIV } from '../constans/ActionTypes'

const add = (num) => {
  return {
    type: ADD,
    num,
  }
}
const sub = (num) => {
  return {
    type: SUB,
    num,
  }
}
const pow = () => {
  return {
    type: POW,
  }
}
const mul = (num) => {
  return {
    type: MUL,
    num,
  }
}
const div = (num) => {
  return {
    type: DIV,
    num,
  }
}

export { add, sub, pow, mul, div }
```

## 页面效果

![image-20220305125010845](Images/image-20220305125010845.png)

无法渲染出`num`，但是可以触发`dispatch`，数据改变是正常的。



但是如果修改`src/App.js`，直接使用`countReducer`创建`store`页面显示却是正常的。

`src/App.js`

```js
import { Provider } from "react-redux";
import Count from './containers/Count'
// import rootReducer from "./reducers";
import countReducer from './reducers/countReducer'
import {createStore} from 'redux'

const store = createStore(countReducer)

function App() {
  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
}

export default App;

```

效果：

![image-20220305125342640](Images/image-20220305125342640.png)![image-20220305125351345](Images/image-20220305125351345.png)



测试了很长时间，个人感觉应该是`src/reducers/index.js`文件出了问题，但是没有找出来！

`src/reducers/index.js`

```js
import { combineReducers } from "redux";
import countReducer from "./countReducer";

const rootReducer = combineReducers({
  countReducer
})

export default rootReducer
```

是我`combineReducers`的用法不对吗？！！



**望指教！**



## 解决

通过combineReducers合并多个reducer后，数据却是分属不同store，所以在`mapStateToProps`时，需要指明reducer。

```js
import { connect } from "react-redux";
import Count from "../../components/Count";
import { bindActionCreators } from "redux";
import * as mathActions from '../../actions/countAction'

const mapStateToProps = state => {
  return {
    num: state.countReducer.num
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(mathActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
```

