import { PageHeader } from "@/components/page-header";
import { PlusCircle } from "lucide-react";

export function TariffPlansVoice() {
    return (
        <div>
            <PageHeader path="Planos de tarifa /" title="Voz" color="bg-green-400" icon={<PlusCircle />}/>
        </div>
    )
}