import { PageHeader } from "@/components/page-header";
import { PlusCircle } from "lucide-react";

export function TariffPlansRecurring() {
    return (
        <div>
            <PageHeader path="Planos de tarifa /" title="Recorrer" color="bg-green-400" icon={<PlusCircle />}/>
        </div>
    )
}