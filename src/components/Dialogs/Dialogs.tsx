import React from 'react';
import s from './Dialogs.module.css'
import {useNavigate} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsDataType, MessagesDataType} from "../redux/State";


type DialogsPropsType= {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}




export const Dialogs = (props:DialogsPropsType) => {


    const navigate = useNavigate();
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                  props.dialogsData.map((dialog) =>{
                      return(
                          <DialogItem name={dialog.name} id={dialog.id}/>
                      )
                  })
                }


            </div>

            <div className={s.messages}>
                {
                    props.messagesData.map((message) =>{
                        return(
                            <Message message={message.message} id={message.id}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Dialogs;