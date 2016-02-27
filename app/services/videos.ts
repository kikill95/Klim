import {Injectable} from 'angular2/core';

@Injectable()
export class VideoService {
    getVideos() {
        let videos = [
            {
                title: 'Canned Lightning',
                src: '../../../vids/Canned Lightning.mp4'
            },
            {
                title: 'Fireworks',
                src: '../../../vids/Fireworks.mp4'
            },
            {
                title: 'Green Spark',
                src: '../../../vids/Green Spark.mp4'
            },
            {
                title: 'Jellyfish',
                src: '../../../vids/Jellyfish.mp4'
            },
            {
                title: 'Cat',
                src: '../../../vids/Cat.mp4'
            },
            {
                title: 'Minions - Banana Song',
                src: '../../../vids/Minions - Banana Song.mp4'
            },
            {
                title: 'Tron - Dance',
                src: '../../../vids/Tron - Dance.mp4'
            },
            {
                title: 'BB-8',
                src: '../../../vids/BB-8.mp4'
            }
        ];
        return videos;
    }
}