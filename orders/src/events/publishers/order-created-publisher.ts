import { OrderCreatedEvent, Publisher, Subjects } from '@brcoding/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
