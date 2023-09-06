import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Loader from "@/components/atoms/Loader";
import axios from "axios";
import initiateDb from "@/utils/dbPublic";

export default function Benchmarks(props) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setCurrentBenchmark(false);
    setName(null);
    setValue(null);
    setOpen(false);
  };

  const [benchmarks, setBenchmarks] = useState(false);
  const [currentBenchmark, setCurrentBenchmark] = useState(false);

  const [name, setName] = useState(null);
  const [value, setValue] = useState(null);

  useEffect(() => {
    (async () => {
      const supabase = initiateDb();

      const data = await supabase
        .from("benchmarks")
        .select()
        .order("created_at", { ascending: false });

      setBenchmarks(data.data);
    })();
  }, []);

  async function handleSet(e) {
    e.preventDefault();

    const res = await axios.post("/api/benchmarks/set", {
      id: currentBenchmark ? currentBenchmark.id : false,
      name,
      value,
    });

    setBenchmarks(res.data.data);
    onCloseModal();
  }

  async function handleDelete(benchmark) {
    if (confirm("Are you sure to delete the benchmark?")) {
      const res = await axios.post("/api/benchmarks/delete", {
        id: benchmark.id,
      });

      setBenchmarks(res.data.data);
    }
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

  if (benchmarks === false) {
    return <Loader />;
  }

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Benchmarks</h1>
        <h1 className="text-[#707071] hidden md:block">Powered by Waku</h1>
      </div>

      <Modal
        style={customStyles}
        classNames="bg-black"
        closeIcon={closeIcon}
        open={open}
        onClose={onCloseModal}
        center
      >
        <div className="rounded-xl">
          <div className="m-4">
            <h1 className="text-xl">
              {currentBenchmark ? "Edit" : "Add new"} benchmark
            </h1>
            <div className="mt-4">
              <form onSubmit={(e) => handleSet(e)} className="space-y-3">
                <input
                  className="border-[#2c2c2c3e] border-2 w-full rounde -lg p-2 text-sm border-2 rounded-lg"
                  placeholder="Label"
                  value={name}
                  required={true}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                  className="border-[#2c2c2c3e] border-2 w-full rounde -lg p-2 text-sm border-2 rounded-lg"
                  placeholder="Value"
                  required={true}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <br />
                <div className="flex justify-end">
                  <button className="bg-black rounded-lg text-white p-2">
                    {currentBenchmark ? "Update benchmark" : "Add benchmark"}
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
            <h1>Add benchmark</h1>
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

      {benchmarks.length ? (
        <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm dark:border-gray-700 mt-10">
          <dl className="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700">
            {benchmarks.map((benchmark, index) => (
              <div
                key={index}
                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 even:dark:bg-[#202021] sm:grid-cols-5 sm:gap-4"
              >
                <dt className="font-medium text-gray-900 dark:text-white">
                  {benchmark.name}
                </dt>
                <dd className="text-gray-700 dark:text-gray-200 sm:col-span-2">
                  {benchmark.value}
                </dd>
                <dd className="sm:col-span-2">
                  {props.isLoggedIn && (
                    <div className="flex space-x-2 items-center justify-end">
                      <svg
                        onClick={() => {
                          setCurrentBenchmark(benchmark);
                          setName(benchmark.name);
                          setValue(benchmark.value);
                          onOpenModal();
                        }}
                        className="w-7 h-7 rounded-xl p-1 hover:bg-yellow-200"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#FFF"
                          d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Zm-3.525-.725l-.7-.7l1.4 1.4l-.7-.7Z"
                        />
                      </svg>
                      <svg
                        className="w-7 h-7 rounded-xl p-1 hover:bg-red-200"
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => handleDelete(benchmark)}
                      >
                        <path
                          fill="#FFF"
                          d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"
                        />
                      </svg>
                    </div>
                  )}
                </dd>
              </div>
            ))}
          </dl>
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
<h1 className="text-center mt-4">No benchmarks found!</h1>
          </div>
          
      )}
    </div>
  );
}
