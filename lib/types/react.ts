// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ReactTag = keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>

export type PropsOf<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>,
> = T extends keyof React.JSX.IntrinsicElements
  ? React.JSX.IntrinsicElements[T]
  : T extends React.JSXElementConstructor<infer P>
  ? P
  : never

// eslint-disable-next-line @typescript-eslint/ban-types
export type WithAsProp<E extends React.ElementType, P = {}> = {
  as?: E
} & P &
  Omit<PropsOf<E>, 'as' | keyof P>
