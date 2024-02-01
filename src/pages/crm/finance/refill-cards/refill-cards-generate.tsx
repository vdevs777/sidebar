import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export function FinanceRefillCardsGenerate() {
    return (
        <div>
            <PageHeader path="Finanças / Recargas de cartão /" title="Gerar" icon={<DollarSign />}/>
        </div>
    )
}