import { PaymentCreatedEvent, Publisher, Subjects } from '@brcoding/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
