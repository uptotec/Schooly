import * as yup from 'yup';

export const NewSessionValidationSchema = yup.object().shape({
  enrollmentId: yup.number().required(),

  type: yup.string().equals(['lecture', 'tutorial', 'lab']),

  online: yup.boolean().required(),

  recurring: yup.boolean().required(),

  day: yup
    .string()
    .equals(['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'])
    .when('recurring', {
      is: true,
      then: yup.string().required(),
    }),

  date: yup.string().when('recurring', {
    is: false,
    then: yup.string().required(),
  }),

  start_time: yup.string().required(),

  duration: yup.number().required(),

  joinLink: yup.string().url(),
});
