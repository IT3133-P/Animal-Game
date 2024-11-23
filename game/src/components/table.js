import { useState } from "react";
import styles from '../assets/styles/main.css';

export default function GameTable({animalDetails}) {

    const [randomSelectAnimal, setRandomSelectAnimal ] = useState(null);
    const [animalName, setAnimalName] = useState(null);
    const [resultStatus, setResultStatus] = useState(null);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [textColor, setColor] = useState(null);

    function selectAnRandomAnimalNumber() {

        const index = Math.floor(Math.random() * 10) + 1;
        setRandomSelectAnimal(index);
        console.log(index)
        filterAnimal(index)
        unselectAnAnimal();
        setResultStatus(null);
    }

    function filterAnimal(selectedAnimal) {
        const animal = animalDetails.filter((animal, index) => index===selectedAnimal);
        setAnimalName(animal[0].name)
        console.log(animal[0].name)
    }

    function selectAnAnimal(index) {
        setSelectedAnimal(index);
        gameResult(index, randomSelectAnimal);
    }

    function unselectAnAnimal() {
        setSelectedAnimal(null);
    }

    function gameResult(index, selectedAnimalIndex) {
        if(index == selectedAnimalIndex) {
            console.log(`selec : ${index}`)
            setResultStatus(`Winner`);
            setColor(`green`);
        }
        else {
            setResultStatus(`Looser`);
            setColor(`red`);
        }
    }

    return (
        
        <div className="table-container">
            <button className='button' onClick={() => {selectAnRandomAnimalNumber()}}>Play</button>
            <table border={1}>
                <tr>
                    <th colSpan={3}>Animal Game</th>
                </tr>
                <tr>
                    <th>Result</th>
                    <th>Animal Name</th>
                    <th>Select the Animal</th>
                </tr>
                <tr>
                    <td>
                        {
                            resultStatus ? (
                                <>
                                    <h3 style={{color:textColor}}>{resultStatus}</h3>
                                </>
                            ) : (
                                <>
                                No result
                                </>
                            )
                        }
                    </td>
                    <td>
                        {
                            animalName ? (
                                <h3>{animalName}</h3>
                            ) : (
                                <h4>Play Game</h4>
                            )
                        }    
                    </td>
                    <td className="grid-container">
                        
                        {
                            animalDetails.map((animal, index) => 
                                {
                                    if(selectedAnimal === index) {
                                        return (
                                            <>
                                                <div className="grid-item-active">
                                                    <img key={index} src={require(`../assets/animalPicture/${animal.img}`)} alt="animal picture" width={150} height={150} onClick={() => {unselectAnAnimal()}}/>
                                                </div>
                                            </>
                                        ) 
                                    }
                                    else {
                                        return (
                                            <div className="grid-item">
                                                <img key={index} src={require(`../assets/animalPicture/${animal.img}`)} alt="animal picture" width={150} height={150} onClick={() => {selectAnAnimal(index)}}/>
                                            </div>
                                        )
                                    }
                                }
                            
                            )
                        }
                    </td>
                </tr>
            </table>
        </div>
    )
}