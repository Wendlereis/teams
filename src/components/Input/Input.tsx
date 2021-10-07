import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

import { Props } from './types'

import * as S from './styles'

function Input({ name, label, options }: Props): JSX.Element {
  const { control } = useFormContext()

  return (
    <S.Wrapper>
      <Controller
        name={name}
        control={control}
        defaultValue={options?.defaultValue}
        render={({ field }) => (
          <TextField
            variant="outlined"
            color="primary"
            id={name}
            label={label}
            disabled={options?.disabled}
            {...field}
            fullWidth
          />
        )}
      />
    </S.Wrapper>
  )
}

export default Input
