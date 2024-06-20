// import { UnprocessableEntityException, ValidationPipe } from '@nestjs/common';

// export const GlobalValidationPipe = new ValidationPipe({
//   transform: true,
//   transformOptions: {
//     excludeExtraneousValues: true,
//     exposeUnsetFields: false,
//     exposeDefaultValues: false,
//   },
//   stopAtFirstError: true,
//   exceptionFactory(errors) {
//     if (errors) {
//       if (errors.length > 0) {
//         throw new UnprocessableEntityException({
//           errors: errors.map((e) => ({ [e.property]: e })),
//         });
//       }
//     }
//   },
// });
