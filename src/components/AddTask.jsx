import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    function isValidFields() {
        return !title.trim() || !description.trim();
    }

    function emptyFields() {
        setTitle("");
        setDescription("");
    }

    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input                 
                placeholder="Digite o título da Tarefa"                
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            
            <Input                
                placeholder="Digite a descrição da tarefa"                
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <Button
                className="bg-slate-500 text-white px-4 py-2 rounded-md"
                onClick={() => {                        
                         if( isValidFields()) {
                            return alert("Error");
                        }
                        onAddTaskSubmit(title, description);
                        emptyFields();
                }}
            >
                Adicionar
            </Button>
        </div>
    )
}

export default AddTask;