import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber',
  standalone : true
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number, decimals: number = 2): string {
    if (value === null || value === undefined) return '';
    
    // Round the number to the specified decimal places
    const formattedValue = value.toFixed(decimals);

    // Format the number with commas
    return formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
