import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export function FinanceProformaInvoices() {
    return (
        <div>
            <PageHeader path="Finanças /" title="Faturas proforma" icon={<DollarSign />}/>
        </div>
    )
}