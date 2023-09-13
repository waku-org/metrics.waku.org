import React from "react";
import OverviewCard from "@/components/molecules/OverviewCard";

export default function Overview(props) {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Overview</h1>
        <h1 className="text-[#707071] hidden md:block">Powered by Waku</h1>
      </div>

      <div className="md:flex flex-wrap md:space-x-5 space-y-5 md:space-y-0 mt-10 justify-between">
        <OverviewCard
          title={"Discord members"}
          icon={
            <span className="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
                />
              </svg>
            </span>
          }
          isLoading={props.isLoading}
          current={props.stats.discord}
          previous={props.previous?.data?.stats?.discord}
        />
        <OverviewCard
          title={"X (Twitter) followers"}
          icon={
            <span className="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
                />
              </svg>
            </span>
          }
          isLoading={props.isLoading}
          current={props.stats.twitter}
          previous={props.previous?.data?.stats?.twitter}
        />

        <OverviewCard
          title={"Github followers"}
          icon={
            <span className="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
                />
              </svg>
            </span>
          }
          isLoading={props.isLoading}
          current={props.stats.github}
          previous={props.previous?.data?.stats?.github}
        />

        <OverviewCard
          title={"Github Open Issues"}
          icon={
            <span className="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
                />
              </svg>
            </span>
          }
          isLoading={props.isLoading}
          current={props.stats.github_repos?.total?.open_issues}
          previous={
            props.previous?.data?.stats?.github_repos?.total?.open_issues
          }
        />
      </div>

      <div className="md:flex justify-between md:space-x-10 mt-10 space-y-10 md:space-y-0">
        <div
          id="communitymetricsbox"
          className="md:w-1/2 border-[#202021] hover:border-white border-4 rounded-lg p-6"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-xl">Community metrics</h1>
            <svg
              className="w-10 h-10"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M3 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm4.779 2.584a2 2 0 1 1 2.442-3.168A2 2 0 0 1 9.78 4.584ZM11 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2ZM2.5 6h2.67c-.11.313-.17.65-.17 1H2.5a.5.5 0 0 0-.5.5c0 .817.325 1.423.838 1.835c.236.19.519.343.839.455a2.5 2.5 0 0 0-.532.868a3.733 3.733 0 0 1-.933-.543C1.46 9.51 1 8.616 1 7.5A1.5 1.5 0 0 1 2.5 6Zm3.768 0a2 2 0 1 0 3.466 2a2 2 0 0 0-3.466-2Zm1.508.025A1.003 1.003 0 0 1 9 7a1 1 0 1 1-1.224-.975Zm5.386 3.31c-.236.19-.519.343-.839.455a2.5 2.5 0 0 1 .531.868c.34-.139.655-.32.934-.543C14.54 9.51 15 8.616 15 7.5A1.5 1.5 0 0 0 13.5 6h-2.67c.11.313.17.65.17 1h2.5a.5.5 0 0 1 .5.5c0 .817-.325 1.423-.838 1.835ZM10.5 10a1.5 1.5 0 0 1 1.5 1.5c0 1.116-.459 2.01-1.212 2.615C10.047 14.71 9.053 15 8 15c-1.053 0-2.047-.29-2.788-.885C4.46 13.51 4 12.616 4 11.5A1.496 1.496 0 0 1 5.5 10h5Zm0 1h-5a.5.5 0 0 0-.5.5c0 .817.325 1.423.838 1.835C6.364 13.757 7.12 14 8 14c.88 0 1.636-.243 2.162-.665c.513-.412.838-1.018.838-1.835a.5.5 0 0 0-.5-.5Z"
              />
            </svg>
          </div>
          <div className="text-xs mt-4 text-[#737378]">
            Community metrics include data related to adoption, user base,
            social audience and outreach.
          </div>
          <div className="flex space-x-3 mt-5">
            <span className="inline-flex items-center justify-center rounded-full bg-[#737378] px-2.5 py-0.5 text-[#000000]">
              <p className="whitespace-nowrap text-xs">Beta</p>
            </span>
          </div>
        </div>

        <div
          id="networkmetricsbox"
          className="md:w-1/2 border-[#202021] hover:border-white border-4 rounded-lg p-6"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-xl">Network metrics</h1>
            <svg
              className="w-10 h-10"
              viewBox="0 0 2048 2048"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M1836 517q42 87 63 184t21 195q0 131-36 252t-102 227t-162 190t-212 141v86H768v128h256v128H384v-128h256v-128H0V896h128q0-124 32-238t90-214t140-181t181-140t214-91t239-32q130 0 252 36t227 102t190 162t141 212h2v5zm-147-5q-73-127-187-217t-254-134q48 78 77 169t47 182h317zm103 384q0-132-44-256h-356q16 128 16 255t0 257h340q44-124 44-256zm-512 0q0-65-4-128t-12-128H784q-8 64-12 127t-4 129h512zm-256-763q-29 0-55 21t-49 56t-41 78t-33 85t-25 79t-15 60h436q-5-23-15-60t-24-79t-33-85t-41-77t-49-56t-56-22zm-224 28q-140 43-254 133T359 512h317q17-90 46-181t78-170zM300 640q-44 124-44 256h384q0-65 4-128t12-128H300zM128 1664h1152v-640H128v640zm1280-103q88-51 159-122t123-159h-282v281z"
              />
            </svg>
          </div>
          <div className="text-xs mt-4 text-[#737378]">
            Network metrics include data related to Waku node delivery and network
          </div>
          <div className="flex space-x-3 mt-5">
            <span className="inline-flex items-center justify-center rounded-full bg-[#737378] px-2.5 py-0.5 text-[#000000]">
              <p className="whitespace-nowrap text-xs">Work in progress</p>
            </span>
          </div>
        </div>
      </div>

      <div
        id="docs"
        className="mt-10 border-[#202021] hover:border-white border-4 rounded-lg p-6"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-xl">Documentation</h1>
          <svg
            className="w-10 h-10"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM7 7h10M7 12h10M7 17h6"
            />
          </svg>
        </div>
      </div>

      <div
        id="propose-a-metric"
        className="mt-10 border-[#202021] hover:border-white border-4 rounded-lg p-6"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-xl">Propose a new metric</h1>
          <svg
            className="w-10 h-10"
            viewBox="0 0 26 26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M12.906-.031a1 1 0 0 0-.125.031A1 1 0 0 0 12 1v1H3a3 3 0 0 0-3 3v13c0 1.656 1.344 3 3 3h9v.375l-5.438 2.719a1.006 1.006 0 0 0 .875 1.812L12 23.625V24a1 1 0 1 0 2 0v-.375l4.563 2.281a1.006 1.006 0 0 0 .875-1.812L14 21.375V21h9c1.656 0 3-1.344 3-3V5a3 3 0 0 0-3-3h-9V1a1 1 0 0 0-1.094-1.031zM2 5h22v13H2V5zm18.875 1a1 1 0 0 0-.594.281L17 9.563L14.719 7.28a1 1 0 0 0-1.594.219l-2.969 5.188l-1.219-3.063a1 1 0 0 0-1.656-.344l-3 3a1.016 1.016 0 1 0 1.439 1.44l1.906-1.906l1.438 3.562a1 1 0 0 0 1.812.125l3.344-5.844l2.062 2.063a1 1 0 0 0 1.438 0l4-4A1 1 0 0 0 20.875 6z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
