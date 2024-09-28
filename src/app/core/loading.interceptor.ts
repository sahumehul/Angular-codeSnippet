import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { delay, finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const spinService = inject(SpinnerService)
  spinService.spin();
  return next(req).pipe(
    delay(200),
    finalize(()=>spinService.idle())
  );
};
