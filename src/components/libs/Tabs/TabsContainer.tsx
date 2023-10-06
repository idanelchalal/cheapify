'use client'
import { Tabs } from 'flowbite-react'

const TabsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Tabs.Group
            style="pills"
            theme={{
                tabitemcontainer: {
                    base: 'border border-neutral-300 rounded-md px-4 py-2 my-2 text-sm text-neutral-600',
                },
                base: 'direction-rtl',
                tablist: {
                    tabitem: {
                        base: 'px-4 py-2 text-white rounded-md active:bg-orange-400',
                        styles: {
                            pills: {
                                active: {
                                    off: 'bg-yellow-200 ml-2',
                                    on: 'bg-yellow-300 ml-2',
                                },
                            },
                        },
                    },
                },
            }}
        >
            {children}
        </Tabs.Group>
    )
}

export default TabsContainer
