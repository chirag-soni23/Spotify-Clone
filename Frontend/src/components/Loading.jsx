import React from 'react'

function Loading() {
  return (
    <div className='flex bg-[#212121] items-center justify-center h-screen'>
        <div className="w-16 h-16 border-4 border-green-500 border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default Loading
