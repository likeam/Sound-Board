const sounds = [ 'boo', 'gasp', 'applause',  'victory', 'wrong','tada'];

sounds.forEach(sound => {
	const btn = document.createElement('button')
	btn.classList.add('btn');
	let l =  174*(sound.length);
	
	btn.innerText = sound
	btn.style.backgroundColor = `#${l}`;

	btn.addEventListener('click', ()=>{
		document.getElementById(sound).play()
	})

	document.getElementById('buttons').appendChild(btn);
})


function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}