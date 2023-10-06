'use client'
import { Tabs } from 'flowbite-react'
import { TabItemProps } from 'flowbite-react/lib/esm/components/Tab/TabItem'

const Tab: React.FC<TabItemProps> = ({ ...props }) => {
    return <Tabs.Item {...props}>{props.children}</Tabs.Item>
}

export default Tab
