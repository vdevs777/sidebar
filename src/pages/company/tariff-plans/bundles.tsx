import { PageHeader } from "@/components/page-header";
import { PlusCircle } from "lucide-react";

export function TariffPlansBundles() {
    return (
        <div>
            <PageHeader path="Planos de tarifa /" title="Pacotes" color="bg-green-400" icon={<PlusCircle />}/>
        </div>
    )
}