import React, { useEffect } from 'react'
import Message from './Message'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../Firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails } from '../redux/appSlice'
const Messages = () => {
  const dispatch = useDispatch();
  const {emails} = useSelector(store=>store.appSlice)
  useEffect(()=>{  
    const q = query(collection(db,"emails"), orderBy('createdAt','desc'));  
    const unsubscribe = onSnapshot(q, (snapshot) => {  
      const allEmails = snapshot.docs.map((doc)=>({...doc.data(),id:doc.id}));  
      // console.log(allEmails);  
      dispatch(setEmails(allEmails));  
    })  

    // clean up  
    return () => unsubscribe();  
}, [dispatch]);  



  return (
    <div> 
  
  
  {
    emails && emails?.map((email)=> <Message email={email}/>)
  }






    </div>
  )
}

export default Messages