import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const employeeGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = false;  // Hardcoded for now

  if (isLoggedIn) {
    return true;  // Allow navigation 
  } else {
     router.navigate(['/']); 
    return false;
};
}
