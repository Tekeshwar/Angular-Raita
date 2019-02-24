import { AbstractControl } from '../../node_modules/@angular/forms';

export function postalCodeValidator(control: AbstractControl): { [key: string]: any } | null {
    if (control.value !== null && control.value !== undefined) {
        const regex = new RegExp('^[0-9]{5}$');
        if (!regex.test(control.value)) {
            return { isError: true };
        } else {
            return null;
        }
    }
    return null;
}
