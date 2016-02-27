import {Injectable} from 'angular2/core';

@Injectable()
export class VideoService {
    getVideos() {
        let videos = [
            {
                title: 'Hello Ionic'
            },
            {
                title: 'My First List'
            }
        ];
        return videos;
    }
}