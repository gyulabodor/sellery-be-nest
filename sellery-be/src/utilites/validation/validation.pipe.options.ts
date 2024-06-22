import { ValidationError, ValidationOptions } from 'class-validator';

export interface ValidationPipeOptions  extends ValidationOptions {
  transform?: true;
  enableDebugMessage: true
  disableErrorMessages?: true;
  exceptionFactory?: (errors: ValidationError[]) => any;
}