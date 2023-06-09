import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";

import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { getCookie } from "@/util/cookie";

interface propsType {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ setState }: propsType) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setState(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  function onClickHandler() {
    const startdate = `${startDate.getFullYear()}-${String(
      startDate.getMonth() + 1
    ).padStart(2, "0")}-${String(startDate.getDate()).padStart(2, "0")}`;

    const enddate = `${endDate.getFullYear()}-${String(
      endDate.getMonth() + 1
    ).padStart(2, "0")}-${String(endDate.getDate()).padStart(2, "0")}`;

    setState(false);
    fetch("http://localhost:8080/api/createPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        writer: getCookie("username"),
        title: title,
        s_date: startdate,
        e_date: enddate,
      }),
    }).then(() => location.reload());
  }

  return (
    <Background>
      <Contents ref={modalRef}>
        <FirstContent>
          <Span>시작 날짜</Span>
          <StyledDatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
          />
        </FirstContent>
        <SecondContent>
          <Span>끝나는 날짜</Span>
          <StyledDatePicker
            selected={endDate}
            onChange={(date: Date) => setEndDate(date)}
          />
        </SecondContent>
        <ThirdContent>
          <Span>타이틀</Span>
          <Input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </ThirdContent>
        <Btn onClick={onClickHandler}>일정 등록</Btn>
      </Contents>
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000a7;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
`;

const Contents = styled.div`
  width: 20rem;
  height: 25rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FirstContent = styled.div`
  width: 15rem;
  display: flex;
`;

const Span = styled.span`
  width: 3rem;
`;

const StyledDatePicker = styled(DatePicker)`
  display: flex;
  margin: 0 auto;
`;

const SecondContent = styled.div`
  width: 15rem;
  display: flex;
  margin-top: 1rem;
`;

const Input = styled.input`
  margin-left: 0.5rem;
`;

const Btn = styled.button`
  margin-top: 4rem;
  width: 6rem;
  height: 3rem;
  background-color: #65e0ff;
  border: 0;
`;

const ThirdContent = styled.div`
  width: 15rem;
  margin-top: 1rem;
`;

export default Modal;
