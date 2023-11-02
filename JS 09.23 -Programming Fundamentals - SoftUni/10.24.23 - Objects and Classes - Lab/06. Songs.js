function solve(arr) {

    let count = arr.shift()
    let playlist = arr.pop()


    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }

    for (let songs of arr) {
        let [type, name, time] = songs.split(`_`)
        // let type = tokens[0];
        // let name = tokens[1];
        // let time = tokens[2];

        if (playlist == `all`) {
            let newSong = new Song(type, name, time)
            console.log(newSong.name);
        } else if (type == playlist) {
            let newSong = new Song(type, name, time)
            console.log(newSong.name);
        }
    }


}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
)
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)
