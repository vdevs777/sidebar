import { PageHeader } from "@/components/page-header";
import { Mic } from "lucide-react";

export function VoiceProcessingCDRHistory() {
    return (
        <div>
            <PageHeader path="Voz / Processamento /" title="Histórico CDR" color="bg-green-400" icon={<Mic />}/>
        </div>
    )
}