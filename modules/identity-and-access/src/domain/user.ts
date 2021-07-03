import { Static, Record } from 'runtypes';
import { Email } from '@modules/identity-and-access/domain/email';
import { UUID } from '@shared/domain/uuid';
import { GeneratedTag6 } from './generatedTag6';
import { EncryptedPassword } from './password';

export const User = Record({
  id: UUID.withBrand('UserId'),
  tag: GeneratedTag6,
  email: Email,
  password: EncryptedPassword,
});

export type User = Static<typeof User>;