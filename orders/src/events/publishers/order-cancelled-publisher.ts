import { OrderCancelledEvent, Publisher, Subjects } from '@brcoding/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
