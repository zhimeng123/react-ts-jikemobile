import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'

// 导入provider
import { RouterProvider } from 'react-router-dom'
// 导入router实例
import { router } from './router/index.tsx'



// 测试接口

import { fetchChannelAPI } from './apis/list.ts'
fetchChannelAPI().then((res) => {
  console.log(res.data)
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
  // <App />
)
