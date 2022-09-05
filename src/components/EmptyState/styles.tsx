import styled from '@emotion/styled'

export const IconWrapper = styled.div`
  ${({ theme: { palette, spacing } }) => `
    display: flex;
    justifyContent: center;
    alignItems: center;

    padding: ${spacing(4)};

    background-color: ${palette.secondary.light};

    color: ${palette.common.white};

    border-radius: 50%;

    width: fit-content;

    margin-bottom: ${spacing(2)};

    svg {
      width: ${spacing(4)};
      height: ${spacing(4)};
    }
  `}
`
