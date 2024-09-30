import { type FC, PropsWithChildren } from 'react'

export const Block: FC<PropsWithChildren> = ({ children }) => {
  return <span>{children}</span>
}
