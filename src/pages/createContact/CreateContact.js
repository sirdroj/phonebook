import React, { useState, useEffect } from "react";
import { db } from "../../Database";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import "./CreateContact.scss";

const CreateContact = ({setpg}) => {
  const [newName, setnewName] = useState(null);
  const [newcontact, setnewcontact] = useState();
  const [contacts, setContacts] = useState([]);
  const contactsCollectionref = collection(db, "contacts");

  const createC = async () => {
    if(newName==null){
        alert("please enter a name")
        return
    }
    if(newcontact<999999999 || newcontact>9999999999){
        alert("please enter a valid mobile number")
        return
    }
    await addDoc(contactsCollectionref, {
      name: newName,
      contacts: Number(newcontact),
    });
    setnewName("")
    setnewcontact()
    setpg(1)
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(contactsCollectionref, (snapshot) => {
      const updatedcontacts = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setContacts(updatedcontacts);
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="CreateContact">
      <div>
        <input
          placeholder="Name..."
          value={newName}
          onChange={(event) => {
            setnewName(event.target.value);
          }}
        />
        <input
          type="number"
          value={newcontact}
          placeholder="Phone Number..."
          onChange={(event) => {
            setnewcontact(event.target.value);
          }}
        />

        <button onClick={createC}> Add Contact</button>
      </div>
    </div>
  );
};

export default CreateContact;
