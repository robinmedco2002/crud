import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const state = {
        "Name": "Robin Kumar",
        "Class": "5B"
    }
    return (
        <NoteContext.Provider value={state}>
            {props.childres}
        </NoteContext.Provider>
    )
}

export default NoteState;