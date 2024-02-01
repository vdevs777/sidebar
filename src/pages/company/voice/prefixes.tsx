import { PageHeader } from "@/components/page-header";
import { Mic } from "lucide-react";

export function VoicePrefixes() {
    return (
        <div>
            <PageHeader path="Voz /" title="Prefixos" color="bg-green-400" icon={<Mic />}/>
        </div>
    )
}