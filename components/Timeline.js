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
        <div className="rounded-xl">
          <div className="m-4">
            <h1 className="text-xl">Snapshot</h1>
            <div className="mt-4">
              <form onSubmit={(e) => handleNewSave(e)} className="space-y-3">
                <input
                  className="border-[#2c2c2c3e] border-2 w-full rounde -lg p-2 text-sm border-2 rounded-lg"
                  placeholder="Name"
                  value={name}
                  required={true}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <div className="flex justify-end">
                  <button className="bg-black rounded-lg text-white p-2">
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
        <div>Snapshot data</div>
      )}
    </div>
  );
}
