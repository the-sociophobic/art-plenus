import ProtectedRoutes from './components/common/ProtectedRoutes'
import QueryWrapper from './components/common/QueryWrapper'


function App() {
  return (
    <QueryWrapper>
      <div className='App'>
        <div className='content'>
          <ProtectedRoutes />
        </div>
      </div>
    </QueryWrapper>
  )
}


export default App
