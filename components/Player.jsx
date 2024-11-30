const Player = ({playlist}) => {
    return (
        <section className="Embedded_Player">
            <iframe height="380" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${playlist}&color=%2396cebe&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=true&show_teaser=true&visual=false`}></iframe>
        </section>
    )
}

export default Player
