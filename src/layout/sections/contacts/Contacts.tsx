import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'

export const Contacts = () => {
  return (
    <StyledContacts>
        <SectionTitle>Contact</SectionTitle>
        <StyledForm>
            <Field placeholder='name'></Field>
            <Field type='email' placeholder='email'></Field>
            <Field as={'textarea'} placeholder='message'></Field>
            <Button type={'submit'}>Send Message</Button>
        </StyledForm>
    </StyledContacts>
  )
}
const StyledContacts = styled.section `
min-height: 50vh;
background-color: #baf2f6;
`
const StyledForm = styled.form `
max-width: 500px;
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
margin: 0 auto;
`
const Field = styled.input `

`