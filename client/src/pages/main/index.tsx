import { useState } from "react";

import Calendar from "@/components/main/calendar";
import Modal from "@/components/main/modal";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {openModal && <Modal setState={setOpenModal} />}
      <Calendar setState={setOpenModal} />
    </div>
  );
};

export default Main;
