import React from 'react'

const Contador = () => {
    const [contador, setContador] = React.useState(0);

    React.useEffect(() => {
        document.title = `Contador: ${contador}`;
    }, [contador]);

    return (
        <React.Fragment>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Contador</button>
        </React.Fragment>
    )
}

export default Contador;