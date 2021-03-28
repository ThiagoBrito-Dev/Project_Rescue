import { Occurrences } from '../models/occurrences';

export default {
  render (occurrences: InstanceType<typeof Occurrences>) {
    return {
      id: occurrences.id,
      animal_name: occurrences.animal_name,
      latitude: occurrences.latitude,
      longitude: occurrences.longitude,
      description: occurrences.description,
      photos: occurrences.photos,
      was_found: occurrences.was_found,
      contact_name: occurrences.contact_name,
      contact_info: occurrences.contact_info,
      created_at: occurrences.created_at
    };
  }
};