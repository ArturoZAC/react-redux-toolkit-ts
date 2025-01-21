import viteLogo from '/vite.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/store'
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice';

function App() {

  const { counter } = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() =>{
          dispatch( increment() )
        }}>
          Increment By 1 { counter }
        </button>
        <button onClick={() =>{
          dispatch( decrement() )
        }}>
          Decrement By 1 { counter }
        </button>
        <button onClick={() =>{
          dispatch( incrementByAmount(2) )
        }}>
          Increment By 2 { counter }
        </button>
      </div>
    </>
  )
}

export default App
