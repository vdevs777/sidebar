import { PageHeader } from "@/components/page-header";
import { Ticket } from "lucide-react";

export function TicketsClosed() {
    return (
        <PageHeader path="Tickets /" title="Tickets fechados" icon={<Ticket />} />
    )
}