import { useState,useReducer,useEffect,useRef } from "react";
import Input from "./components/Input";


function App() {
  const ref = useRef()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const enable = username && password
  return (
    <div className="App">
<Input type="text" value={username} label="Phone Number,username or email" onChange={(e)=>setUsername(e.target.value)}></Input>
    <Input type="password" value={password} label="Password" onChange={(e)=>setPassword(e.target.value)}></Input>
    <p>Elero</p>
    </div>
  );
}

export default App;

