import styled from "styled-components";

import { useState } from "react";
import Link from "next/link";

const Form = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <Container>
      <IdInput
        type="text"
        placeholder="아이디를 입력하세요"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <PwInput
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />
      <SubmitBtn>로그인</SubmitBtn>
      <SubContents>
        <Link href={"/regist"}>회원가입 하러가기</Link>
      </SubContents>
    </Container>
  );
};

const Container = styled.div`
  width: 40rem;
  height: 30rem;
  border: 2px solid #9eecff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IdInput = styled.input`
  width: 30rem;
  height: 3.5rem;
  padding: 0 1rem;
  border: 2px solid #65e0ff;
  border-radius: 10px;
`;

const PwInput = styled.input`
  width: 30rem;
  height: 3.5rem;
  padding: 0 1rem;
  margin-top: 2rem;
  border: 2px solid #65e0ff;
  border-radius: 10px;
`;

const SubmitBtn = styled.button`
  width: 12rem;
  height: 3.5rem;
  background-color: #65e0ff;
  margin-top: 4rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
`;

const SubContents = styled.div`
  margin-top: 2rem;
`;

export default Form;
