import React from "react"
import { createElement } from "react"


export const ElementWithoutJSX = () => {
    const props = {
        title: "Element",
        subtitle: "React Element Without JSX",
        children: createElement('p', {style: {fontSize: '18px'}}, 'You dont have to use JSX')
    }

  return createElement('section', props)
}

export function ElementWithJSX(): React.JSX.Element {
    return <p style={{fontSize: '18px'}}>You dont have to use JSX</p>
}
