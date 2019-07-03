import React from 'react';
import classes from './Controls.module.sass'

const Controls = ({ enabled, soundType, range, dispatch, isBankOne }) => {
    const toddlerPowerStyles = {
        marginLeft: enabled ? 'auto' : '0',
    };

    const toddlerBankStyles = {
        marginLeft: isBankOne ? 'auto' : '0',
    };

    function createControl (text, style, onClick) {
        return (
            <div className={classes.control}>
                <p>{text}</p>
                <div
                    className={classes.toddlerContainer}
                    onClick={() => onClick()}>
                    <div
                        style={style}
                        className={classes.toddler}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={classes.controls__container}>
            {createControl('Power', toddlerPowerStyles, ()=>{
                dispatch({ type: 'toggleEnabled' });
                dispatch({ type: 'changeSoundType', payload: '' });
            })}

            <div>
                <p>{soundType}</p>
            </div>

            <div className={classes.control}>
                <p>Volume</p>
                <input
                    type='range'
                    step={range.step}
                    value={range.volume}
                    min={range.minVal}
                    max={range.maxVal}
                    onChange={(e) => {
                        dispatch({
                            type: 'changeVolume',
                            payload: e.target.value,
                        });
                    }}
                />
            </div>

            {createControl('Bank', toddlerBankStyles, ()=> dispatch({ type: 'changeBank' }))}
        </div>
    );
};

export default Controls;
