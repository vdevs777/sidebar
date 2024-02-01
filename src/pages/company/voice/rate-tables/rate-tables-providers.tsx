import { PageHeader } from "@/components/page-header";
import { Mic } from "lucide-react";

export function VoiceRateTablesProviders() {
    return (
        <div>
            <PageHeader path="Voz / Tabelas de taxa /" title="Provedores" color="bg-green-400" icon={<Mic />}/>
        </div>
    )
}