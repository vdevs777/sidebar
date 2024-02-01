import { PageHeader } from "@/components/page-header";
import { Megaphone } from "lucide-react";

export function LeadsDashboard() {
    return (
        <div>
            <PageHeader path="Leads /" title="Painel" icon={<Megaphone />}/>
        </div>
    )
}