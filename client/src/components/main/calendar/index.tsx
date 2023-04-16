import styled from "styled-components";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface propsType {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Calendar = ({ setState }: propsType) => {
  const onClickHandler = () => {
    setState(true);
  };

  return (
    <div>
      <OpenBtn onClick={() => onClickHandler()}>
        <FontAwesomeIcon icon={faPlus} />
      </OpenBtn>
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={[
          { title: "event 1", date: "2023-04-01", end: "2023-04-01" },
          { title: "event 2", date: "2023-04-02" },
        ]}
      ></FullCalendar>
    </div>
  );
};

const OpenBtn = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 99;
`;

export default Calendar;
