import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export function FinanceInvoices() {
    return (
        <div>
            <PageHeader path="Finanças /" title="Faturas" icon={<DollarSign />}/>
        </div>
    )
}