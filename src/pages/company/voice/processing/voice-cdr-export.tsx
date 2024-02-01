import { PageHeader } from "@/components/page-header";
import { Mic } from "lucide-react";

export function VoiceProcessingCDRExport() {
    return (
        <div>
            <PageHeader path="Voz / Processamento /" title="Exportar CDR" color="bg-green-400" icon={<Mic />}/>
        </div>
    )
}