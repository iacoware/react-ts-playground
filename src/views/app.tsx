import React from "react"

type Props = {
    name: string
}
const App: React.FC<Props> = ({ name }) => {
    return <h1>Hello {name}!</h1>
}

export default App
