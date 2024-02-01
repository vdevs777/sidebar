import { PageHeader } from "@/components/page-header";
import { Ticket } from "lucide-react";

export function TicketsRecipients() {
    return (
        <PageHeader path="Tickets /" title="Destinatários" icon={<Ticket />} />
    )
}