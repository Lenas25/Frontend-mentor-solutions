import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function ButtonModal({ image, text, info }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        className="text-black font-semibold focus:ring-[#81abf5] outline-none focus:ring-2 border-2 border-[#81abf5] w-[250px] h-fit"
        onClick={() => setOpenModal(true)}>
          <div className="flex items-center gap-2">
          <img src={image} alt="" className="size-6 mr-3" />
          <h5 className="text-lg">{text}</h5>
          </div>
      </Button>
      <Modal
        className="bg-white/40"
        show={openModal}
        onClose={() => setOpenModal(false)}>
        <Modal.Header>
            <h3 className="text-2xl font-semibold">{text}</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {info}
            </p>

          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
