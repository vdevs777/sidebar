import { PageHeader } from "@/components/page-header";
import { PlusCircle } from "lucide-react";

export function TariffPlansOneTime() {
    return (
        <div>
            <PageHeader path="Planos de tarifa /" title="Vez única" color="bg-green-400" icon={<PlusCircle />}/>
        </div>
    )
}