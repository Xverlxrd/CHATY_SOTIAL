import React, {FC, MouseEvent} from 'react';
import './Massage.css';
import {IMassage} from "../../../Types";
import {addDoc, collection, onSnapshot} from "firebase/firestore";
import {useAuth} from "../../UI/Provider/useAuth";
const Massage: FC = () => {

    const {base, user} = useAuth()
    const [massages, setMassages] = React.useState<IMassage[]>([])
    const [massage, setMassage] = React.useState('')

    React.useEffect(() => {
        const unsub = onSnapshot(collection(base, 'massages'), doc => {
            const arr:IMassage[] = []
            doc.forEach((d: any) => {
                arr.push(d.data())
            })

            setMassages(arr.sort((a,b) => parseInt(a.createdAt) - parseInt(b.createdAt)))
        })

        return () => {
            unsub()
        }
    }, [])

    const addMassage = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(base, 'massages'), {
                user,
                massage,
                createdAt: Date.now()
            })
            console.log(docRef)
        } catch (e: any) {

        }
        setMassage('');

    }
    return (
        <div className="chat-page">
            <div className="chat-header">
                <h2>Чат</h2>
            </div>
            <div className="chat-body">
                {massages.map((msg, index) => (
                    <div key={msg.createdAt} style={msg.user._id === user?._id ? {alignItems: 'flex-end'} : {}} className="message sender-message">
                        <div className={'msg__item'}>
                            <div className={'msg__item_img'}>
                                <img src={msg.user.avatar} alt={'User Avatar'} className={'msg__item_avatar'}/>
                            </div>

                            <h1 className={'msg__item_name'}>{msg.user.name}</h1>
                        </div>

                        <div className="message-text">{msg.massage}</div>
                    </div>
                ))}

            </div>
            <div className="chat-footer">
                <form className="message-form">
                    <input
                        maxLength={40}
                        onChange={e => setMassage(e.target.value)}
                        value={massage}
                        type="text"
                        className="message-input"
                        placeholder="Введите сообщение"/>
                    <button
                        onClick={addMassage}
                        className="send-button">Отправить
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Massage;