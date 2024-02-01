import { PageHeader } from "@/components/page-header";
import { Mail } from "lucide-react";

export function MessagesMassSendingHistory() {
    return (
        <div>
            <PageHeader path="Mensagens / Envio em massa /" title="Histórico" icon={<Mail/>}/>
        </div>
    )
}