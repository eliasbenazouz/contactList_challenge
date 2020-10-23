import React from 'react'
import './ContactCard.css'
import { useHistory } from 'react-router-dom'

const ContactCard = ({name,email,img,id,deleteCard,setEditing,currentUserHandler}) => {

    const history = useHistory()

    return (
        <div className="contactCard">
            <img src={img} alt={name}></img>
            <p>{name}</p>
            <p>{email}</p>
            <div className="contactCard__buttons">
                <button onClick={()=>{
                    setEditing(true)
                    currentUserHandler({'name':name,
                    'email': email,
                    'img': img,
                    'id': id})
                    history.push('/edit-form')
                 }} className="contactCard__buttons__edit">Edit</button>
                <button onClick={()=>deleteCard(id)} className="contactCard__buttons__remove">Remove</button>
            </div>
        </div>
    )
}

export default ContactCard
