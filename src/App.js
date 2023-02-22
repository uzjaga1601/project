import { map } from '@firebase/util'
import { collection, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from './config'

const App = () => {
  const [posts, setposts] = useState([])
  useEffect(() => {
    async function getData() {
      const query = await getDocs(collection(db, "messages"))
      setposts(query.docs.map(doc => (
        { id: doc.id, ...doc.data() }
      )));
      console.log(posts);
    }
    getData()
  }, [])
  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {posts.length > 0 ? posts.map(item => (
          <li>
            <h3>{item.name}</h3>
            <p>{item.age}</p>
          </li>
        )): <p>Loading...</p>}
      </ul>
    </div>
  )
}

export default App