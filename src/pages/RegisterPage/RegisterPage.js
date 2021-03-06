import React, {useState, useContext} from "react";
import styled from "styled-components";
import {register, getMe} from '../../WebAPI'
import {setAuthToken} from '../../utils'
import {useHistory} from "react-router-dom";
import {AuthContext} from '../../context'
const Form = styled.form`
  width: 60%;
  margin: 40px auto 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.darkWhite};
  border-radius: 10px;
  align-items: center;
  
`
const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Neucha';
  letter-spacing: 4px;
  font-weight: bold;
  font-size: ${(props) => props.theme.fonts.LG};

`
const Input = styled.input`
  width: 400px;
  outline: none;
  margin-top: 30px;
  border-radius: 10px;
  font-family: 'Neucha';
  letter-spacing: 4px;
  font-weight: bold;
  padding: 10px;
  border-color: ${(props) => props.theme.colors.brightYellow};
  margin-left: 20px;
  font-size: ${(props) => props.theme.fonts.MD};
  color:  ${(props) => props.theme.colors.brown};

  &:hover{
    outline: none;
    border-color: ${(props) => props.theme.colors.brightBlue};
  }
`
const Button = styled.button`
  outline: none;
  font-size: ${(props) => props.theme.fonts.MD};
  color:  ${(props) => props.theme.colors.brown};
  font-family: 'Neucha';
  letter-spacing: 4px;
  font-weight: bold;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.brightYellow};
  padding: 10px;
  border-color: ${(props) => props.theme.colors.brightYellow};
  &:hover{
    outline: none;
    background: ${(props) => props.theme.colors.brightBlue};
    border-color: ${(props) => props.theme.colors.brightBlue};
    color:  ${(props) => props.theme.colors.white};
  }
`
const ErrorMessage = styled.div`
  font-family: 'Neucha';
  letter-spacing: 4px;
  font-weight: bold;
  font-size: ${(props) => props.theme.fonts.MD};
  color: red;
`

export default function RegisterPage(){
  const {setUser} = useContext(AuthContext)
  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory();
  // no errorMessage while isTyping
  const handleFocus = () => {
    setErrorMessage(null)
  };
  const handleSubmit = e => {
    setErrorMessage(null) 
    e.preventDefault();
    register(nickname,username, password).then((data) => {
      if(data.ok === 0){
        return setErrorMessage(data.message)
      }
      setAuthToken(data.token) 
      getMe().then((response) => { 
        if(response.ok !== 1){
          setAuthToken(null)
          return setErrorMessage(response.toString())
        }
        setUser(response.data) 
        history.push("/") 
      })
    })
  }
    return (
    <Form onSubmit={handleSubmit}>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Wrapper>
        nickname: <Input value={nickname} onFocus={handleFocus} onChange={e => setNickname(e.target.value)}/>
      </Wrapper>
      <Wrapper>
        username: <Input value={username} onFocus={handleFocus} onChange={e => setUsername(e.target.value)}/>
      </Wrapper>
      <Wrapper>
        password: <Input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
      </Wrapper>
      <Button type="submit">註冊</Button>
    </Form>
  )
}