import sound from '../../views/assets/fondo.mp3'

function Sound() {

    return <>
        <audio controls autoPlay loop>
            <source preload src={sound} type="audio/mp3"/>
        </audio>
    </>
}

export default Sound;