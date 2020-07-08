import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  private audioContext: AudioContext;

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('fr');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
  }




  ngOnInit() {
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple',
      height: window.innerHeight - 168,
    });

    wavesurfer.load('./../../../assets/media/summer.mp3');
  }

}
