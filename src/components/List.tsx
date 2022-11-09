import react from "react";

interface IProps{
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}
// const List = (props: IProps) => {
// const List = ({people}: IProps) => { //destructure

//specify that this is a type of react.FC (functional comp.) and takes a props of IProps
//optionally destructure people from the props
const List: React.FC<IProps> = ({people}) => {

    const renderList = (): JSX.Element[] => {
        return  people.map(person => {
                return (<li className="List">
                    <div className="List-Header">
                        <img className="List-img" src={person.url}/>
                        <h2>{person.name}</h2>
                    </div>
                <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                    </li>)
            })
    }

    return (
        <ul>
           {renderList()}
        </ul>
    )
}

export default List