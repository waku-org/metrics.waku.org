import React from 'react'

export default function Ecosystem() {
  return (
    <div className=''>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl'>Ecosystem directory</h1>
                <h1 className='text-[#707071] hidden md:block'>Powered by Waku</h1>
            </div>

            <div className='flex justify-end mt-10 space-x-5'>
                <button className='flex space-x-3 items-center bg-[#202021] p-2 rounded-xl text-white hover:border-white hover:border-2'>
                    <h1>Add project</h1>
                    <svg className='h-5 w-5' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#ffffff" d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/>
</svg>
                    </button>
            </div>

            <div className='mt-10 space-y-10'>
                
            <div id='ecosystem-project'
                    class="flex md:w-auto items-end justify-between rounded-lg bg-white p-6 dark:bg-[#202021]"
                >
                    <div class="flex items-center gap-4">
                        <img className='rounded-full w-16 h-16 bg-white' />

                        <div className='space-y-3'>
                            <p class="text-lg text-[#707071] dark:text-white">Project name</p>

                            <p class="text-xs font-medium text-gray-900 dark:text-gray-400">Project description</p>
                        </div>
                    </div>

                    <div
                        class="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600 dark:bg-green-700 dark:text-green-50"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                        </svg>

                        <span class="text-xs font-medium"> 67.81% </span>
                    </div>
                </div>              

                <div id='ecosystem-project'
                    class="flex md:w-auto items-end justify-between rounded-lg bg-white p-6 dark:bg-[#202021]"
                >
                    <div class="flex items-center gap-4">
                        <img className='rounded-full w-16 h-16 bg-white' />

                        <div className='space-y-3'>
                            <p class="text-lg text-[#707071] dark:text-white">Project name</p>

                            <p class="text-xs font-medium text-gray-900 dark:text-gray-400">Project description</p>
                        </div>
                    </div>

                    <div
                        class="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600 dark:bg-green-700 dark:text-green-50"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                        </svg>

                        <span class="text-xs font-medium"> 67.81% </span>
                    </div>
                </div>           
                
            </div>

           
        </div>
  )
}
