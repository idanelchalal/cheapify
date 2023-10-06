'use client'

import {
    EnglishMarketLabel,
    HebrewMarketLabel,
    MultiSelectorOptionType,
} from '@/types'
import Select from 'react-select'
import { MultiValue, ActionMeta } from 'react-select'
import makeAnimated from 'react-select/animated'

type MultiSelectorProps = {
    options: MultiSelectorOptionType<HebrewMarketLabel, EnglishMarketLabel>[]
    modifyState: modifyStateFn
    id: string
}

type modifyStateFn = (state: any) => void

const animatedComponents = makeAnimated()

const MultiSelector = ({ options, modifyState, id }: MultiSelectorProps) => {
    const onChange = (
        value: MultiValue<unknown>,
        action: ActionMeta<unknown>
    ) => {
        modifyState(value)
    }

    return (
        <Select
            instanceId={id}
            classNamePrefix={'selector-prefix_'}
            classNames={{
                control: () =>
                    'direction-rtl w-full min-w-[16rem] sm:w-fit text-neutral-400 text-sm',
                option: () => 'hover:bg-orange-300',
            }}
            styles={{
                control: (base) => ({
                    ...base,
                    borderRadius: '6px',
                    '&:hover': {
                        borderColor: 'rgb(163 163 163)',
                    },
                    border: '1px solid rgb(163 163 163)',
                    boxShadow: 'none',
                }),
            }}
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={[]}
            options={options}
            isSearchable={false}
            placeholder="בחר רשת"
            isMulti
            onChange={onChange}
        />
    )
}

export default MultiSelector
