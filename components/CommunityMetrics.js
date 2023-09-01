import React, {useEffect, useState} from 'react'
import { getImageData } from '@/app/api/dockerhub';



export default function CommunityMetrics() {
    const [pullCount, setPullCount] = useState(0);

    useEffect(() => {
        async function fetchPullCount() {
          try {
            const imageName = 'statusteam/nim-waku';
            const imageData = await getImageData();
            const pulls = imageData.pull_count || 0;
            setPullCount(pulls);
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchPullCount();
      }, []);

  return (
    <div className=''>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl'>Community metrics</h1>
                <h1 className='text-[#707071] hidden md:block'>Powered by Waku</h1>
            </div>

            <div className='space-y-5 mt-10 justify-between'>
            <h1 className='text-[#707071]'>Community channels </h1>
                <div id='discord'
                    class="flex md:w-auto items-end justify-between rounded-lg bg-white p-6 dark:bg-[#202021]"
                >
                    <div class="flex items-center gap-4">
                        <span
                            class="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block"
                        >
                            <svg className='w-6 h-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                            </svg>
                        </span>

                        <div className='space-y-3'>
                            <p class="text-sm text-[#707071] dark:text-gray-400">Discord members</p>

                            <p class="text-2xl font-medium text-gray-900 dark:text-white">240</p>
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

                <div id='x'
                    class="flex md:w-auto items-end justify-between rounded-lg bg-white p-6 dark:bg-[#202021]"
                >
                    <div class="flex items-center gap-4">
                        <span
                            class="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block"
                        >
                            <svg className='w-6 h-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                            </svg>
                        </span>

                        <div className='space-y-3'>
                            <p class="text-sm text-[#707071] dark:text-gray-400">X (Twitter) followers</p>

                            <p class="text-2xl font-medium text-gray-900 dark:text-white">240</p>
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
                <h1 className='text-[#707071]'>GitHub</h1>

                <div id='github-stars'
                    class="flex md:w-auto items-end justify-between rounded-lg bg-white p-6 dark:bg-[#202021]"
                >
                    <div class="flex items-center gap-4">
                        <span
                            class="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block"
                        >
                            <svg className='w-6 h-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                            </svg>
                        </span>

                        <div className='space-y-3'>
                            <p class="text-sm text-[#707071] dark:text-gray-400">Total GitHub stars (organization wide)</p>

                            <p class="text-2xl font-medium text-gray-900 dark:text-white">240</p>
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

                <div id='github-clones'
                    class="flex md:w-auto items-end justify-between rounded-lg bg-white p-6 dark:bg-[#202021]"
                >
                    <div class="flex items-center gap-4">
                        <span
                            class="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block"
                        >
                            <svg className='w-6 h-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                            </svg>
                        </span>

                        <div className='space-y-3'>
                            <p class="text-sm text-[#707071] dark:text-gray-400">Total GitHub clones (organization wide)</p>

                            <p class="text-2xl font-medium text-gray-900 dark:text-white">240</p>
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

                <h1 className='text-[#707071]'>SDKs</h1>

                <div id='npm'
                    class="flex md:w-auto items-end justify-between rounded-lg bg-white p-6 dark:bg-[#202021]"
                >
                    <div class="flex items-center gap-4">
                        <span
                            class="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block"
                        >
                            <svg className='w-6 h-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                            </svg>
                        </span>

                        <div className='space-y-3'>
                            <p class="text-sm text-[#707071] dark:text-gray-400">NPM downloads</p>

                            <p class="text-2xl font-medium text-gray-900 dark:text-white">240</p>
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

                <div id='jswaku-stars'
                    class="flex md:w-auto items-end justify-between rounded-lg bg-white p-6 dark:bg-[#202021]"
                >
                    <div class="flex items-center gap-4">
                        <span
                            class="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block"
                        >
                            <svg className='w-6 h-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                            </svg>
                        </span>

                        <div className='space-y-3'>
                            <p class="text-sm text-[#707071] dark:text-gray-400">js-waku stars</p>

                            <p class="text-2xl font-medium text-gray-900 dark:text-white">240</p>
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

                <div id='jswaku-clones'
                    class="flex md:w-auto items-end justify-between rounded-lg bg-white p-6 dark:bg-[#202021]"
                >
                    <div class="flex items-center gap-4">
                        <span
                            class="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block"
                        >
                            <svg className='w-6 h-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                            </svg>
                        </span>

                        <div className='space-y-3'>
                            <p class="text-sm text-[#707071] dark:text-gray-400">js-waku downloads/clones</p>

                            <p class="text-2xl font-medium text-gray-900 dark:text-white">240</p>
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

                <div id='jswaku-forks'
                    class="flex md:w-auto items-end justify-between rounded-lg bg-white p-6 dark:bg-[#202021]"
                >
                    <div class="flex items-center gap-4">
                        <span
                            class="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block"
                        >
                            <svg className='w-6 h-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                            </svg>
                        </span>

                        <div className='space-y-3'>
                            <p class="text-sm text-[#707071] dark:text-gray-400">js-waku forks</p>

                            <p class="text-2xl font-medium text-gray-900 dark:text-white">240</p>
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

                <div id='jswaku-issues'
                    class="flex md:w-auto items-end justify-between rounded-lg bg-white p-6 dark:bg-[#202021]"
                >
                    <div class="flex items-center gap-4">
                        <span
                            class="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block"
                        >
                            <svg className='w-6 h-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                            </svg>
                        </span>

                        <div className='space-y-3'>
                            <p class="text-sm text-[#707071] dark:text-gray-400">js-waku issues</p>

                            <p class="text-2xl font-medium text-gray-900 dark:text-white">240</p>
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

                <div id='rust-downloads'
                    class="flex md:w-auto items-end justify-between rounded-lg bg-white p-6 dark:bg-[#202021]"
                >
                    <div class="flex items-center gap-4">
                        <span
                            class="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block"
                        >
                            <svg className='w-6 h-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                            </svg>
                        </span>

                        <div className='space-y-3'>
                            <p class="text-sm text-[#707071] dark:text-gray-400">rust binding downloads</p>

                            <p class="text-2xl font-medium text-gray-900 dark:text-white">240</p>
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

                <div id='gowaku-downloads'
                    class="flex md:w-auto items-end justify-between rounded-lg bg-white p-6 dark:bg-[#202021]"
                >
                    <div class="flex items-center gap-4">
                        <span
                            class="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block"
                        >
                            <svg className='w-6 h-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                            </svg>
                        </span>

                        <div className='space-y-3'>
                            <p class="text-sm text-[#707071] dark:text-gray-400">go-waku downloads</p>

                            <p class="text-2xl font-medium text-gray-900 dark:text-white">240</p>
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

                <div id='nwaku-downloads'
                    class="flex md:w-auto items-end justify-between rounded-lg bg-white p-6 dark:bg-[#202021]"
                >
                    <div class="flex items-center gap-4">
                        <span
                            class="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block"
                        >
                            <svg className='w-6 h-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                            </svg>
                        </span>

                        <div className='space-y-3'>
                            <p class="text-sm text-[#707071] dark:text-gray-400">nwaku downloads</p>

                            <p class="text-2xl font-medium text-gray-900 dark:text-white">240</p>
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

                <div id='nwaku-docker'
                    class="flex md:w-auto items-end justify-between rounded-lg bg-white p-6 dark:bg-[#202021]"
                >
                    <div class="flex items-center gap-4">
                        <span
                            class="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block"
                        >
                            <svg className='w-6 h-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                            </svg>
                        </span>

                        <div className='space-y-3'>
                            <p class="text-sm text-[#707071] dark:text-gray-400">nwaku docker pulls</p>

                            <p class="text-2xl font-medium text-gray-900 dark:text-white">{pullCount}</p>
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
