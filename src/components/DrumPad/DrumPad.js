import React, {useRef, useEffect, useState} from 'react';
import classes from './DrumPad.module.sass';



const DrumPad = (props) => {
    const audioElem = useRef()
    const [active, setActive] = useState(false) 

    const inActiveStyles = {
        backgroundColor: 'grey',
        boxShadow: 'black 3px 3px 5px',
    };

    const activeStyles = {
        backgroundColor: props.enabled ? 'yellow' : 'grey',
        boxShadow: 'none' ,
    }; 

    function pressedButton () {
        setActive(true);
       const t = setTimeout (() => {
            setActive(false)
            clearTimeout(t)
        }, 100)
    }

    useEffect(() => {
        const handleKeypressPlaySound = (e) => {
            if (active) return
            const key = String.fromCharCode(e.keyCode).toUpperCase();
            if (key === props.audioObj.keyTrigger) {
                pressedButton()
                if (!props.enabled) return
                props.dispatch({type: 'changeSoundType', playload: props.audioObj.id});
                props.onPlaySound(audioElem);
                
            }
        };
        document.addEventListener('keypress', handleKeypressPlaySound);

        return () => {
            document.removeEventListener(
                'keypress',
                handleKeypressPlaySound,
            );
        };
    }, [props.enabled]);

    useEffect(()=> {
        audioElem.current.volume = props.volume
    }, [props.volume])

    return (
        <div
            onClick={() => {
                pressedButton();
                if (!props.enabled) return;
                props.dispatch({
                    type: 'changeSoundType',
                    playload: props.audioObj.id,
                });
                props.onPlaySound(audioElem)
                
            }}
            className={classes.DrumPad}
            style={!active ? inActiveStyles : activeStyles}>
            <audio
                ref={audioElem}
                src={props.audioObj.url}
            />
            <p>{props.audioObj.keyTrigger}</p>
        </div>
    );
};

export default DrumPad;
