import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useEffect } from "react";
import axios from "axios";
import Loader from "@/components/atoms/Loader";
import initiateDb from "@/utils/dbPublic";

export default function Ecosystem(props) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setCurrent(false);
    setImage(null);
    setName(null);
    setDescription(null);
    setUrl(null);
    setOpen(false);
  };

  const [ecosystem, setEcosystem] = useState(false);

  const [current, setCurrent] = useState(false);

  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    (async () => {
      const supabase = initiateDb();

      const data = await supabase
        .from("ecosystem")
        .select()
        .order("created_at", { ascending: false });

      setEcosystem(data.data);
    })();
  }, []);

  async function handleSet(e) {
    e.preventDefault();

    const data = new FormData();

    data.append("id", current ? current.id : false);
    if (image !== null) {
      data.append("image", image);
    }
    data.append("name", name);
    data.append("description", description);
    data.append("url", url);

    const res = await axios.post("/api/ecosystem/set", data);

    setEcosystem(res.data.data);
    onCloseModal();
  }

  async function handleDelete(project) {
    if (confirm("Are you sure to delete the project?")) {
      const res = await axios.post("/api/ecosystem/delete", {
        id: project.id,
      });

      setEcosystem(res.data.data);
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

  if (ecosystem === false) {
    return <Loader />;
  }

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Ecosystem directory</h1>
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
            <h1 className="text-xl">{current ? "Edit" : "Add new"} project</h1>
            <div className="mt-4">
              <form onSubmit={(e) => handleSet(e)} className="space-y-3">
                <label>
                  <svg
                    className="w-14 h-14 bg-black rounded-full p-2"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#ffffff"
                      d="M14 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v8c0 .373.102.722.28 1.02l4.669-4.588a1.5 1.5 0 0 1 2.102 0l4.67 4.588A1.99 1.99 0 0 0 16 14V6a2 2 0 0 0-2-2H6Zm0 12h8c.37 0 .715-.1 1.012-.274l-4.662-4.58a.5.5 0 0 0-.7 0l-4.662 4.58A1.99 1.99 0 0 0 6 16Z"
                    />
                  </svg>
                  <input
                    type="file"
                    required={current === false}
                    onChange={(e) => setImage(e.target.files[0])}
                    className="hidden"
                    name="file1"
                    accept={".png"}
                  />
                </label>
                <input
                  className="border-[#2c2c2c3e] border-2 w-full rounde -lg p-2 text-sm border-2 rounded-lg"
                  placeholder="Project name"
                  value={name}
                  required={true}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <textarea
                  className="border-[#2c2c2c3e] align-top w-full h-20 border-2 rounded-lg p-2 text-sm"
                  placeholder="Project description"
                  value={description}
                  required={true}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <input
                  className="border-[#2c2c2c3e] border-2 w-full rounde -lg p-2 text-sm border-2 rounded-lg"
                  placeholder="Project URL"
                  value={url}
                  required={true}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <br />
                <div className="flex justify-end">
                  <button className="bg-black rounded-lg text-white p-2">
                    {current ? "Edit" : "Add"} project
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
            <h1>Add project</h1>
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

      {ecosystem.length ? (
        <div className="mt-10 space-y-10">
          {ecosystem.map((project, index) => (
            <div
              key={index}
              className="flex md:w-auto items-end justify-between rounded-lg bg-white p-6 dark:bg-[#202021]"
            >
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-16 h-16 bg-white"
                  src={`https://wmpoapaaynbjbqtjjtdy.supabase.co/storage/v1/object/public/public/public/${project.id}.png`}
                  alt={"Project image"}
                />

                <div className="space-y-3">
                  <p className="text-lg text-[#707071] dark:text-white">
                    {project.name}
                  </p>

                  <p className="text-xs font-medium text-gray-900 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </div>
              {props.isLoggedIn && (
                <div className="flex space-x-2 items-center">
                  <svg
                    onClick={() => {
                      setCurrent(project);
                      setName(project.name);
                      setDescription(project.description);
                      setUrl(project.url);
                      onOpenModal();
                    }}
                    className="w-7 h-7 rounded-xl p-1 hover:bg-yellow-200"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Zm-3.525-.725l-.7-.7l1.4 1.4l-.7-.7Z"
                    />
                  </svg>
                  <svg
                    className="w-7 h-7 rounded-xl p-1 hover:bg-red-200"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleDelete(project)}
                  >
                    <path
                      fill="#000000"
                      d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
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
<h1 className="text-center mt-4">No projects found!</h1>
          </div>
          
      )}
    </div>
        );
}
