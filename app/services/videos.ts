import {Injectable} from 'angular2/core';

@Injectable()
export class VideoService {
    getVideos() {
        let videos = [
            {
                title: 'Canned Lightning',
                src: 'vids/canned_lightning.mp4'
            },
            {
                title: 'Fireworks',
                src: 'vids/fireworks.mp4'
            },
            {
                title: 'Green Spark',
                src: 'vids/green_spark.mp4'
            },
            {
                title: 'Jellyfish',
                src: 'vids/jellyfish.mp4'
            },
            {
                title: 'Cat',
                src: 'vids/sat.mp4'
            },
            {
                title: 'Minions - Banana Song',
                src: 'vids/minions_banana_song.mp4'
            },
            {
                title: 'Tron - Dance',
                src: 'vids/tron_dance.mp4'
            },
            {
                title: 'BB-8',
                src: 'vids/bb_8.mp4'
            }
        ];
        return videos;
    }
}