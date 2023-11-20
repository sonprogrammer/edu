import React,{useState} from 'react';

function App(){
    const [nickname, setNickname] = useState('');

    //이벤트 핸들러
    const updateNickname = (e) => {
        const updateName = e.target.value

        setNickname(updateName);

    }

    return (
        <div>

            <label>{nickname}</label>
            <input value={nickname} onChange={updateNickname} />
        </div>
    )
}