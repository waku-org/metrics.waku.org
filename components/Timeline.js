import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import axios from "axios";
import CommunityMetrics from "@/components/CommunityMetrics";
import Loader from "@/components/atoms/Loader";

export default function Timeline(props) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [current, setCurrent] = useState(null);
  const [previous, setPrevious] = useState(null);

  const [name, setName] = useState("");

  async function handleNewSave(e) {
    e.preventDefault();
    const res = await axios.post("/api/saves/set", {
      name,
      data: {
        stats: props.stats,
      },
    });

    props.setSaves(res.data.data);
    setName(null);
    onCloseModal();
  }

  const closeIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7 7l10 10M7 17L17 7"
      />
    </svg>
  );
  const customStyles = {
    content: {
      borderRadius: "20px",
      backgroundColor: "black",
      bgColor: "black",
    },
  };

  if (props.isLoading) {
    return <Loader />;
  }

  if (current !== null) {
    return (
      <CommunityMetrics
        stats={props.saves[current]?.data?.stats}
        isLoading={false}
        previous={previous ? props.saves[previous]?.data?.stats : {}}
        setCurrent={setCurrent}
        save={props.saves[current]}
      />
    );
  }

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Timeline</h1>
        <h1 className="text-[#707071] hidden md:block">Powered by Waku</h1>
      </div>

      <Modal
        style={customStyles}
        className="bg-black"
        closeIcon={closeIcon}
        open={open}
        onClose={onCloseModal}
        center
      >
        <div className="">
          <div className="m-4">
            <h1 className="text-xl">Snapshot</h1>
            <div className="mt-4">
              <form onSubmit={(e) => handleNewSave(e)} className="space-y-3">
                <input
                  className="border-[#2c2c2c3e] border-2 w-full  p-2 text-sm"
                  placeholder="Name"
                  value={name}
                  required={true}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <div className="flex justify-end">
                  <button className="bg-black text-white p-2">
                    Create snapshot
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>

      {props.isLoggedIn && (
        <div className="flex justify-end mt-10 space-x-5">
          <button
            onClick={onOpenModal}
            className="flex space-x-3 items-center bg-[#202021] p-2 rounded-xl text-white hover:border-white hover:border-2"
          >
            <h1>Create snapshot</h1>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
              />
            </svg>
          </button>
        </div>
      )}

      {props.saves?.length ? (
        <div className="overflow-x-auto mt-10 rounded-lg">
          <table className="min-w-full divide-y-2 divide-black bg-white text-sm dark:divide-black dark:bg-[#202021]">
            <thead className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                  Name
                </td>
                <td className="whitespace-nowrap font-medium px-4 py-2 text-gray-700 dark:text-gray-200">
                  Date
                </td>
                <td className="whitespace-nowrap px-4 py-2"></td>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-black">
              {props.saves.map((save, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-400">
                    {save.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-400">
                    {new Date(save.created_at).toDateString()}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <button
                      onClick={() => {
                        setCurrent(index);
                        setPrevious(
                          index !== props.saves?.length - 1 ? index + 1 : null
                        );
                      }}
                      className="inline-block rounded bg-black px-4 py-2 text-xs font-medium text-white hover:bg-white hover:text-black"
                    >
                      View snapshot
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
        <div className="flex mt-10 justify-center">
          <svg className="w-10 h-10" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="8.828" cy="18" fill="#F5F8FA" rx="7.953" ry="13.281"/>
    <path fill="#E1E8ED" d="M8.828 32.031C3.948 32.031.125 25.868.125 18S3.948 3.969 8.828 3.969S17.531 10.132 17.531 18s-3.823 14.031-8.703 14.031zm0-26.562C4.856 5.469 1.625 11.09 1.625 18s3.231 12.531 7.203 12.531S16.031 24.91 16.031 18S12.8 5.469 8.828 5.469z"/>
    <circle cx="6.594" cy="18" r="4.96" fill="#8899A6"/>
    <circle cx="6.594" cy="18" r="3.565" fill="#292F33"/>
    <circle cx="7.911" cy="15.443" r="1.426" fill="#F5F8FA"/>
    <ellipse cx="27.234" cy="18" fill="#F5F8FA" rx="7.953" ry="13.281"/>
    <path fill="#E1E8ED" d="M27.234 32.031c-4.88 0-8.703-6.163-8.703-14.031s3.823-14.031 8.703-14.031S35.938 10.132 35.938 18s-3.824 14.031-8.704 14.031zm0-26.562c-3.972 0-7.203 5.622-7.203 12.531c0 6.91 3.231 12.531 7.203 12.531S34.438 24.91 34.438 18S31.206 5.469 27.234 5.469z"/>
    <circle cx="25" cy="18" r="4.96" fill="#8899A6"/>
    <circle cx="25" cy="18" r="3.565" fill="#292F33"/>
    <circle cx="26.317" cy="15.443" r="1.426" fill="#F5F8FA"/>
</svg>
</div>
<h1 className="text-center mt-4">No timeline snapshots found!</h1>
          </div>
      )}
    </div>
  );
}
