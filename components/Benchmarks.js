import React from 'react'

export default function Benchmarks() {
  return (
    <div className=''>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl'>Benchmarks</h1>
                <h1 className='text-[#707071] hidden md:block'>Powered by Waku</h1>
            </div>

            <div
  class="flow-root rounded-lg border border-gray-100 py-3 shadow-sm dark:border-gray-700 mt-10"
>
  <dl class="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700">
    <div
      class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 even:dark:bg-[#202021] sm:grid-cols-3 sm:gap-4"
    >
      <dt class="font-medium text-gray-900 dark:text-white">Benchmark name</dt>
      <dd class="text-gray-700 dark:text-gray-200 sm:col-span-2">Benchmark</dd>
    </div>

   

    <div
      class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 even:dark:bg-[#202021] sm:grid-cols-3 sm:gap-4"
    >
      <dt class="font-medium text-gray-900 dark:text-white">Network latency</dt>
      <dd class="text-gray-700 dark:text-gray-200 sm:col-span-2">
        WIP
      </dd>
    </div>
  </dl>
</div>

           
        </div>
  )
}
