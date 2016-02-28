import {Page} from 'ionic-framework/ionic';
import {VideoService} from '../../services/videos';

@Page({
    templateUrl: 'build/pages/home/home.html',
    providers: [VideoService]
})
export class HomePage {
    chosenVideo: any;
    constructor(private video: VideoService) {
        this.chosenVideo = {
            title: null,
            src: null
        };
    }

    chooseVideo(video) {
        this.chosenVideo = video;
    }
    getChosenVideo() {
        return this.chosenVideo;
    }
}
