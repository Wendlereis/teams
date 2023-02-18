interface Item {
  value: string | number
  label: string
}

export interface Props {
  name: string
  label: string
  options?: {
    disabled?: boolean
    defaultValue?: string
    items?: Item[]
  }
}
