import sound from '../../views/assets/fondo.mp3'

function Sound() {

    return <div style={{marginTop:"5vh"}} >
        <br></br><br></br><br></br>
        <audio controls autoPlay loop>
            <source preload src={sound} type="audio/mp3"/>
        </audio>
    </div>
}

export default Sound;