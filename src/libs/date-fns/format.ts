import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate(date: Date, pattern = 'dd/MM/yyyy'): string {
  return format(date, pattern, { locale: ptBR })
}
