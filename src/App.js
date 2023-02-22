import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from './config'

const App = () => {
  const [posts,setposts] = useState([])
  useEffect(()=> {
    async function getData() {
      const query = await getDocs(collection(db, "messages"))
      setposts(query.docs.map());
    }
    getData()
  },[])
  return (
    <div>
      <h1>Hello</h1>
      {}
    </div>
  )
}

export default App