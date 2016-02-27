import {Page} from 'ionic-framework/ionic';
import {VideoService} from '../../services/videos';

@Page({
    templateUrl: 'build/pages/home/home.html',
    providers: [VideoService]
})
export class HomePage {
    constructor(private video: VideoService) {}
}
