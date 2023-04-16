import styled from "styled-components";

import Form from "@/components/login/form";

const Login = () => {
  return (
    <Background>
      <Form />
    </Background>
  );
};

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Login;
