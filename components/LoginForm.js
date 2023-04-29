import React, { useState, useCallback, useMemo } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { symbol } from "prop-types";

const LoginForm = ({ setIsLoggenIn }) => {

  const [ id, setId ] = useState("");
  const [ password, setPassword ] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  /*
  인라인 스타일링시 useMemo로 리렌더링 막기 또는 스타일드 컴포넌트로 만들기
  const style = useMemo(() => ({ marginTop: 10 }), []);
  */

  /*
  리액트에서는 form 태그에 e.preventDefault() 를 많이 하는데 antb에선 하면 안된다.
  onFinish에 이미 e.preventDefault()가 적용되어 있기 때문이다.
   */

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggenIn(true);
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br/>
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <Input 
          name="user-password"
          type="password"
          value={password} 
          onChange={onChangePassword} 
          required 
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup">
          <a><Button>회원가입</Button></a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
}

export default LoginForm;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;