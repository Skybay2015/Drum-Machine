export const initialState = {
    range: {
        volume: 0.5,
        minVal: 0,
        maxVal: 1,
        step: 0.01,
    },
    isEnabled: false,
    soundType: '',
    isBankOne: true
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'changeBank': 
        return {
            ...state,
            isBankOne: !state.isBankOne
        }
        case 'toggleEnabled':
            return {
                ...state,
                isEnabled: !state.isEnabled,
            };
        case 'changeVolume':
            return {
                ...state,
                range: {
                    ...state.range,
                    volume: +action.payload,
                },
            };

        case 'changeSoundType':
            return {
                ...state,
                soundType: action.playload,
            };

        default:
            return state;
    }
}
