import { createValue } from '../createValue'

export function varValue(name: string) {
  return createValue({
    render() {
      return name
    },
  })
}

export type VarValue = ReturnType<typeof varValue>