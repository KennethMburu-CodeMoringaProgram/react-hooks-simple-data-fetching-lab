import React from "react"
// create your App component here


export default function App() {
    const [image, setImage] = useState("https://dog.ceo/api/breeds/image/random")
    const [likes, setlikes] = useState(20)


     function handleNewCorgiClick() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then(({ image }) => {
                setImage(image)

            })

        function handleLikeClick() {
            setlikes(likes + 1)
        }
        return (

            <div>
                <h1>Corgifinder</h1>
                <div className="button">
                    <button onClick={handleNewCorgiClick}>New Corgi Please</button>
                    <button onClick={handleLikeClick}>Likes:{likes}</button>
                </div>
                <img src={image} alt="Random Corgi" />
            </div>

        );

    }

}