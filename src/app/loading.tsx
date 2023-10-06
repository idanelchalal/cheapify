'use client'
import { MutatingDots } from 'react-loader-spinner'

const loading = () => {
    return (
        <div
            id="loader"
            className="w-full h-screen flex justify-center items-center"
        >
            <MutatingDots
                height="600"
                width="600"
                color="rgb(255 138 76)"
                secondaryColor="rgb(250 202 21)"
                radius="13"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default loading
