import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export function FinancePaymentStatementsProcessing() {
    return (
        <div>
            <PageHeader path="Finanças / Extratos de pagamento /" title="Processando" icon={<DollarSign />}/>
        </div>
    )
}