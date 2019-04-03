import {Forms} from '../models';

/**
 * Generate a complete Forms object for use with tests.
 * @param forms A partial (or complete) Forms object.
 */
export function givenForms(forms?: Partial<Forms>) {
  const data = Object.assign(
    {
      requisitionNumber: 'do a thing',
      setAside: 'There are some things that need doing',
    },
    forms,
  );
  return new Forms(data);
}
