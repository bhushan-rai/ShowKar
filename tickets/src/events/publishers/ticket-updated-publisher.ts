import { Publisher, Subjects, TicketUpdatedEvent } from '@brcoding/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
