import { PageHeader } from "@/components/page-header";
import { Ticket } from "lucide-react";

export function TicketsArchive() {
    return (
        <PageHeader path="Tickets /" title="Arquivos" icon={<Ticket />} />
    )
}