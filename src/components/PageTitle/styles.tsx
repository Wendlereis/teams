import styled from '@emotion/styled'

export const Wraper = styled.section`
  ${({ theme: { breakpoints } }) => `
    margin-top: 32px;
    margin-bottom: 48px;

    ${breakpoints.up('md')} {
      margin-top: 56px;
    }
  `}
`
