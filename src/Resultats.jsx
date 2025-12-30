
export default function Resultats() {

    const List = [

        { Nom: "Pc", Type: "Electro" },
        { Nom: "Machine a laver", Type: "Electro" },
        { Nom: "Apple", Type: "Fruit" },
        { Nom: "Cartable", Type: "School" }

    ]
    const Mafonc = () => {
        return List.map((ls, key) => (
            <tr key={key}>
                <td>{ls.Nom}</td>
                <td>{ls.Type}</td>
            </tr>
        ));
    };
    return (
        <>

            <h1>Resultats de Recherche</h1>
            <table border={1}>
                <tr>
                    <th >Nom</th>
                    <th>Type</th>
                </tr>
                <tbody>
                    {Mafonc()}
                </tbody>
            </table>
        </>
    )

}