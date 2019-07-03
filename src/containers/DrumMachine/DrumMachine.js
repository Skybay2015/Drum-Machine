import React, {useReducer} from 'react';
import PadBank from '../../components/PadBank/PadBank';
import classes from './DrumMachine.module.sass';
import Controls from '../../components/Controls/Controls';
import { initialState, reducer } from '../../store/reducer';

const DrumMachine = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className={classes.DrumMachine}>
            <PadBank
                enabled={state.isEnabled}
                dispatch={dispatch}
                volume={state.range.volume}
                isBankOne={state.isBankOne}
            />
            <Controls
                soundType={state.soundType}
                dispatch={dispatch}
                enabled={state.isEnabled}
                range={state.range}
                isBankOne={state.isBankOne}
            />
        </div>
    );
};

export default DrumMachine;