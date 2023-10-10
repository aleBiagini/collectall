import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { } from '@redux-devtools/extension' // required for devtools typing
import { SelectOption } from '../models/SelectOption';

interface MultipleSelectPlaceholderState {
    // selectedOptions: SelectOption[]; //could be just one selected option or more
    optionList: SelectOption[]; // full list of options
    setOptionList: (options: SelectOption[]) => void
}

const useMultipleSelectPlaceholderStore = create<MultipleSelectPlaceholderState>()(
    devtools(
        persist(
            (set) => ({
                optionList: new Array<SelectOption>(),
                setOptionList: (options) => set(() => ({ optionList: options})),
            }),
            {
                name: 'selectOption-storage',
            }
        )
    )
)

export default useMultipleSelectPlaceholderStore;