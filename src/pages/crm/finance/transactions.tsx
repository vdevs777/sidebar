import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export function FinanceTransactions() {
    return (
        <div>
            <PageHeader path="Finanças /" title="Transações" icon={<DollarSign />}/>
        </div>
    )
}