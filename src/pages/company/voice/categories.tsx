import { PageHeader } from "@/components/page-header";
import { Mic } from "lucide-react";

export function VoiceCategories() {
    return (
        <div>
            <PageHeader path="Voz /" title="Categorias" color="bg-green-400" icon={<Mic />}/>
        </div>
    )
}