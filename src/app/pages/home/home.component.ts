import { Component, OnInit } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private audioContext: AudioContext;

  constructor() { }

  ngOnInit() {
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple'
    });

    wavesurfer.load('./../../../assets/media/summer.mp3');
  }

}
