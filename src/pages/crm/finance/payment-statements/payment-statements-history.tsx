import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export function FinancePaymentStatementsHistory() {
    return (
        <div>
            <PageHeader path="Finanças / Extratos de pagamento /" title="Histórico" icon={<DollarSign />}/>
        </div>
    )
}