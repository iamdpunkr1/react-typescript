import {atom, selector} from 'recoil';

export const mcqState = atom({
    key: 'mcqState',
    default: {
        questions:[
                    {
                        question: "",
                        options: [""],
                        answer: ""
                    }
                ]
        }
})

export const mcqSelector = selector({
    key: 'mcqSelector',
    get: ({get}) => {
        const mcq = get(mcqState);
        return mcq;
    }
})