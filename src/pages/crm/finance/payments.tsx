import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export function FinancePayments() {
    return (
        <div>
            <PageHeader path="Finanças /" title="Pagamentos" icon={<DollarSign />}/>
        </div>
    )
}