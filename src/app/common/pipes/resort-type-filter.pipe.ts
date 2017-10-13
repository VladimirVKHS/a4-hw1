import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resortTypeFilter'
})
export class ResortTypeFilterPipe implements PipeTransform {

  transform(resorts: Resort[], resortType: ResortType): Resort[] {
    if (!resortType) {
      return resorts;
    }
    return resorts.filter((resort: Resort) => resort.type_id === resortType._id);
  }

}
