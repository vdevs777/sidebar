import { PageHeader } from "@/components/page-header";
import { Ticket } from "lucide-react";

export function TicketsDashboard() {
    return (
        <PageHeader path="Tickets /" title="Painel" icon={<Ticket />} />
    )
}