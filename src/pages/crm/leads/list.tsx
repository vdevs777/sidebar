import { PageHeader } from "@/components/page-header";
import { Megaphone } from "lucide-react";

export function LeadsList() {
    return (
        <div>
            <PageHeader path="Leads /" title="Lista" icon={<Megaphone />}/>
        </div>
    )
}