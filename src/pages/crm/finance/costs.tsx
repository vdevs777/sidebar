import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export function FinanceCosts() {
    return (
        <div>
            <PageHeader path="Finanças /" title="Custos" icon={<DollarSign />}/>
        </div>
    )
}