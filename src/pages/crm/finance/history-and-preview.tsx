import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export function FinanceHistoryAndPreview() {
    return (
        <div>
            <PageHeader path="Finanças /" title="Histórico e visualização" icon={<DollarSign />}/>
        </div>
    )
}