export class songInfo{
    songName!: string;
    songArtist!: string;
    songGenre!: string;
    songYrRel!: string;
    songPic!: string;

    constructor(
        songName: string,
        songArtist: string,
        songGenre: string,
        songYrRel: string,
        songPic: string
    ){
        this.songName = songName;
        this.songArtist = songArtist;
        this.songGenre = songGenre;
        this.songYrRel = songYrRel;
        this.songPic = songPic;
    }
}