import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export function FinanceCreditNotes() {
    return (
        <div>
            <PageHeader path="Finanças /" title="Notas de crédito" icon={<DollarSign />}/>
        </div>
    )
}