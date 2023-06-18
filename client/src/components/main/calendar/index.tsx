import styled from "styled-components";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import dayGridPlugin from "@fullcalendar/daygrid";
import { getCookie, removeCookie } from "@/util/cookie";

const FullCalendar = dynamic(() => import("@fullcalendar/react"), {
  ssr: false,
});

interface Props {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Event {
  title: string;
  date: string;
  end?: string;
}

const Calendar = ({ setState }: Props) => {
  const [events, setEvents] = useState<Event[]>([
    { title: "Event 1", date: "2023-04-01", end: "2023-04-01" },
    { title: "Event 2", date: "2023-04-01" },
  ]);

  const router = useRouter();

  useEffect(() => {
    if (!getCookie("token")) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/api/posts?username=${getCookie("username")}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        const formattedEvents = res.map((item: any) => ({
          title: item.title,
          date: item.s_date,
          end: item.e_date,
        }));
        setEvents(formattedEvents);
      });
  }, []);

  const onClickHandler = () => {
    setState(true);
  };

  const onLogout = () => {
    removeCookie("username");
    removeCookie("token");
    location.reload();
  };

  return (
    <div>
      <OpenBtn onClick={() => onClickHandler()}>
        <FontAwesomeIcon icon={faPlus} />
      </OpenBtn>
      <LogoutBtn onClick={onLogout}>로그아웃</LogoutBtn>
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={events}
      />
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

const LogoutBtn = styled.button`
  position: absolute;
  right: 11.5rem;
  height: 2.5rem;
`;
export default Calendar;
