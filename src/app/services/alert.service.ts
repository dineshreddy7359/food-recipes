import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as constants from 'src/app/app-config/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

    constructor(private toastr: ToastrService) { }

    toastrMessage(message) {
        if (message.type === constants.MESSAGE_TYPE_SUCCESS) {
            this.showSuccess(message.message);
        } 
        else if (message.type === constants.MESSAGE_TYPE_ERROR) {
            this.showError(message.message);
        } 
        else if (message.type === constants.MESSAGE_TYPE_WARNING) {
            this.showWarning(message.message);
        } 
        else if (message.type === constants.MESSAGE_TYPE_INFO) {
            this.showInfo(message.message);
        }
    }

    showSuccess(message: string) {
        setTimeout(() => {
            this.toastr.success(message, 'Success!', {timeOut: 10000, positionClass: 'toast-bottom-center'});
        });
    }

    showError(message: string) {
        setTimeout(() => {
            this.toastr.error(message, 'Error!', {timeOut: 10000, positionClass: 'toast-bottom-center'});
        });
    }

    showWarning(message: string) {
        setTimeout(() => {
            this.toastr.warning(message, 'Alert!', {timeOut: 10000, positionClass: 'toast-bottom-center'});
        });
    }

    showInfo(message: string) {
        setTimeout(() => {
            this.toastr.info(message, 'Information!', {timeOut: 10000, positionClass: 'toast-bottom-center'});
        });
    }
    
}
