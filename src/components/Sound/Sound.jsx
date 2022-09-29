import sound from '../../views/assets/commercial-sport-rock.m4a'

function Sound() {

    return <>
        <audio controls autoPlay loop>
            <source src={sound} type="audio/m4a"/>
        </audio>
    </>
}

export default Sound;