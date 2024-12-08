import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'

export const Contacts = () => {
  return (
    <StyledContacts id='contact'>
        <Container>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder='name'></Field>
                <Field type='email' placeholder='email'></Field>
                <Field as={'textarea'} placeholder='message'></Field>
                <Button type={'submit'}>Send Message</Button>
            </StyledForm>
        </Container>
    </StyledContacts>
  )
}
const StyledContacts = styled.section `
    position: relative;
`
const StyledForm = styled.form `
    max-width: 540px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 155px;
    }
`
const Field = styled.input `
    width: 100%;
    border: 1px solid ${theme.colors.borderColor};
    background-color: ${theme.colors.secondaryBg};
    font-family: 'Poppins', sans-serif;
    padding: 7px 15px;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${theme.colors.font};

    &::placeholder {
        color: ${theme.colors.placeHolderColor};
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }
`