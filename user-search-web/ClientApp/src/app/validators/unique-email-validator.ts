import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { debounceTime, map } from "rxjs/operators";
import { UserService } from "../services/user.service";

export const uniqueEmailValidator = (userService: UserService): AsyncValidatorFn => {
    return (c: AbstractControl): {[key: string]: boolean} | any => {
    return userService.isEmailUnique(c.value)
    .pipe(map(isUnique => {

        if (!isUnique) {
            return {'nonUniqueEmail': true};
        }

        return null;
    
   }));
}
};