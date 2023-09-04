import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function Benchmarks() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const closeIcon = (
      <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 7l10 10M7 17L17 7" />
      </svg>

  );
  const customStyles = {
      content: {
          borderRadius: "20px",
          backgroundColor: "black",
          bgColor: 'black'
      },
  };

  return (
    <div className=''>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl'>Benchmarks</h1>
                <h1 className='text-[#707071] hidden md:block'>Powered by Waku</h1>
            </div>

            <Modal style={customStyles} classNames="bg-black" closeIcon={closeIcon} open={open} onClose={onCloseModal} center>
                <div classNames="rounded-xl w-40 h-40 ">
                    <div className='m-4'>
                        <h1 className='text-xl'>Add new benchmark</h1>
                        <div className='mt-4'>
                            <form className='space-y-3'>

                                <input className='border-[#2c2c2c3e] border-2 w-full rounde -lg p-2 text-sm border-2 rounded-lg' placeholder='Label' />
                                <br />
                                <input className='border-[#2c2c2c3e] border-2 w-full rounde -lg p-2 text-sm border-2 rounded-lg' placeholder='Value' />
                                <br />
                                <div className='flex justify-end'>
                                    <button className='bg-black rounded-lg text-white p-2'>Add benchmark</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>

            <div className='flex justify-end mt-10 space-x-5'>
                <button onClick={onOpenModal} className='flex space-x-3 items-center bg-[#202021] p-2 rounded-xl text-white hover:border-white hover:border-2'>
                    <h1>Add benchmark</h1>
                    <svg className='h-5 w-5' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ffffff" d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
                    </svg>
                </button>
            </div>            

            <div
  class="flow-root rounded-lg border border-gray-100 py-3 shadow-sm dark:border-gray-700 mt-10"
>
  
  <dl class="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700">


   

    <div id='stat'
      class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 even:dark:bg-[#202021] sm:grid-cols-5 sm:gap-4"
    >
      <dt class="font-medium text-gray-900 dark:text-white">Network latency</dt>
      <dd class="text-gray-700 dark:text-gray-200 sm:col-span-2">
        WIP
      </dd>
      <dd className='sm:col-span-2'>
      <div className='flex space-x-2 items-center justify-end'>

<svg className='w-7 h-7 rounded-xl p-1 hover:bg-red-200' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
<path fill="#FFF" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"/>
</svg>
<svg className='w-7 h-7 rounded-xl p-1 hover:bg-yellow-200' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path fill="#FFF" d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Zm-3.525-.725l-.7-.7l1.4 1.4l-.7-.7Z"/>
</svg>
</div>
      </dd>
    </div>
    
  </dl>
</div>

           
        </div>
  )
}
