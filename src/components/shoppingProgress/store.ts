import { create } from 'zustand'

type stepperStore = {
    step: number,
    setStep: (setStep:number) => void,
}

export const useStepperStore = create<stepperStore> ((set) => ({
    step: 2,
    setStep: (setStep) => {
        set(() => ({step : setStep}))
    },
}))