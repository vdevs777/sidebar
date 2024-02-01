import { PageHeader } from "@/components/page-header";
import { Ticket } from "lucide-react";

export function TicketsList() {
    return (
        <PageHeader path="Tickets /" title="Lista" icon={<Ticket />} />
    )
}