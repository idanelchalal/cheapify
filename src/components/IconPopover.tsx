type IconPopoverProperties = {
    popoverText: string
    children?: React.ReactNode
}

const IconPopover = ({ popoverText, children }: IconPopoverProperties) => {
    return (
        <div className="group relative">
            <div className="group-hover:scale-100 scale-0 w-max shadow-lg absolute transition -top-6 -right-6">
                <span className="text-xs text-white bg-neutral-200 p-1 rounded-md">
                    {popoverText}
                </span>
            </div>
            {children}
        </div>
    )
}

export default IconPopover
