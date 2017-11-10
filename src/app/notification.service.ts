import { Injectable } from '@angular/core';
import { Broadcaster } from './broadcaster.service';

export const Notification = {
  SUCCESS: 'SUCCESS',
  WARN: 'WARN',
  FAIL: 'FAIL',
  LOADING: 'LOADING'
}

@Injectable()
export class NotificationService {

	constructor(
		private broadcaster: Broadcaster
	){ }

	success(message:string): void {
    this.broadcaster.broadcast(Notification.SUCCESS, message);
  }

  warn(message:string): void {
    this.broadcaster.broadcast(Notification.WARN, message);
  }

  fail(message:string): void {
    this.broadcaster.broadcast(Notification.FAIL, message);
  }

  loading(isLoading:boolean): void {
    this.broadcaster.broadcast(Notification.LOADING, isLoading);
  }

}