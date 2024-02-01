import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export function FinanceDashboard() {
    return (
        <div>
            <PageHeader path="Finanças /" title="Painel" icon={<DollarSign />}/>
        </div>
    )
}