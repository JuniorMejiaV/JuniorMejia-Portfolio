import Image from 'next/image'

function Background() {
    return(
        <>
            <div className='col-11 col-sm-11 col-md-11 col-lg-6'>
                <img src='/junior.jpg' alt="Picture of Junior standing in front of a train." className="img-fluid" />
            </div>
        </>
    )
}

export default Background;