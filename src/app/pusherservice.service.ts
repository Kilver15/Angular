import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
@Injectable({
  providedIn: 'root'
})
export class PusherserviceService {
  private pusher: Pusher;


  constructor() {
    this.pusher = new Pusher('58971535abaec16e7301', {
      cluster: 'us3',
      forceTLS: true
    });

    this.pusher.subscribe('genero-channel');
  }

  subscribeToGeneroUpdatedEvent(callback: (data: any) => void): void {
    const channel = this.pusher.subscribe('genero-channel');
    channel.bind('GeneroActualizado', callback);
  }
}
