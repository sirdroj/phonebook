import React from 'react'
import { useEffect,useState } from 'react';
import { db } from '../../Database'
import "./Home.scss"
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot
} from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "contacts");
  useEffect(() => {
    const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
      const updatedUsers = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(updatedUsers);
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const deleteUser = async (id) => {
    const userDoc = doc(db, "contacts", id);
    await deleteDoc(userDoc);
  };
  return (
    <div className='homewrapper'>
    <div className="home">
      {users.map((user) => {
        return (
          <div className='databox'>
            <div className='contactwrapper'>

            <h1>Name: {user.name}</h1>
            <h1>contact: {user.contacts}</h1>
            </div>
            <a
              onClick={() => {
                deleteUser(user.id);
              }}
              >
              <FontAwesomeIcon icon={faTrash} />
            </a> 
          </div>
        );
      })}
    </div>
      </div>
  )
}

export default Home