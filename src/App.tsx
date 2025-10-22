//Rendering all the examples in App.tsx
import CustomHookExample from './CustomHooks'
import LazyLoading from './LazyLoading'
import MemoExample from './Memo'
import UseCallBackExample from './UseCallBack'
import UseMemoExample from './UseMemo'
import './App.css'

function App() {
  return (
    <div>
      <CustomHookExample />
      <div style={{ height: '500px', overflowY: 'auto', border: "1px solid red", marginBottom: 16, padding: 16 }}>  <LazyLoading /></div>
      <MemoExample />
      <UseCallBackExample />
      <UseMemoExample />
    </div>
  )
}

export default App
